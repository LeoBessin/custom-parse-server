import ParseServer from './ParseServer';
import FileSystemAdapter from '@parse/fs-files-adapter';
import InMemoryCacheAdapter from './Adapters/Cache/InMemoryCacheAdapter';
import NullCacheAdapter from './Adapters/Cache/NullCacheAdapter';
import RedisCacheAdapter from './Adapters/Cache/RedisCacheAdapter';
import LRUCacheAdapter from './Adapters/Cache/LRUCache.js';
import * as TestUtils from './TestUtils';
import * as SchemaMigrations from './SchemaMigrations/Migrations';
import AuthAdapter from './Adapters/Auth/AuthAdapter';
import { useExternal } from './deprecated';
import { getLogger } from './logger';
import { PushWorker } from './Push/PushWorker';
import { ParseServerOptions } from './Options';
import { ParseGraphQLServer } from './GraphQL/ParseGraphQLServer';

// Factory function
const _ParseServer = function (options: ParseServerOptions) {
  const server = new ParseServer(options);
  return server;
};
// Mount the create liveQueryServer
_ParseServer.createLiveQueryServer = ParseServer.createLiveQueryServer;
_ParseServer.startApp = ParseServer.startApp;

const S3Adapter = useExternal('S3Adapter', '@parse/s3-files-adapter');
const GCSAdapter = useExternal('GCSAdapter', '@parse/gcs-files-adapter');

console.log("✅ Custom Parse Server loaded!");

Object.defineProperty(module.exports, 'logger', {
  get: getLogger,
});

export default ParseServer;
export {
  S3Adapter,
  GCSAdapter,
  FileSystemAdapter,
  InMemoryCacheAdapter,
  NullCacheAdapter,
  RedisCacheAdapter,
  LRUCacheAdapter,
  TestUtils,
  PushWorker,
  ParseGraphQLServer,
  _ParseServer as ParseServer,
  SchemaMigrations,
  AuthAdapter,
};
