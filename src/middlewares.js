import AppCache from './cache';
import Parse from 'parse/node';
import auth from './Auth';
import Config from './Config';
import ClientSDK from './ClientSDK';
import defaultLogger from './logger';
import rest from './rest';
import MongoStorageAdapter from './Adapters/Storage/Mongo/MongoStorageAdapter';
import PostgresStorageAdapter from './Adapters/Storage/Postgres/PostgresStorageAdapter';
import rateLimit from 'express-rate-limit';
import { RateLimitOptions } from './Options/Definitions';
import { pathToRegexp } from 'path-to-regexp';
import RedisStore from 'rate-limit-redis';
import { createClient } from 'redis';
import { BlockList, isIPv4 } from 'net';

export const DEFAULT_ALLOWED_HEADERS =
  'X-Parse-Master-Key, X-Parse-REST-API-Key, X-Parse-Javascript-Key, X-Parse-Application-Id, X-Parse-Client-Version, X-Parse-Session-Token, X-Requested-With, X-Parse-Revocable-Session, X-Parse-Request-Id, Content-Type, Pragma, Cache-Control';

const getMountForRequest = function (req) {
  const mountPathLength = req.originalUrl.length - req.url.length;
  const mountPath = req.originalUrl.slice(0, mountPathLength);
  return req.protocol + '://' + req.get('host') + mountPath;
};

const getBlockList = (ipRangeList, store) => {
  if (store.get('blockList')) return store.get('blockList');
  const blockList = new BlockList();
  ipRangeList.forEach(fullIp => {
    if (fullIp === '::/0' || fullIp === '::') {
      store.set('allowAllIpv6', true);
      return;
    }
    if (fullIp === '0.0.0.0/0' || fullIp === '0.0.0.0') {
      store.set('allowAllIpv4', true);
      return;
    }
    const [ip, mask] = fullIp.split('/');
    if (!mask) {
      blockList.addAddress(ip, isIPv4(ip) ? 'ipv4' : 'ipv6');
    } else {
      blockList.addSubnet(ip, Number(mask), isIPv4(ip) ? 'ipv4' : 'ipv6');
    }
  });
  store.set('blockList', blockList);
  return blockList;
};

export const checkIp = (ip, ipRangeList, store) => {
  const incomingIpIsV4 = isIPv4(ip);
  const blockList = getBlockList(ipRangeList, store);

  if (store.get(ip)) return true;
  if (store.get('allowAllIpv4') && incomingIpIsV4) return true;
  if (store.get('allowAllIpv6') && !incomingIpIsV4) return true;
  const result = blockList.check(ip, incomingIpIsV4 ? 'ipv4' : 'ipv6');

  // If the ip is in the list, we store the result in the store
  // so we have a optimized path for the next request
  if (ipRangeList.includes(ip) && result) {
    store.set(ip, result);
  }
  return result;
};

// Checks that the request is authorized for this app and checks user
// auth too.
// The bodyparser should run before this middleware.
// Adds info to the request:
// req.config - the Config for this app
// req.auth - the Auth for this request
export function handleParseHeaders(req, res, next) {
  console.log('🔍 [Parse Debug] Handling Parse Headers');
  var mount = getMountForRequest(req);

  let context = {};
  if (req.get('X-Parse-Cloud-Context') != null) {
    try {
      context = JSON.parse(req.get('X-Parse-Cloud-Context'));
      if (Object.prototype.toString.call(context) !== '[object Object]') {
        throw 'Context is not an object';
      }
    } catch (e) {
      return malformedContext(req, res);
    }
  }
  var info = {
    appId: req.get('X-Parse-Application-Id'),
    sessionToken: req.get('X-Parse-Session-Token'),
    masterKey: req.get('X-Parse-Master-Key'),
    maintenanceKey: req.get('X-Parse-Maintenance-Key'),
    installationId: req.get('X-Parse-Installation-Id'),
    clientKey: req.get('X-Parse-Client-Key'),
    javascriptKey: req.get('X-Parse-Javascript-Key'),
    dotNetKey: req.get('X-Parse-Windows-Key'),
    restAPIKey: req.get('X-Parse-REST-API-Key'),
    clientVersion: req.get('X-Parse-Client-Version'),
    context: context,
  };
  
    
      console.log('🔍 [Debug] req.body:', req.body);
      console.log('🔍 [Debug] _ApplicationId:', req.body?._ApplicationId);

      const appConfig = AppCache.get(req.body?._ApplicationId);
      console.log('🔍 [Debug] AppCache.get(_ApplicationId):', appConfig);

      console.log('🔍 [Debug] info.masterKey:', info.masterKey);
      console.log('🔍 [Debug] Expected masterKey:', appConfig?.masterKey);
      console.log('🔍 [Debug] Master key match:', appConfig?.masterKey === info.masterKey);
      console.log('🔍 [Debug] info.appId:', info.appId);

  var basicAuth = httpAuth(req);

  if (basicAuth) {
    var basicAuthAppId = basicAuth.appId;
    if (AppCache.get(basicAuthAppId)) {
      info.appId = basicAuthAppId;
      info.masterKey = basicAuth.masterKey || info.masterKey;
      info.javascriptKey = basicAuth.javascriptKey || info.javascriptKey;
    }
  }

  if (req.body) {
    // Unity SDK sends a _noBody key which needs to be removed.
    // Unclear at this point if action needs to be taken.
    delete req.body._noBody;
  }

  var fileViaJSON = false;
    console.log('🔍 [Parse Debug] info:', info)
    console.log('🔍 [Parse Debug] AppCache.get(info.appId):', AppCache.get(info.appId));
  if (!info.appId || !AppCache.get(info.appId)) {
    console.log('❌ [Parse Debug] If statement due to missing appId or app not found in cache');
    // See if we can find the app id on the body.
    if (req.body instanceof Buffer) {
      // The only chance to find the app id is if this is a file
      // upload that actually is a JSON body. So try to parse it.
      // https://github.com/parse-community/parse-server/issues/6589
      // It is also possible that the client is trying to upload a file but forgot
      // to provide x-parse-app-id in header and parse a binary file will fail
      try {
        req.body = JSON.parse(req.body);
      } catch (e) {
        console.log('❌ [Parse Debug] Failed to parse body as JSON:', e);
        return invalidRequest(req, res);
      }
      fileViaJSON = true;
    }

    if (req.body) {
      delete req.body._RevocableSession;
    }
    console.log('🔍 [Parse Debug] Checking for _ApplicationId in request body');
    console.log('🔍 [Parse Debug] req.body._ApplicationId:', req.body._ApplicationId);
    if (
      req.body &&
      req.body._ApplicationId &&
      AppCache.get(req.body._ApplicationId) &&
      (!info.masterKey || AppCache.get(req.body._ApplicationId).masterKey === info.masterKey)
    ) {
      info.appId = req.body._ApplicationId;
      info.javascriptKey = req.body._JavaScriptKey || '';
      delete req.body._ApplicationId;
      delete req.body._JavaScriptKey;
      // TODO: test that the REST API formats generated by the other
      // SDKs are handled ok
      if (req.body._ClientVersion) {
        info.clientVersion = req.body._ClientVersion;
        delete req.body._ClientVersion;
      }
      if (req.body._InstallationId) {
        info.installationId = req.body._InstallationId;
        delete req.body._InstallationId;
      }
      if (req.body._SessionToken) {
        info.sessionToken = req.body._SessionToken;
        delete req.body._SessionToken;
      }
      if (req.body._MasterKey) {
        info.masterKey = req.body._MasterKey;
        delete req.body._MasterKey;
      }
      if (req.body._context) {
        if (req.body._context instanceof Object) {
          info.context = req.body._context;
        } else {
          try {
            info.context = JSON.parse(req.body._context);
            if (Object.prototype.toString.call(info.context) !== '[object Object]') {
              throw 'Context is not an object';
            }
          } catch (e) {
            return malformedContext(req, res);
          }
        }
        delete req.body._context;
      }
      if (req.body._ContentType) {
        req.headers['content-type'] = req.body._ContentType;
        delete req.body._ContentType;
      }
    } else {
      console.log('❌ [Parse Debug] Invalid request due to missing appId');

      return invalidRequest(req, res);
    }
  }

  if (info.sessionToken && typeof info.sessionToken !== 'string') {
    info.sessionToken = info.sessionToken.toString();
  }

  if (info.clientVersion) {
    info.clientSDK = ClientSDK.fromString(info.clientVersion);
  }

  if (fileViaJSON) {
    req.fileData = req.body.fileData;
    // We need to repopulate req.body with a buffer
    var base64 = req.body.base64;
    req.body = Buffer.from(base64, 'base64');
  }

  const clientIp = getClientIp(req);
  const config = Config.get(info.appId, mount);
  if (config.state && config.state !== 'ok') {
    res.status(500);
    res.json({
      code: Parse.Error.INTERNAL_SERVER_ERROR,
      error: `Invalid server state: ${config.state}`,
    });
    return;
  }

  info.app = AppCache.get(info.appId);
  req.config = config;
  req.config.headers = req.headers || {};
  req.config.ip = clientIp;
  req.info = info;

  const isMaintenance =
    req.config.maintenanceKey && info.maintenanceKey === req.config.maintenanceKey;
  if (isMaintenance) {
    if (checkIp(clientIp, req.config.maintenanceKeyIps || [], req.config.maintenanceKeyIpsStore)) {
      req.auth = new auth.Auth({
        config: req.config,
        installationId: info.installationId,
        isMaintenance: true,
      });
      next();
      return;
    }
    const log = req.config?.loggerController || defaultLogger;
    log.error(
      `Request using maintenance key rejected as the request IP address '${clientIp}' is not set in Parse Server option 'maintenanceKeyIps'.`
    );
  }

  let isMaster = info.masterKey === req.config.masterKey;

  if (isMaster && !checkIp(clientIp, req.config.masterKeyIps || [], req.config.masterKeyIpsStore)) {
    const log = req.config?.loggerController || defaultLogger;
    log.error(
      `Request using master key rejected as the request IP address '${clientIp}' is not set in Parse Server option 'masterKeyIps'.`
    );
    isMaster = false;
    const error = new Error();
    error.status = 403;
    error.message = `unauthorized`;
    throw error;
  }

  if (isMaster) {
    req.auth = new auth.Auth({
      config: req.config,
      installationId: info.installationId,
      isMaster: true,
    });
    return handleRateLimit(req, res, next);
  }

  var isReadOnlyMaster = info.masterKey === req.config.readOnlyMasterKey;
  if (
    typeof req.config.readOnlyMasterKey != 'undefined' &&
    req.config.readOnlyMasterKey &&
    isReadOnlyMaster
  ) {
    req.auth = new auth.Auth({
      config: req.config,
      installationId: info.installationId,
      isMaster: true,
      isReadOnly: true,
    });
    return handleRateLimit(req, res, next);
  }

  // Client keys are not required in parse-server, but if any have been configured in the server, validate them
  //  to preserve original behavior.
  const keys = ['clientKey', 'javascriptKey', 'dotNetKey', 'restAPIKey'];
  const oneKeyConfigured = keys.some(function (key) {
    return req.config[key] !== undefined;
  });
  const oneKeyMatches = keys.some(function (key) {
    return req.config[key] !== undefined && info[key] === req.config[key];
  });

  if (oneKeyConfigured && !oneKeyMatches) {
    console.log('❌ [Parse Debug] Invalid request due to mismatched keys');
    return invalidRequest(req, res);
  }

  if (req.url == '/login') {
    delete info.sessionToken;
  }

  if (req.userFromJWT) {
    req.auth = new auth.Auth({
      config: req.config,
      installationId: info.installationId,
      isMaster: false,
      user: req.userFromJWT,
    });
    return handleRateLimit(req, res, next);
  }

  if (!info.sessionToken) {
    req.auth = new auth.Auth({
      config: req.config,
      installationId: info.installationId,
      isMaster: false,
    });
  }
  handleRateLimit(req, res, next);
}

const handleRateLimit = async (req, res, next) => {
  const rateLimits = req.config.rateLimits || [];
  try {
    await Promise.all(
      rateLimits.map(async limit => {
        const pathExp = new RegExp(limit.path);
        if (pathExp.test(req.url)) {
          await limit.handler(req, res, err => {
            if (err) {
              if (err.code === Parse.Error.CONNECTION_FAILED) {
                throw err;
              }
              req.config.loggerController.error(
                'An unknown error occured when attempting to apply the rate limiter: ',
                err
              );
            }
          });
        }
      })
    );
  } catch (error) {
    res.status(429);
    res.json({ code: Parse.Error.CONNECTION_FAILED, error: error.message });
    return;
  }
  next();
};

export const handleParseSession = async (req, res, next) => {
  try {
    const info = req.info;
    if (req.auth || req.url === '/sessions/me') {
      next();
      return;
    }
    let requestAuth = null;
    if (
      info.sessionToken &&
      req.url === '/upgradeToRevocableSession' &&
      info.sessionToken.indexOf('r:') != 0
    ) {
      requestAuth = await auth.getAuthForLegacySessionToken({
        config: req.config,
        installationId: info.installationId,
        sessionToken: info.sessionToken,
      });
    } else {
      requestAuth = await auth.getAuthForSessionToken({
        config: req.config,
        installationId: info.installationId,
        sessionToken: info.sessionToken,
      });
    }
    req.auth = requestAuth;
    next();
  } catch (error) {
    if (error instanceof Parse.Error) {
      next(error);
      return;
    }
    // TODO: Determine the correct error scenario.
    req.config.loggerController.error('error getting auth for sessionToken', error);
    throw new Parse.Error(Parse.Error.UNKNOWN_ERROR, error);
  }
};

function getClientIp(req) {
  return req.ip;
}

function httpAuth(req) {
  if (!(req.req || req).headers.authorization) return;

  var header = (req.req || req).headers.authorization;
  var appId, masterKey, javascriptKey;

  // parse header
  var authPrefix = 'basic ';

  var match = header.toLowerCase().indexOf(authPrefix);

  if (match == 0) {
    var encodedAuth = header.substring(authPrefix.length, header.length);
    var credentials = decodeBase64(encodedAuth).split(':');

    if (credentials.length == 2) {
      appId = credentials[0];
      var key = credentials[1];

      var jsKeyPrefix = 'javascript-key=';

      var matchKey = key.indexOf(jsKeyPrefix);
      if (matchKey == 0) {
        javascriptKey = key.substring(jsKeyPrefix.length, key.length);
      } else {
        masterKey = key;
      }
    }
  }

  return { appId: appId, masterKey: masterKey, javascriptKey: javascriptKey };
}

function decodeBase64(str) {
  return Buffer.from(str, 'base64').toString();
}

export function allowCrossDomain(appId) {
  return (req, res, next) => {
    const config = Config.get(appId, getMountForRequest(req));
    let allowHeaders = DEFAULT_ALLOWED_HEADERS;
    if (config && config.allowHeaders) {
      allowHeaders += `, ${config.allowHeaders.join(', ')}`;
    }

    const baseOrigins =
      typeof config?.allowOrigin === 'string' ? [config.allowOrigin] : config?.allowOrigin ?? ['*'];
    const requestOrigin = req.headers.origin;
    const allowOrigins =
      requestOrigin && baseOrigins.includes(requestOrigin) ? requestOrigin : baseOrigins[0];
    res.header('Access-Control-Allow-Origin', allowOrigins);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', allowHeaders);
    res.header('Access-Control-Expose-Headers', 'X-Parse-Job-Status-Id, X-Parse-Push-Status-Id');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  };
}

export function allowMethodOverride(req, res, next) {
  if (req.method === 'POST' && req.body._method) {
    req.originalMethod = req.method;
    req.method = req.body._method;
    delete req.body._method;
  }
  next();
}

export function handleParseErrors(err, req, res, next) {
  const log = (req.config && req.config.loggerController) || defaultLogger;
  if (err instanceof Parse.Error) {
    if (req.config && req.config.enableExpressErrorHandler) {
      return next(err);
    }
    let httpStatus;
    // TODO: fill out this mapping
    switch (err.code) {
      case Parse.Error.INTERNAL_SERVER_ERROR:
        httpStatus = 500;
        break;
      case Parse.Error.OBJECT_NOT_FOUND:
        httpStatus = 404;
        break;
      default:
        httpStatus = 400;
    }
    res.status(httpStatus);
    res.json({ code: err.code, error: err.message });
    log.error('Parse error: ', err);
  } else if (err.status && err.message) {
    res.status(err.status);
    res.json({ error: err.message });
    if (!(process && process.env.TESTING)) {
      next(err);
    }
  } else {
    log.error('Uncaught internal server error.', err, err.stack);
    res.status(500);
    res.json({
      code: Parse.Error.INTERNAL_SERVER_ERROR,
      message: 'Internal server error.',
    });
    if (!(process && process.env.TESTING)) {
      next(err);
    }
  }
}

export function enforceMasterKeyAccess(req, res, next) {
  if (!req.auth.isMaster) {
    res.status(403);
    res.end('{"error":"unauthorized: master key is required"}');
    return;
  }
  next();
}

export function promiseEnforceMasterKeyAccess(request) {
  if (!request.auth.isMaster) {
    const error = new Error();
    error.status = 403;
    error.message = 'unauthorized: master key is required';
    throw error;
  }
  return Promise.resolve();
}

export const addRateLimit = (route, config, cloud) => {
  if (typeof config === 'string') {
    config = Config.get(config);
  }
  for (const key in route) {
    if (!RateLimitOptions[key]) {
      throw `Invalid rate limit option "${key}"`;
    }
  }
  if (!config.rateLimits) {
    config.rateLimits = [];
  }
  const redisStore = {
    connectionPromise: Promise.resolve(),
    store: null,
  };
  if (route.redisUrl) {
    const client = createClient({
      url: route.redisUrl,
    });
    redisStore.connectionPromise = async () => {
      if (client.isOpen) {
        return;
      }
      try {
        await client.connect();
      } catch (e) {
        const log = config?.loggerController || defaultLogger;
        log.error(`Could not connect to redisURL in rate limit: ${e}`);
      }
    };
    redisStore.connectionPromise();
    redisStore.store = new RedisStore({
      sendCommand: async (...args) => {
        await redisStore.connectionPromise();
        return client.sendCommand(args);
      },
    });
  }
  let transformPath = route.requestPath.split('/*').join('/(.*)');
  if (transformPath === '*') {
    transformPath = '(.*)';
  }
  config.rateLimits.push({
    path: pathToRegexp(transformPath),
    handler: rateLimit({
      windowMs: route.requestTimeWindow,
      max: route.requestCount,
      message: route.errorResponseMessage || RateLimitOptions.errorResponseMessage.default,
      handler: (request, response, next, options) => {
        throw {
          code: Parse.Error.CONNECTION_FAILED,
          message: options.message,
        };
      },
      skip: request => {
        if (request.ip === '127.0.0.1' && !route.includeInternalRequests) {
          return true;
        }
        if (route.includeMasterKey) {
          return false;
        }
        if (route.requestMethods) {
          if (Array.isArray(route.requestMethods)) {
            if (!route.requestMethods.includes(request.method)) {
              return true;
            }
          } else {
            const regExp = new RegExp(route.requestMethods);
            if (!regExp.test(request.method)) {
              return true;
            }
          }
        }
        return request.auth?.isMaster;
      },
      keyGenerator: async request => {
        if (route.zone === Parse.Server.RateLimitZone.global) {
          return request.config.appId;
        }
        const token = request.info.sessionToken;
        if (route.zone === Parse.Server.RateLimitZone.session && token) {
          return token;
        }
        if (route.zone === Parse.Server.RateLimitZone.user && token) {
          if (!request.auth) {
            await new Promise(resolve => handleParseSession(request, null, resolve));
          }
          if (request.auth?.user?.id && request.zone === 'user') {
            return request.auth.user.id;
          }
        }
        return request.config.ip;
      },
      store: redisStore.store,
    }),
    cloud,
  });
  Config.put(config);
};

/**
 * Deduplicates a request to ensure idempotency. Duplicates are determined by the request ID
 * in the request header. If a request has no request ID, it is executed anyway.
 * @param {*} req The request to evaluate.
 * @returns Promise<{}>
 */
export function promiseEnsureIdempotency(req) {
  // Enable feature only for MongoDB
  if (
    !(
      req.config.database.adapter instanceof MongoStorageAdapter ||
      req.config.database.adapter instanceof PostgresStorageAdapter
    )
  ) {
    return Promise.resolve();
  }
  // Get parameters
  const config = req.config;
  const requestId = ((req || {}).headers || {})['x-parse-request-id'];
  const { paths, ttl } = config.idempotencyOptions;
  if (!requestId || !config.idempotencyOptions) {
    return Promise.resolve();
  }
  // Request path may contain trailing slashes, depending on the original request, so remove
  // leading and trailing slashes to make it easier to specify paths in the configuration
  const reqPath = req.path.replace(/^\/|\/$/, '');
  // Determine whether idempotency is enabled for current request path
  let match = false;
  for (const path of paths) {
    // Assume one wants a path to always match from the beginning to prevent any mistakes
    const regex = new RegExp(path.charAt(0) === '^' ? path : '^' + path);
    if (reqPath.match(regex)) {
      match = true;
      break;
    }
  }
  if (!match) {
    return Promise.resolve();
  }
  // Try to store request
  const expiryDate = new Date(new Date().setSeconds(new Date().getSeconds() + ttl));
  return rest
    .create(config, auth.master(config), '_Idempotency', {
      reqId: requestId,
      expire: Parse._encode(expiryDate),
    })
    .catch(e => {
      if (e.code == Parse.Error.DUPLICATE_VALUE) {
        throw new Parse.Error(Parse.Error.DUPLICATE_REQUEST, 'Duplicate request');
      }
      throw e;
    });
}

function invalidRequest(req, res) {
  console.warn('❌ [Parse Debug] Invalid request blocked with 403');

  // Useful headers for auth
  console.log('🔍 Headers:', req.headers);
  console.log('🔍 IP:', req.ip);
  console.log('🔍 Path:', req.originalUrl);

  res.status(403);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'unauthorized' }));
}

function malformedContext(req, res) {
  res.status(400);
  res.json({ code: Parse.Error.INVALID_JSON, error: 'Invalid object for context.' });
}
