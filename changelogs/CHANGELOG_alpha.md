# [7.3.0-alpha.9](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.8...7.3.0-alpha.9) (2024-10-03)


### Bug Fixes

* Custom object ID allows to acquire role privileges ([GHSA-8xq9-g7ch-35hg](https://github.com/parse-community/parse-server/security/advisories/GHSA-8xq9-g7ch-35hg)) ([#9317](https://github.com/parse-community/parse-server/issues/9317)) ([13ee52f](https://github.com/parse-community/parse-server/commit/13ee52f0d19ef3a3524b3d79aea100e587eb3cfc))

# [7.3.0-alpha.8](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.7...7.3.0-alpha.8) (2024-09-25)


### Bug Fixes

* Security upgrade path-to-regexp from 6.2.1 to 6.3.0 ([#9314](https://github.com/parse-community/parse-server/issues/9314)) ([8b7fe69](https://github.com/parse-community/parse-server/commit/8b7fe699c1c376ecd8cc1c97cce8e704ee41f28a))

# [7.3.0-alpha.7](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.6...7.3.0-alpha.7) (2024-08-27)


### Features

* Add support for asynchronous invocation of `FilesAdapter.getFileLocation` ([#9271](https://github.com/parse-community/parse-server/issues/9271)) ([1a2da40](https://github.com/parse-community/parse-server/commit/1a2da4055abe831b3017172fb75e16d7a8093873))

# [7.3.0-alpha.6](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.5...7.3.0-alpha.6) (2024-07-20)


### Features

* Add Cloud Code triggers `Parse.Cloud.beforeSave` and `Parse.Cloud.afterSave` for Parse Config ([#9232](https://github.com/parse-community/parse-server/issues/9232)) ([90a1e4a](https://github.com/parse-community/parse-server/commit/90a1e4a200423d644efb3f0ba2fba4b99f5cf954))

# [7.3.0-alpha.5](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.4...7.3.0-alpha.5) (2024-07-18)


### Bug Fixes

* Parse Server option `maxLogFiles` doesn't recognize day duration literals such as `1d` to mean 1 day ([#9215](https://github.com/parse-community/parse-server/issues/9215)) ([0319cee](https://github.com/parse-community/parse-server/commit/0319cee2dbf65e90bad377af1ed14ea25c595bf5))

# [7.3.0-alpha.4](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.3...7.3.0-alpha.4) (2024-07-18)


### Features

* Add atomic operations for Cloud Config parameters ([#9219](https://github.com/parse-community/parse-server/issues/9219)) ([35cadf9](https://github.com/parse-community/parse-server/commit/35cadf9b8324879fb7309ba5d7ea46f2c722d614))

# [7.3.0-alpha.3](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.2...7.3.0-alpha.3) (2024-07-17)


### Bug Fixes

* Parse Server installation fails due to post install script incorrectly parsing required min. Node version ([#9216](https://github.com/parse-community/parse-server/issues/9216)) ([0fa82a5](https://github.com/parse-community/parse-server/commit/0fa82a54fe38ec14e8054339285d3db71a8624c8))

# [7.3.0-alpha.2](https://github.com/parse-community/parse-server/compare/7.3.0-alpha.1...7.3.0-alpha.2) (2024-07-17)


### Bug Fixes

* Parse Server `databaseOptions` nested keys incorrectly identified as invalid ([#9213](https://github.com/parse-community/parse-server/issues/9213)) ([77206d8](https://github.com/parse-community/parse-server/commit/77206d804443cfc1618c24f8961bd677de9920c0))

# [7.3.0-alpha.1](https://github.com/parse-community/parse-server/compare/7.2.0...7.3.0-alpha.1) (2024-07-09)


### Features

* Add Node 22 support ([#9187](https://github.com/parse-community/parse-server/issues/9187)) ([7778471](https://github.com/parse-community/parse-server/commit/7778471999c7e42236ce404229660d80ecc2acd6))

# [7.1.0-alpha.16](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.15...7.1.0-alpha.16) (2024-07-08)


### Features

* Add support for dot notation on array fields of Parse Object ([#9115](https://github.com/parse-community/parse-server/issues/9115)) ([cf4c880](https://github.com/parse-community/parse-server/commit/cf4c8807b9da87a0a5f9c94e5bdfcf17cda80cf4))

# [7.1.0-alpha.15](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.14...7.1.0-alpha.15) (2024-07-08)


### Features

* Upgrade to @parse/push-adapter 6.4.0 ([#9182](https://github.com/parse-community/parse-server/issues/9182)) ([ef1634b](https://github.com/parse-community/parse-server/commit/ef1634bf1f360429108d29b08032fc7961ff96a1))

# [7.1.0-alpha.14](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.13...7.1.0-alpha.14) (2024-07-07)


### Features

* Upgrade to Parse JS SDK 5.3.0 ([#9180](https://github.com/parse-community/parse-server/issues/9180)) ([dca187f](https://github.com/parse-community/parse-server/commit/dca187f91b93cbb362b22a3fb9ee38451799ff13))

# [7.1.0-alpha.13](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.12...7.1.0-alpha.13) (2024-07-01)


### Bug Fixes

* Invalid push notification tokens are not cleaned up from database for FCM API v2 ([#9173](https://github.com/parse-community/parse-server/issues/9173)) ([284da09](https://github.com/parse-community/parse-server/commit/284da09f4546356b37511a589fb5f64a3efffe79))

# [7.1.0-alpha.12](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.11...7.1.0-alpha.12) (2024-06-30)


### Bug Fixes

* SQL injection when using Parse Server with PostgreSQL; fixes security vulnerability [GHSA-c2hr-cqg6-8j6r](https://github.com/parse-community/parse-server/security/advisories/GHSA-c2hr-cqg6-8j6r) ([#9167](https://github.com/parse-community/parse-server/issues/9167)) ([2edf1e4](https://github.com/parse-community/parse-server/commit/2edf1e4c0363af01e97a7fbc97694f851b7d1ff3))

# [7.1.0-alpha.11](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.10...7.1.0-alpha.11) (2024-06-29)


### Features

* Upgrade to Parse JS SDK 5.2.0 ([#9128](https://github.com/parse-community/parse-server/issues/9128)) ([665b8d5](https://github.com/parse-community/parse-server/commit/665b8d52d6cf5275179a5e1fb132c934edb53ecc))

# [7.1.0-alpha.10](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.9...7.1.0-alpha.10) (2024-06-11)


### Bug Fixes

* Live query throws error when constraint `notEqualTo` is set to `null` ([#8835](https://github.com/parse-community/parse-server/issues/8835)) ([11d3e48](https://github.com/parse-community/parse-server/commit/11d3e484df862224c15d20f6171514948981ea90))

# [7.1.0-alpha.9](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.8...7.1.0-alpha.9) (2024-05-27)


### Bug Fixes

* Parse Server option `extendSessionOnUse` not working for session lengths < 24 hours ([#9113](https://github.com/parse-community/parse-server/issues/9113)) ([0a054e6](https://github.com/parse-community/parse-server/commit/0a054e6b541fd5ab470bf025665f5f7d2acedaa0))

# [7.1.0-alpha.8](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.7...7.1.0-alpha.8) (2024-05-16)


### Features

* Upgrade to @parse/push-adapter 6.2.0 ([#9127](https://github.com/parse-community/parse-server/issues/9127)) ([ca20496](https://github.com/parse-community/parse-server/commit/ca20496f28e5ec1294a7a23c8559df82b79b2a04))

# [7.1.0-alpha.7](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.6...7.1.0-alpha.7) (2024-05-16)


### Bug Fixes

* Facebook Limited Login not working due to incorrect domain in JWT validation ([#9122](https://github.com/parse-community/parse-server/issues/9122)) ([9d0bd2b](https://github.com/parse-community/parse-server/commit/9d0bd2badd6e5f7429d1af00b118225752e5d86a))

# [7.1.0-alpha.6](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.5...7.1.0-alpha.6) (2024-04-14)


### Bug Fixes

* `Parse.Cloud.startJob` and `Parse.Push.send` not returning status ID when setting Parse Server option `directAccess: true` ([#8766](https://github.com/parse-community/parse-server/issues/8766)) ([5b0efb2](https://github.com/parse-community/parse-server/commit/5b0efb22efe94c47f243cf8b1e6407ed5c5a67d3))

# [7.1.0-alpha.5](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.4...7.1.0-alpha.5) (2024-04-07)


### Features

* Prevent Parse Server start in case of unknown option in server configuration ([#8987](https://github.com/parse-community/parse-server/issues/8987)) ([8758e6a](https://github.com/parse-community/parse-server/commit/8758e6abb9dbb68757bddcbd332ad25100c24a0e))

# [7.1.0-alpha.4](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.3...7.1.0-alpha.4) (2024-03-31)


### Features

* Upgrade to @parse/push-adapter 6.0.0 ([#9066](https://github.com/parse-community/parse-server/issues/9066)) ([18bdbf8](https://github.com/parse-community/parse-server/commit/18bdbf89c53a57648891ef582614ba7c2941e587))

# [7.1.0-alpha.3](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.2...7.1.0-alpha.3) (2024-03-24)


### Bug Fixes

* Rate limiting can fail when using Parse Server option `rateLimit.redisUrl` with clusters ([#8632](https://github.com/parse-community/parse-server/issues/8632)) ([c277739](https://github.com/parse-community/parse-server/commit/c27773962399f8e27691e3b8087e7e1d59516efd))

# [7.1.0-alpha.2](https://github.com/parse-community/parse-server/compare/7.1.0-alpha.1...7.1.0-alpha.2) (2024-03-24)


### Features

* Add server security check status `security.enableCheck` to Features Router ([#8679](https://github.com/parse-community/parse-server/issues/8679)) ([b07ec15](https://github.com/parse-community/parse-server/commit/b07ec153825882e97cc48dc84072c7f549f3238b))

# [7.1.0-alpha.1](https://github.com/parse-community/parse-server/compare/7.0.0...7.1.0-alpha.1) (2024-03-23)


### Bug Fixes

* `Required` option not handled correctly for special fields (File, GeoPoint, Polygon) on GraphQL API mutations ([#8915](https://github.com/parse-community/parse-server/issues/8915)) ([907ad42](https://github.com/parse-community/parse-server/commit/907ad4267c228d26cfcefe7848b30ce85ba7ff8f))

### Features

* Add `silent` log level for Cloud Code ([#8803](https://github.com/parse-community/parse-server/issues/8803)) ([5f81efb](https://github.com/parse-community/parse-server/commit/5f81efb42964c4c2fa8bcafee9446a0122e3ce21))

# [7.0.0-alpha.31](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.30...7.0.0-alpha.31) (2024-03-21)


### Features

* Add `silent` log level for Cloud Code ([#8803](https://github.com/parse-community/parse-server/issues/8803)) ([5f81efb](https://github.com/parse-community/parse-server/commit/5f81efb42964c4c2fa8bcafee9446a0122e3ce21))

# [7.0.0-alpha.30](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.29...7.0.0-alpha.30) (2024-03-20)


### Bug Fixes

* `Required` option not handled correctly for special fields (File, GeoPoint, Polygon) on GraphQL API mutations ([#8915](https://github.com/parse-community/parse-server/issues/8915)) ([907ad42](https://github.com/parse-community/parse-server/commit/907ad4267c228d26cfcefe7848b30ce85ba7ff8f))

# [7.0.0-alpha.29](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.28...7.0.0-alpha.29) (2024-03-19)


### Bug Fixes

* Server crashes on invalid Cloud Function or Cloud Job name; fixes security vulnerability [GHSA-6hh7-46r2-vf29](https://github.com/parse-community/parse-server/security/advisories/GHSA-6hh7-46r2-vf29) ([#9024](https://github.com/parse-community/parse-server/issues/9024)) ([9f6e342](https://github.com/parse-community/parse-server/commit/9f6e3429d3b326cf4e2994733c618d08032fac6e))

# [7.0.0-alpha.28](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.27...7.0.0-alpha.28) (2024-03-17)


### Features

* Upgrade to Parse JS SDK 5 ([#9022](https://github.com/parse-community/parse-server/issues/9022)) ([ad4aa83](https://github.com/parse-community/parse-server/commit/ad4aa83983205a0e27639f6ee6a4a5963b67e4b8))

# [7.0.0-alpha.27](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.26...7.0.0-alpha.27) (2024-03-15)


### Bug Fixes

* CacheAdapter does not connect when using a CacheAdapter with a JSON config ([#8633](https://github.com/parse-community/parse-server/issues/8633)) ([720d24e](https://github.com/parse-community/parse-server/commit/720d24e18540da35d50957f17be878316ec30318))

# [7.0.0-alpha.26](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.25...7.0.0-alpha.26) (2024-03-10)


### Bug Fixes

* Parse Server option `fileExtensions` default value rejects file extensions that are less than 3 or more than 4 characters long ([#8699](https://github.com/parse-community/parse-server/issues/8699)) ([2760381](https://github.com/parse-community/parse-server/commit/276038118377c2b22381bcd8d30337203822121b))

# [7.0.0-alpha.25](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.24...7.0.0-alpha.25) (2024-03-05)


### Features

* Deprecation DEPPS5: Config option `allowClientClassCreation` defaults to `false` ([#8849](https://github.com/parse-community/parse-server/issues/8849)) ([29624e0](https://github.com/parse-community/parse-server/commit/29624e0fae17161cd412ae58d35a195cfa286cad))


### BREAKING CHANGES

* The Parse Server option `allowClientClassCreation` defaults to `false`. ([29624e0](29624e0))

# [7.0.0-alpha.24](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.23...7.0.0-alpha.24) (2024-03-05)


### Bug Fixes

* Docker version releases by removing arm/v6 and arm/v7 support ([#8976](https://github.com/parse-community/parse-server/issues/8976)) ([1f62dd0](https://github.com/parse-community/parse-server/commit/1f62dd0f4e107b22a387692558a042ee26ce8703))

# [7.0.0-alpha.23](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.22...7.0.0-alpha.23) (2024-03-03)


### Features

* Add support for MongoDB query comment ([#8928](https://github.com/parse-community/parse-server/issues/8928)) ([2170962](https://github.com/parse-community/parse-server/commit/2170962a50fa353ed85eda3f11dce7ee3647b087))

# [7.0.0-alpha.22](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.21...7.0.0-alpha.22) (2024-03-02)


### Features

* Switch GraphQL server from Yoga v2 to Apollo v4 ([#8959](https://github.com/parse-community/parse-server/issues/8959)) ([105ae7c](https://github.com/parse-community/parse-server/commit/105ae7c8a57d5a650b243174a80c26bf6db16e28))

# [7.0.0-alpha.21](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.20...7.0.0-alpha.21) (2024-03-01)


### Bug Fixes

* Deny request if master key is not set in Parse Server option `masterKeyIps` regardless of ACL and CLP ([#8957](https://github.com/parse-community/parse-server/issues/8957)) ([a7b5b38](https://github.com/parse-community/parse-server/commit/a7b5b38418cbed9be3f4a7665f25b97f592663e1))


### BREAKING CHANGES

* A request using the master key will now be rejected as unauthorized if the IP from which the request originates is not set in the Parse Server option `masterKeyIps`, even if the request does not require the master key permission, for example for a public object in a public class class. ([a7b5b38](a7b5b38))

# [7.0.0-alpha.20](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.19...7.0.0-alpha.20) (2024-03-01)


### Bug Fixes

* Improve PostgreSQL injection detection; fixes security vulnerability [GHSA-6927-3vr9-fxf2](https://github.com/parse-community/parse-server/security/advisories/GHSA-6927-3vr9-fxf2) which affects Parse Server deployments using a Postgres database ([#8961](https://github.com/parse-community/parse-server/issues/8961)) ([cbefe77](https://github.com/parse-community/parse-server/commit/cbefe770a7260b54748a058b8a7389937dc35833))

# [7.0.0-alpha.19](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.18...7.0.0-alpha.19) (2024-02-15)


### Features

* Node process exits with error code 1 on uncaught exception to allow custom uncaught exception handling ([#8894](https://github.com/parse-community/parse-server/issues/8894)) ([70c280c](https://github.com/parse-community/parse-server/commit/70c280ca578ff28b5acf92f37fbe06d42a5b34ca))


### BREAKING CHANGES

* Node process now exits with code 1 on uncaught exceptions, enabling custom handlers that were blocked by Parse Server's default behavior of re-throwing errors. This change may lead to automatic process restarts by the environment, unlike before. ([70c280c](70c280c))

# [7.0.0-alpha.18](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.17...7.0.0-alpha.18) (2024-02-15)


### Features

* Deprecation DEPPS6: Authentication adapters disabled by default ([#8858](https://github.com/parse-community/parse-server/issues/8858)) ([0cf58eb](https://github.com/parse-community/parse-server/commit/0cf58eb8d60c8e5f485764e154f3214c49eee430))


### BREAKING CHANGES

* Authentication adapters are disabled by default; to use an authentication adapter it needs to be explicitly enabled in the Parse Server authentication adapter option `auth.<provider>.enabled: true` ([0cf58eb](0cf58eb))

# [7.0.0-alpha.17](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.16...7.0.0-alpha.17) (2024-02-15)


### Features

* Deprecation DEPPS8:  Parse Server option `allowExpiredAuthDataToken` defaults to `false` ([#8860](https://github.com/parse-community/parse-server/issues/8860)) ([e29845f](https://github.com/parse-community/parse-server/commit/e29845f8dacac09ce3093d75c0d92330c24389e8))


### BREAKING CHANGES

* Parse Server option `allowExpiredAuthDataToken` defaults to `false`; a 3rd party authentication token will be validated every time the user tries to log in and the login will fail if the token has expired; the effect of this change may differ for different authentication adapters, depending on the token lifetime and the token refresh logic of the adapter ([e29845f](e29845f))

# [7.0.0-alpha.16](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.15...7.0.0-alpha.16) (2024-02-14)


### Features

* Deprecation DEPPS9: LiveQuery `fields` option is renamed to `keys` ([#8852](https://github.com/parse-community/parse-server/issues/8852)) ([38983e8](https://github.com/parse-community/parse-server/commit/38983e8e9b5cdbd006f311a2338103624137d013))


### BREAKING CHANGES

* LiveQuery `fields` option is renamed to `keys` ([38983e8](38983e8))

# [7.0.0-alpha.15](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.14...7.0.0-alpha.15) (2024-02-14)


### Features

* Deprecation DEPPS7: Remove deprecated Cloud Code file trigger syntax ([#8855](https://github.com/parse-community/parse-server/issues/8855)) ([4e6a375](https://github.com/parse-community/parse-server/commit/4e6a375b5184ae0f7aa256a921eca4021c609435))


### BREAKING CHANGES

* Cloud Code file trigger syntax has been aligned with object trigger syntax, for example `Parse.Cloud.beforeDeleteFile'` has been changed to `Parse.Cloud.beforeDelete(Parse.File, (request) => {})'` ([4e6a375](4e6a375))

# [7.0.0-alpha.14](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.13...7.0.0-alpha.14) (2024-02-14)


### Bug Fixes

* GraphQL file upload fails in case of use of pointer or relation ([#8721](https://github.com/parse-community/parse-server/issues/8721)) ([1aba638](https://github.com/parse-community/parse-server/commit/1aba6382c873fb489d4a898d301e6da9fb6aa61b))

# [7.0.0-alpha.13](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.12...7.0.0-alpha.13) (2024-02-14)


### Bug Fixes

* Docker image not published to Docker Hub on new release ([#8905](https://github.com/parse-community/parse-server/issues/8905)) ([a2ac8d1](https://github.com/parse-community/parse-server/commit/a2ac8d133c71cd7b61e5ef59c4be915cfea85db6))

# [7.0.0-alpha.12](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.11...7.0.0-alpha.12) (2024-02-14)


### Features

* Add support for Node 20, drop support for Node 14, 16 ([#8907](https://github.com/parse-community/parse-server/issues/8907)) ([ced4872](https://github.com/parse-community/parse-server/commit/ced487246ea0ef72a8aa014991f003209b34841e))


### BREAKING CHANGES

* Removes support for Node 14 and 16 ([ced4872](ced4872))

# [7.0.0-alpha.11](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.10...7.0.0-alpha.11) (2024-01-22)


### Features

* Add support for Postgres 16 ([#8898](https://github.com/parse-community/parse-server/issues/8898)) ([99489b2](https://github.com/parse-community/parse-server/commit/99489b22e4f0982e6cb39992974b51aa8d3a31e4))


### BREAKING CHANGES

* Removes support for Postgres 11 and 12 ([99489b2](99489b2))

# [7.0.0-alpha.10](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.9...7.0.0-alpha.10) (2024-01-17)


### Features

* Add password validation via POST request for user with unverified email using master key and option `ignoreEmailVerification` ([#8895](https://github.com/parse-community/parse-server/issues/8895)) ([633a9d2](https://github.com/parse-community/parse-server/commit/633a9d25e4253e2125bc93c02ee8a37e0f5f7b83))

# [7.0.0-alpha.9](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.8...7.0.0-alpha.9) (2024-01-15)


### Bug Fixes

* Server crashes when receiving an array of `Parse.Pointer` in the request body ([#8784](https://github.com/parse-community/parse-server/issues/8784)) ([66e3603](https://github.com/parse-community/parse-server/commit/66e36039d8af654cfa0284666c0ddd94975dcb52))

# [7.0.0-alpha.8](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.7...7.0.0-alpha.8) (2024-01-15)


### Bug Fixes

* Incomplete user object in `verifyEmail` function if both username and email are changed ([#8889](https://github.com/parse-community/parse-server/issues/8889)) ([1eb95ae](https://github.com/parse-community/parse-server/commit/1eb95aeb41a96250e582d79a703f6adcb403c08b))

# [7.0.0-alpha.7](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.6...7.0.0-alpha.7) (2024-01-14)


### Bug Fixes

* Username is `undefined` in email verification link on email change ([#8887](https://github.com/parse-community/parse-server/issues/8887)) ([e315c13](https://github.com/parse-community/parse-server/commit/e315c137bf41bedfa8f0df537f2c3f6ab45b7e60))

# [7.0.0-alpha.6](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.5...7.0.0-alpha.6) (2024-01-14)


### Bug Fixes

* Parse Server option `emailVerifyTokenReuseIfValid: true` generates new token on every email verification request ([#8885](https://github.com/parse-community/parse-server/issues/8885)) ([0023ce4](https://github.com/parse-community/parse-server/commit/0023ce448a5e9423337d0e1a25648bde1156bc95))

# [7.0.0-alpha.5](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.4...7.0.0-alpha.5) (2024-01-06)


### Features

* Add `installationId`, `ip`, `resendRequest` to arguments passed to `verifyUserEmails` on verification email request ([#8873](https://github.com/parse-community/parse-server/issues/8873)) ([8adcbee](https://github.com/parse-community/parse-server/commit/8adcbee11283d3e95179ca2047e2615f52c18806))


### BREAKING CHANGES

* The `Parse.User` passed as argument if `verifyUserEmails` is set to a function is renamed from `user` to `object` for consistency with invocations of `verifyUserEmails` on signup or login; the user object is not a plain JavaScript object anymore but an instance of `Parse.User` ([8adcbee](8adcbee))

# [7.0.0-alpha.4](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.3...7.0.0-alpha.4) (2023-12-27)


### Features

* Add `Parse.User` as function parameter to Parse Server options `verifyUserEmails`, `preventLoginWithUnverifiedEmail` on login ([#8850](https://github.com/parse-community/parse-server/issues/8850)) ([972f630](https://github.com/parse-community/parse-server/commit/972f6300163b3cd7d95eeb95986e8322c95f821c))

# [7.0.0-alpha.3](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.2...7.0.0-alpha.3) (2023-12-26)


### Bug Fixes

* Conditional email verification not working in some cases if `verifyUserEmails`, `preventLoginWithUnverifiedEmail` set to functions ([#8838](https://github.com/parse-community/parse-server/issues/8838)) ([8e7a6b1](https://github.com/parse-community/parse-server/commit/8e7a6b1480c0117e6c73e7adc5a6619115a04e85))

### Features

* Allow `Parse.Session.current` on expired session token instead of throwing error ([#8722](https://github.com/parse-community/parse-server/issues/8722)) ([f9dde4a](https://github.com/parse-community/parse-server/commit/f9dde4a9f8a90c63f71172c9bc515b0f6c6d2e4a))


### BREAKING CHANGES

* `Parse.Session.current()` no longer throws an error if the session token is expired, but instead returns the session token with its expiration date to allow checking its validity ([f9dde4a](f9dde4a))

# [7.0.0-alpha.2](https://github.com/parse-community/parse-server/compare/7.0.0-alpha.1...7.0.0-alpha.2) (2023-12-17)


### Features

* Add `installationId` to arguments for `verifyUserEmails`, `preventLoginWithUnverifiedEmail` ([#8836](https://github.com/parse-community/parse-server/issues/8836)) ([a22dbe1](https://github.com/parse-community/parse-server/commit/a22dbe16d5ac0090608f6caaf0ebd134925b7fd4))

# [7.0.0-alpha.1](https://github.com/parse-community/parse-server/compare/6.5.0-alpha.2...7.0.0-alpha.1) (2023-12-10)


### Features

* Add support for MongoDB 7 ([#8761](https://github.com/parse-community/parse-server/issues/8761)) ([3de8494](https://github.com/parse-community/parse-server/commit/3de8494a221991dfd10a74e0a2dc89576265c9b7))


### BREAKING CHANGES

* `Parse.Query` no longer supports the BSON type `code`; although this feature was never officially documented, its removal is announced as a breaking change to protect deployments where it might be in use. ([3de8494](3de8494))

# [6.5.0-alpha.2](https://github.com/parse-community/parse-server/compare/6.5.0-alpha.1...6.5.0-alpha.2) (2023-11-19)


### Performance Improvements

* Improved IP validation performance for `masterKeyIPs`, `maintenanceKeyIPs` ([#8510](https://github.com/parse-community/parse-server/issues/8510)) ([b87daba](https://github.com/parse-community/parse-server/commit/b87daba0671a1b0b7b8d63bc671d665c91a04522))

# [6.5.0-alpha.1](https://github.com/parse-community/parse-server/compare/6.4.0...6.5.0-alpha.1) (2023-11-18)


### Bug Fixes

* Context not passed to Cloud Code Trigger `beforeFind` when using `Parse.Query.include` ([#8765](https://github.com/parse-community/parse-server/issues/8765)) ([7d32d89](https://github.com/parse-community/parse-server/commit/7d32d8934f3ae7af7a7d8b9cc6a829c7d73973d3))
* Parse Server option `fileUpload.fileExtensions` fails to determine file extension if filename contains multiple dots ([#8754](https://github.com/parse-community/parse-server/issues/8754)) ([3d6d50e](https://github.com/parse-community/parse-server/commit/3d6d50e0afff18b95fb906914e2cebd3839b517a))
* Security bump @babel/traverse from 7.20.5 to 7.23.2 ([#8777](https://github.com/parse-community/parse-server/issues/8777)) ([2d6b3d1](https://github.com/parse-community/parse-server/commit/2d6b3d18499179e99be116f25c0850d3f449509c))
* Security upgrade graphql from 16.6.0 to 16.8.1 ([#8758](https://github.com/parse-community/parse-server/issues/8758)) ([71dfd8a](https://github.com/parse-community/parse-server/commit/71dfd8a7ece8c0dd1a66d03bb9420cfd39f4f9b1))

### Features

* Add `$setOnInsert` operator to `Parse.Server.database.update` ([#8791](https://github.com/parse-community/parse-server/issues/8791)) ([f630a45](https://github.com/parse-community/parse-server/commit/f630a45aa5e87bc73a81fded061400c199b71a29))
* Add compatibility for MongoDB Atlas Serverless and AWS Amazon DocumentDB with collation options `enableCollationCaseComparison`, `transformEmailToLowercase`, `transformUsernameToLowercase` ([#8805](https://github.com/parse-community/parse-server/issues/8805)) ([09fbeeb](https://github.com/parse-community/parse-server/commit/09fbeebba8870e7cf371fb84371a254c7b368620))
* Add context to Cloud Code Triggers `beforeLogin` and `afterLogin` ([#8724](https://github.com/parse-community/parse-server/issues/8724)) ([a9c34ef](https://github.com/parse-community/parse-server/commit/a9c34ef1e2c78a42fb8b5fa8d569b7677c74919d))
* Allow setting `createdAt` and `updatedAt` during `Parse.Object` creation with maintenance key ([#8696](https://github.com/parse-community/parse-server/issues/8696)) ([77bbfb3](https://github.com/parse-community/parse-server/commit/77bbfb3f186f5651c33ba152f04cff95128eaf2d))
* Upgrade Parse Server Push Adapter to 5.0.2 ([#8813](https://github.com/parse-community/parse-server/issues/8813)) ([6ef1986](https://github.com/parse-community/parse-server/commit/6ef1986c03a1d84b7e11c05851e5bf9688d88740))

# [6.4.0-alpha.8](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.7...6.4.0-alpha.8) (2023-11-13)


### Features

* Add compatibility for MongoDB Atlas Serverless and AWS Amazon DocumentDB with collation options `enableCollationCaseComparison`, `transformEmailToLowercase`, `transformUsernameToLowercase` ([#8805](https://github.com/parse-community/parse-server/issues/8805)) ([09fbeeb](https://github.com/parse-community/parse-server/commit/09fbeebba8870e7cf371fb84371a254c7b368620))

# [6.4.0-alpha.7](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.6...6.4.0-alpha.7) (2023-10-25)


### Features

* Add `$setOnInsert` operator to `Parse.Server.database.update` ([#8791](https://github.com/parse-community/parse-server/issues/8791)) ([f630a45](https://github.com/parse-community/parse-server/commit/f630a45aa5e87bc73a81fded061400c199b71a29))

# [6.4.0-alpha.6](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.5...6.4.0-alpha.6) (2023-10-18)


### Bug Fixes

* Security bump @babel/traverse from 7.20.5 to 7.23.2 ([#8777](https://github.com/parse-community/parse-server/issues/8777)) ([2d6b3d1](https://github.com/parse-community/parse-server/commit/2d6b3d18499179e99be116f25c0850d3f449509c))

# [6.4.0-alpha.5](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.4...6.4.0-alpha.5) (2023-10-14)


### Bug Fixes

* Context not passed to Cloud Code Trigger `beforeFind` when using `Parse.Query.include` ([#8765](https://github.com/parse-community/parse-server/issues/8765)) ([7d32d89](https://github.com/parse-community/parse-server/commit/7d32d8934f3ae7af7a7d8b9cc6a829c7d73973d3))

# [6.4.0-alpha.4](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.3...6.4.0-alpha.4) (2023-09-29)


### Features

* Allow setting `createdAt` and `updatedAt` during `Parse.Object` creation with maintenance key ([#8696](https://github.com/parse-community/parse-server/issues/8696)) ([77bbfb3](https://github.com/parse-community/parse-server/commit/77bbfb3f186f5651c33ba152f04cff95128eaf2d))

# [6.4.0-alpha.3](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.2...6.4.0-alpha.3) (2023-09-23)


### Bug Fixes

* Parse Server option `fileUpload.fileExtensions` fails to determine file extension if filename contains multiple dots ([#8754](https://github.com/parse-community/parse-server/issues/8754)) ([3d6d50e](https://github.com/parse-community/parse-server/commit/3d6d50e0afff18b95fb906914e2cebd3839b517a))

# [6.4.0-alpha.2](https://github.com/parse-community/parse-server/compare/6.4.0-alpha.1...6.4.0-alpha.2) (2023-09-22)


### Bug Fixes

* Security upgrade graphql from 16.6.0 to 16.8.1 ([#8758](https://github.com/parse-community/parse-server/issues/8758)) ([71dfd8a](https://github.com/parse-community/parse-server/commit/71dfd8a7ece8c0dd1a66d03bb9420cfd39f4f9b1))

# [6.4.0-alpha.1](https://github.com/parse-community/parse-server/compare/6.3.0...6.4.0-alpha.1) (2023-09-20)

### Features

* Add context to Cloud Code Triggers `beforeLogin` and `afterLogin` ([#8724](https://github.com/parse-community/parse-server/issues/8724)) ([a9c34ef](https://github.com/parse-community/parse-server/commit/a9c34ef1e2c78a42fb8b5fa8d569b7677c74919d))

# [6.3.0-alpha.9](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.8...6.3.0-alpha.9) (2023-09-13)


### Performance Improvements

* Improve performance of recursive pointer iterations ([#8741](https://github.com/parse-community/parse-server/issues/8741)) ([45a3ed0](https://github.com/parse-community/parse-server/commit/45a3ed0fcf2c0170607505a1550fb15896e705fd))

# [6.3.0-alpha.8](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.7...6.3.0-alpha.8) (2023-08-30)


### Bug Fixes

* Redis 4 does not reconnect after unhandled error ([#8706](https://github.com/parse-community/parse-server/issues/8706)) ([2b3d4e5](https://github.com/parse-community/parse-server/commit/2b3d4e5d3c85cd142f85af68dec51a8523548d49))

# [6.3.0-alpha.7](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.6...6.3.0-alpha.7) (2023-08-18)


### Bug Fixes

* Remove config logging when launching Parse Server via CLI ([#8710](https://github.com/parse-community/parse-server/issues/8710)) ([ae68f0c](https://github.com/parse-community/parse-server/commit/ae68f0c31b741eeb83379c905c7ddfaa124436ec))

# [6.3.0-alpha.6](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.5...6.3.0-alpha.6) (2023-07-17)


### Bug Fixes

* Parse Server option `fileUpload.fileExtensions` does not work with an array of extensions ([#8688](https://github.com/parse-community/parse-server/issues/8688)) ([6a4a00c](https://github.com/parse-community/parse-server/commit/6a4a00ca7af1163ea74b047b85cd6817366b824b))

# [6.3.0-alpha.5](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.4...6.3.0-alpha.5) (2023-07-05)


### Features

* Add property `Parse.Server.version` to determine current version of Parse Server in Cloud Code ([#8670](https://github.com/parse-community/parse-server/issues/8670)) ([a9d376b](https://github.com/parse-community/parse-server/commit/a9d376b61f5b07806eafbda91c4e36c322f09298))

# [6.3.0-alpha.4](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.3...6.3.0-alpha.4) (2023-07-04)


### Bug Fixes

* Server does not start via CLI when `auth` option is set ([#8666](https://github.com/parse-community/parse-server/issues/8666)) ([4e2000b](https://github.com/parse-community/parse-server/commit/4e2000bc563324389584ace3c090a5c1a7796a64))

# [6.3.0-alpha.3](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.2...6.3.0-alpha.3) (2023-06-23)


### Features

* Add TOTP authentication adapter ([#8457](https://github.com/parse-community/parse-server/issues/8457)) ([cc079a4](https://github.com/parse-community/parse-server/commit/cc079a40f6849a0e9bc6fdc811e8649ecb67b589))

# [6.3.0-alpha.2](https://github.com/parse-community/parse-server/compare/6.3.0-alpha.1...6.3.0-alpha.2) (2023-06-20)


### Features

* Add conditional email verification via dynamic Parse Server options `verifyUserEmails`, `sendUserEmailVerification` that now accept functions ([#8425](https://github.com/parse-community/parse-server/issues/8425)) ([44acd6d](https://github.com/parse-community/parse-server/commit/44acd6d9ed157ad4842200c9d01f9c77a05fec3a))

# [6.3.0-alpha.1](https://github.com/parse-community/parse-server/compare/6.2.0...6.3.0-alpha.1) (2023-06-18)


### Bug Fixes

* Cloud Code Trigger `afterSave` executes even if not set ([#8520](https://github.com/parse-community/parse-server/issues/8520)) ([afd0515](https://github.com/parse-community/parse-server/commit/afd0515e207bd947840579d3f245980dffa6f804))
* GridFS file storage doesn't work with certain `enableSchemaHooks` settings ([#8467](https://github.com/parse-community/parse-server/issues/8467)) ([d4cda4b](https://github.com/parse-community/parse-server/commit/d4cda4b26c9bde8c812549b8780bea1cfabdb394))
* Inaccurate table total row count for PostgreSQL ([#8511](https://github.com/parse-community/parse-server/issues/8511)) ([0823a02](https://github.com/parse-community/parse-server/commit/0823a02fbf80bc88dc403bc47e9f5c6597ea78b4))
* LiveQuery server is not shut down properly when `handleShutdown` is called ([#8491](https://github.com/parse-community/parse-server/issues/8491)) ([967700b](https://github.com/parse-community/parse-server/commit/967700bdbc94c74f75ba84d2b3f4b9f3fd2dca0b))
* Rate limit feature is incompatible with Node 14 ([#8578](https://github.com/parse-community/parse-server/issues/8578)) ([f911f2c](https://github.com/parse-community/parse-server/commit/f911f2cd3a8c45cd326272dcd681532764a3761e))
* Unnecessary log entries by `extendSessionOnUse` ([#8562](https://github.com/parse-community/parse-server/issues/8562)) ([fd6a007](https://github.com/parse-community/parse-server/commit/fd6a0077f2e5cf83d65e52172ae5a950ab0f1eae))

### Features

* `extendSessionOnUse` to automatically renew Parse Sessions ([#8505](https://github.com/parse-community/parse-server/issues/8505)) ([6f885d3](https://github.com/parse-community/parse-server/commit/6f885d36b94902fdfea873fc554dee83589e6029))
* Add new Parse Server option `preventSignupWithUnverifiedEmail` to prevent returning a user without session token on sign-up with unverified email address ([#8451](https://github.com/parse-community/parse-server/issues/8451)) ([82da308](https://github.com/parse-community/parse-server/commit/82da30842a55980aa90cb7680fbf6db37ee16dab))
* Add option to change the log level of logs emitted by Cloud Functions ([#8530](https://github.com/parse-community/parse-server/issues/8530)) ([2caea31](https://github.com/parse-community/parse-server/commit/2caea310be412d82b04a85716bc769ccc410316d))
* Add support for `$eq` query constraint in LiveQuery ([#8614](https://github.com/parse-community/parse-server/issues/8614)) ([656d673](https://github.com/parse-community/parse-server/commit/656d673cf5dea354e4f2b3d4dc2b29a41d311b3e))
* Add zones for rate limiting by `ip`, `user`, `session`, `global` ([#8508](https://github.com/parse-community/parse-server/issues/8508)) ([03fba97](https://github.com/parse-community/parse-server/commit/03fba97e0549bfcaeee9f2fa4c9905dbcc91840e))
* Allow `Parse.Object` pointers in Cloud Code arguments ([#8490](https://github.com/parse-community/parse-server/issues/8490)) ([28aeda3](https://github.com/parse-community/parse-server/commit/28aeda3f160efcbbcf85a85484a8d26567fa9761))

### Reverts

* fix: Inaccurate table total row count for PostgreSQL ([6722110](https://github.com/parse-community/parse-server/commit/6722110f203bc5fdcaa68cdf091cf9e7b48d1cff))

# [6.1.0-alpha.20](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.19...6.1.0-alpha.20) (2023-06-09)


### Features

* Add zones for rate limiting by `ip`, `user`, `session`, `global` ([#8508](https://github.com/parse-community/parse-server/issues/8508)) ([03fba97](https://github.com/parse-community/parse-server/commit/03fba97e0549bfcaeee9f2fa4c9905dbcc91840e))

# [6.1.0-alpha.19](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.18...6.1.0-alpha.19) (2023-06-08)


### Bug Fixes

* LiveQuery server is not shut down properly when `handleShutdown` is called ([#8491](https://github.com/parse-community/parse-server/issues/8491)) ([967700b](https://github.com/parse-community/parse-server/commit/967700bdbc94c74f75ba84d2b3f4b9f3fd2dca0b))

# [6.1.0-alpha.18](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.17...6.1.0-alpha.18) (2023-06-08)


### Features

* Add support for `$eq` query constraint in LiveQuery ([#8614](https://github.com/parse-community/parse-server/issues/8614)) ([656d673](https://github.com/parse-community/parse-server/commit/656d673cf5dea354e4f2b3d4dc2b29a41d311b3e))

# [6.1.0-alpha.17](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.16...6.1.0-alpha.17) (2023-06-07)


### Features

* Add new Parse Server option `preventSignupWithUnverifiedEmail` to prevent returning a user without session token on sign-up with unverified email address ([#8451](https://github.com/parse-community/parse-server/issues/8451)) ([82da308](https://github.com/parse-community/parse-server/commit/82da30842a55980aa90cb7680fbf6db37ee16dab))

# [6.1.0-alpha.16](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.15...6.1.0-alpha.16) (2023-05-28)


### Reverts

* fix: Inaccurate table total row count for PostgreSQL ([6722110](https://github.com/parse-community/parse-server/commit/6722110f203bc5fdcaa68cdf091cf9e7b48d1cff))

# [6.1.0-alpha.15](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.14...6.1.0-alpha.15) (2023-05-28)


### Bug Fixes

* Inaccurate table total row count for PostgreSQL ([#8511](https://github.com/parse-community/parse-server/issues/8511)) ([0823a02](https://github.com/parse-community/parse-server/commit/0823a02fbf80bc88dc403bc47e9f5c6597ea78b4))

# [6.1.0-alpha.14](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.13...6.1.0-alpha.14) (2023-05-27)


### Bug Fixes

* Unnecessary log entries by `extendSessionOnUse` ([#8562](https://github.com/parse-community/parse-server/issues/8562)) ([fd6a007](https://github.com/parse-community/parse-server/commit/fd6a0077f2e5cf83d65e52172ae5a950ab0f1eae))

### Features

* Allow `Parse.Object` pointers in Cloud Code arguments ([#8490](https://github.com/parse-community/parse-server/issues/8490)) ([28aeda3](https://github.com/parse-community/parse-server/commit/28aeda3f160efcbbcf85a85484a8d26567fa9761))

# [6.1.0-alpha.13](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.12...6.1.0-alpha.13) (2023-05-25)


### Bug Fixes

* Rate limit feature is incompatible with Node 14 ([#8578](https://github.com/parse-community/parse-server/issues/8578)) ([f911f2c](https://github.com/parse-community/parse-server/commit/f911f2cd3a8c45cd326272dcd681532764a3761e))

# [6.1.0-alpha.12](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.11...6.1.0-alpha.12) (2023-05-19)


### Bug Fixes

* GridFS file storage doesn't work with certain `enableSchemaHooks` settings ([#8467](https://github.com/parse-community/parse-server/issues/8467)) ([d4cda4b](https://github.com/parse-community/parse-server/commit/d4cda4b26c9bde8c812549b8780bea1cfabdb394))

# [6.1.0-alpha.11](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.10...6.1.0-alpha.11) (2023-05-17)


### Features

* `extendSessionOnUse` to automatically renew Parse Sessions ([#8505](https://github.com/parse-community/parse-server/issues/8505)) ([6f885d3](https://github.com/parse-community/parse-server/commit/6f885d36b94902fdfea873fc554dee83589e6029))

# [6.1.0-alpha.10](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.9...6.1.0-alpha.10) (2023-05-12)


### Bug Fixes

* Cloud Code Trigger `afterSave` executes even if not set ([#8520](https://github.com/parse-community/parse-server/issues/8520)) ([afd0515](https://github.com/parse-community/parse-server/commit/afd0515e207bd947840579d3f245980dffa6f804))

# [6.1.0-alpha.9](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.8...6.1.0-alpha.9) (2023-05-09)


### Features

* Add option to change the log level of logs emitted by Cloud Functions ([#8530](https://github.com/parse-community/parse-server/issues/8530)) ([2caea31](https://github.com/parse-community/parse-server/commit/2caea310be412d82b04a85716bc769ccc410316d))

# [6.1.0-alpha.8](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.7...6.1.0-alpha.8) (2023-05-01)


### Features

* Allow multiple origins for header `Access-Control-Allow-Origin` ([#8517](https://github.com/parse-community/parse-server/issues/8517)) ([4f15539](https://github.com/parse-community/parse-server/commit/4f15539ac244aa2d393ac5177f7604b43f69e271))

# [6.1.0-alpha.7](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.6...6.1.0-alpha.7) (2023-03-10)


### Bug Fixes

* Rate limiting across multiple servers via Redis not working ([#8469](https://github.com/parse-community/parse-server/issues/8469)) ([d9e347d](https://github.com/parse-community/parse-server/commit/d9e347d7413f30f58ffbb8397fc8b5ae23be6ff0))

# [6.1.0-alpha.6](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.5...6.1.0-alpha.6) (2023-03-06)


### Features

* Add rate limiting across multiple servers via Redis ([#8394](https://github.com/parse-community/parse-server/issues/8394)) ([34833e4](https://github.com/parse-community/parse-server/commit/34833e42eec08b812b733be78df0535ab0e096b6))

# [6.1.0-alpha.5](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.4...6.1.0-alpha.5) (2023-03-06)


### Bug Fixes

* LiveQuery can return incorrectly formatted date ([#8456](https://github.com/parse-community/parse-server/issues/8456)) ([4ce135a](https://github.com/parse-community/parse-server/commit/4ce135a4fe930776044bc8fd786a4e17a0144e03))

# [6.1.0-alpha.4](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.3...6.1.0-alpha.4) (2023-03-06)


### Bug Fixes

* Parameters missing in `afterFind` trigger of authentication adapters ([#8458](https://github.com/parse-community/parse-server/issues/8458)) ([ce34747](https://github.com/parse-community/parse-server/commit/ce34747e8af54cb0b6b975da38f779a5955d2d59))

# [6.1.0-alpha.3](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.2...6.1.0-alpha.3) (2023-03-06)


### Features

* Add `afterFind` trigger to authentication adapters ([#8444](https://github.com/parse-community/parse-server/issues/8444)) ([c793bb8](https://github.com/parse-community/parse-server/commit/c793bb88e7485743c7ceb65fe419cde75833ff33))

# [6.1.0-alpha.2](https://github.com/parse-community/parse-server/compare/6.1.0-alpha.1...6.1.0-alpha.2) (2023-03-05)


### Bug Fixes

* Nested date is incorrectly decoded as empty object `{}` when fetching a Parse Object ([#8446](https://github.com/parse-community/parse-server/issues/8446)) ([22d2446](https://github.com/parse-community/parse-server/commit/22d2446dfea2bc339affc20535d181097e152acf))

# [6.1.0-alpha.1](https://github.com/parse-community/parse-server/compare/6.0.0...6.1.0-alpha.1) (2023-03-03)


### Bug Fixes

* Security upgrade jsonwebtoken to 9.0.0 ([#8420](https://github.com/parse-community/parse-server/issues/8420)) ([f5bfe45](https://github.com/parse-community/parse-server/commit/f5bfe4571e82b2b7440d41f3cff0d49937398164))

### Features

* Add option `schemaCacheTtl` for schema cache pulling as alternative to `enableSchemaHooks` ([#8436](https://github.com/parse-community/parse-server/issues/8436)) ([b3b76de](https://github.com/parse-community/parse-server/commit/b3b76de71b1d4265689d052e7837c38ec1fa4323))
* Add Parse Server option `resetPasswordSuccessOnInvalidEmail` to choose success or error response on password reset with invalid email ([#7551](https://github.com/parse-community/parse-server/issues/7551)) ([e5d610e](https://github.com/parse-community/parse-server/commit/e5d610e5e487ddab86409409ac3d7362aba8f59b))
* Deprecate LiveQuery `fields` option in favor of `keys` for semantic consistency ([#8388](https://github.com/parse-community/parse-server/issues/8388)) ([a49e323](https://github.com/parse-community/parse-server/commit/a49e323d5ae640bff1c6603ec37fdaddb9328dd1))
* Export `AuthAdapter` to make it available for extension with custom authentication adapters ([#8443](https://github.com/parse-community/parse-server/issues/8443)) ([40c1961](https://github.com/parse-community/parse-server/commit/40c196153b8efa12ae384c1c0092b2ed60a260d6))

# [6.0.0-alpha.35](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.34...6.0.0-alpha.35) (2023-02-27)


### Features

* Add option `schemaCacheTtl` for schema cache pulling as alternative to `enableSchemaHooks` ([#8436](https://github.com/parse-community/parse-server/issues/8436)) ([b3b76de](https://github.com/parse-community/parse-server/commit/b3b76de71b1d4265689d052e7837c38ec1fa4323))

# [6.0.0-alpha.34](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.33...6.0.0-alpha.34) (2023-02-24)


### Features

* Add Parse Server option `resetPasswordSuccessOnInvalidEmail` to choose success or error response on password reset with invalid email ([#7551](https://github.com/parse-community/parse-server/issues/7551)) ([e5d610e](https://github.com/parse-community/parse-server/commit/e5d610e5e487ddab86409409ac3d7362aba8f59b))

# [6.0.0-alpha.33](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.32...6.0.0-alpha.33) (2023-02-17)


### Features

* Deprecate LiveQuery `fields` option in favor of `keys` for semantic consistency ([#8388](https://github.com/parse-community/parse-server/issues/8388)) ([a49e323](https://github.com/parse-community/parse-server/commit/a49e323d5ae640bff1c6603ec37fdaddb9328dd1))

# [6.0.0-alpha.32](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.31...6.0.0-alpha.32) (2023-02-07)


### Bug Fixes

* Security upgrade jsonwebtoken to 9.0.0 ([#8420](https://github.com/parse-community/parse-server/issues/8420)) ([f5bfe45](https://github.com/parse-community/parse-server/commit/f5bfe4571e82b2b7440d41f3cff0d49937398164))

# [6.0.0-alpha.31](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.30...6.0.0-alpha.31) (2023-01-31)


### Bug Fixes

* Parse Server option `requestKeywordDenylist` can be bypassed via Cloud Code Webhooks or Triggers; fixes security vulnerability [GHSA-xprv-wvh7-qqqx](https://github.com/parse-community/parse-server/security/advisories/GHSA-xprv-wvh7-qqqx) ([#8302](https://github.com/parse-community/parse-server/issues/8302)) ([6728da1](https://github.com/parse-community/parse-server/commit/6728da1e3591db1e27031d335d64d8f25546a06f))
* Prototype pollution via Cloud Code Webhooks; fixes security vulnerability [GHSA-93vw-8fm5-p2jf](https://github.com/parse-community/parse-server/security/advisories/GHSA-93vw-8fm5-p2jf) ([#8305](https://github.com/parse-community/parse-server/issues/8305)) ([60c5a73](https://github.com/parse-community/parse-server/commit/60c5a73d257e0d536056b38bdafef8b7130524d8))
* Remote code execution via MongoDB BSON parser through prototype pollution; fixes security vulnerability [GHSA-prm5-8g2m-24gg](https://github.com/parse-community/parse-server/security/advisories/GHSA-prm5-8g2m-24gg) ([#8295](https://github.com/parse-community/parse-server/issues/8295)) ([50eed3c](https://github.com/parse-community/parse-server/commit/50eed3cffe80fadfb4bdac52b2783a18da2cfc4f))

# [6.0.0-alpha.30](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.29...6.0.0-alpha.30) (2023-01-27)


### Bug Fixes

* Schema without class level permissions may cause error ([#8409](https://github.com/parse-community/parse-server/issues/8409)) ([aa2cd51](https://github.com/parse-community/parse-server/commit/aa2cd51b703388d925e4572e5c2b2d883c68e49c))

# [6.0.0-alpha.29](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.28...6.0.0-alpha.29) (2023-01-26)


### Features

* Upgrade to Parse JavaScript SDK 4 ([#8332](https://github.com/parse-community/parse-server/issues/8332)) ([9092874](https://github.com/parse-community/parse-server/commit/9092874a9a482a24dfdce1dce56615702999d6b8))

# [6.0.0-alpha.28](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.27...6.0.0-alpha.28) (2023-01-25)


### Bug Fixes

* Rate limiter may reject requests that contain a session token ([#8399](https://github.com/parse-community/parse-server/issues/8399)) ([c114dc8](https://github.com/parse-community/parse-server/commit/c114dc8831055d74187b9dfb4c9eeb558520237c))

# [6.0.0-alpha.27](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.26...6.0.0-alpha.27) (2023-01-23)


### Bug Fixes

* `ParseServer.verifyServerUrl` may fail if server response headers are missing; remove unnecessary logging ([#8391](https://github.com/parse-community/parse-server/issues/8391)) ([1c37a7c](https://github.com/parse-community/parse-server/commit/1c37a7cd0715949a70b220a629071c7dab7d5e7b))

# [6.0.0-alpha.26](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.25...6.0.0-alpha.26) (2023-01-20)


### Bug Fixes

* ES6 modules do not await the import of Cloud Code files ([#8368](https://github.com/parse-community/parse-server/issues/8368)) ([a7bd180](https://github.com/parse-community/parse-server/commit/a7bd180cddd784c8735622f22e012c342ad535fb))

# [6.0.0-alpha.25](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.24...6.0.0-alpha.25) (2023-01-16)


### Features

* Add `ParseQuery.watch` to trigger LiveQuery only on update of specific fields ([#8028](https://github.com/parse-community/parse-server/issues/8028)) ([fc92faa](https://github.com/parse-community/parse-server/commit/fc92faac75107b3392eeddd916c4c5b45e3c5e0c))

# [6.0.0-alpha.24](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.23...6.0.0-alpha.24) (2023-01-09)


### Features

* Reduce Docker image size by improving stages ([#8359](https://github.com/parse-community/parse-server/issues/8359)) ([40810b4](https://github.com/parse-community/parse-server/commit/40810b48ebde8b1f21d2448a3a4de0585b1b5e34))


### BREAKING CHANGES

* The Docker image does not contain the git dependency anymore; if you have been using git as a transitive dependency it now needs to be explicitly installed in your Docker file, for example with `RUN apk --no-cache add git` (#8359) ([40810b4](40810b4))

# [6.0.0-alpha.23](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.22...6.0.0-alpha.23) (2023-01-08)


### Features

* Access the internal scope of Parse Server using the new `maintenanceKey`; the internal scope contains unofficial and undocumented fields (prefixed with underscore `_`) which are used internally by Parse Server; you may want to manipulate these fields for out-of-band changes such as data migration or correction tasks; changes within the internal scope of Parse Server may happen at any time without notice or changelog entry, it is therefore recommended to look at the source code of Parse Server to understand the effects of manipulating internal fields before using the key; it is discouraged to use the `maintenanceKey` for routine operations in a production environment; see [access scopes](https://github.com/parse-community/parse-server#access-scopes) ([#8212](https://github.com/parse-community/parse-server/issues/8212)) ([f3bcc93](https://github.com/parse-community/parse-server/commit/f3bcc9365cd6f08b0a32c132e8e5ff6d1b650863))


### BREAKING CHANGES

* Fields in the internal scope of Parse Server (prefixed with underscore `_`) are only returned using the new `maintenanceKey`; previously the `masterKey` allowed reading of internal fields; see [access scopes](https://github.com/parse-community/parse-server#access-scopes) for a comparison of the keys' access permissions (#8212) ([f3bcc93](f3bcc93))

# [6.0.0-alpha.22](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.21...6.0.0-alpha.22) (2023-01-08)


### Features

* Adapt `verifyServerUrl` for new asynchronous Parse Server start-up states ([#8366](https://github.com/parse-community/parse-server/issues/8366)) ([ffa4974](https://github.com/parse-community/parse-server/commit/ffa4974158615fbff4a2692b9db41dcb50d3f77b))


### BREAKING CHANGES

* The method `ParseServer.verifyServerUrl` now returns a promise instead of a callback. ([ffa4974](ffa4974))

# [6.0.0-alpha.21](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.20...6.0.0-alpha.21) (2023-01-06)


### Features

* Add request rate limiter based on IP address ([#8174](https://github.com/parse-community/parse-server/issues/8174)) ([6c79f6a](https://github.com/parse-community/parse-server/commit/6c79f6a69e25e47846e3b0685d6bdfd6b91086b1))

# [6.0.0-alpha.20](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.19...6.0.0-alpha.20) (2023-01-06)


### Features

* Add Node 19 support ([#8363](https://github.com/parse-community/parse-server/issues/8363)) ([a4990dc](https://github.com/parse-community/parse-server/commit/a4990dcd29abcb4442f3c424aff482a0a116160f))

# [6.0.0-alpha.19](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.18...6.0.0-alpha.19) (2023-01-05)


### Features

* Remove deprecation `DEPPS1`: Native MongoDB syntax in aggregation pipeline ([#8362](https://github.com/parse-community/parse-server/issues/8362)) ([d0d30c4](https://github.com/parse-community/parse-server/commit/d0d30c4f1394f563724644a8fc81734be538a2c0))


### BREAKING CHANGES

* The MongoDB aggregation pipeline requires native MongoDB syntax instead of the custom Parse Server syntax; for example pipeline stage names require a leading dollar sign like `$match` and the MongoDB document ID is referenced using `_id` instead of `objectId` (#8362) ([d0d30c4](d0d30c4))

# [6.0.0-alpha.18](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.17...6.0.0-alpha.18) (2023-01-05)


### Bug Fixes

* The client IP address may be determined incorrectly in some cases; this fixes a security vulnerability in which the Parse Server option `masterKeyIps` may be circumvented, see [GHSA-vm5r-c87r-pf6x](https://github.com/parse-community/parse-server/security/advisories/GHSA-vm5r-c87r-pf6x) ([#8372](https://github.com/parse-community/parse-server/issues/8372)) ([892040d](https://github.com/parse-community/parse-server/commit/892040dc2f82a3e2abe2824e4b553521b6f894de))


### BREAKING CHANGES

* The mechanism to determine the client IP address has been rewritten; to correctly determine the IP address it is now required to set the Parse Server option `trustProxy` accordingly if Parse Server runs behind a proxy server, see the express framework's [trust proxy](https://expressjs.com/en/guide/behind-proxies.html) setting (#8372) ([892040d](892040d))

# [6.0.0-alpha.17](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.16...6.0.0-alpha.17) (2022-12-22)


### Features

* Upgrade Node Package Manager lock file `package-lock.json` to version 2 ([#8285](https://github.com/parse-community/parse-server/issues/8285)) ([ee72467](https://github.com/parse-community/parse-server/commit/ee7246733d63e4bda20401f7b00262ff03299f20))


### BREAKING CHANGES

* The Node Package Manager lock file `package-lock.json` is upgraded to version 2; while it is backwards with version 1 for the npm installer, consider this if you run any non-npm analysis tools that use the lock file (#8285) ([ee72467](ee72467))

# [6.0.0-alpha.16](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.15...6.0.0-alpha.16) (2022-12-21)


### Features

* Asynchronous initialization of Parse Server ([#8232](https://github.com/parse-community/parse-server/issues/8232)) ([99fcf45](https://github.com/parse-community/parse-server/commit/99fcf45e55c368de2345b0c4d780e70e0adf0e15))


### BREAKING CHANGES

* This release introduces the asynchronous initialization of Parse Server to prevent mounting Parse Server before being ready to receive request; it changes how Parse Server is imported, initialized and started; it also removes the callback `serverStartComplete`; see the [Parse Server 6 migration guide](https://github.com/parse-community/parse-server/blob/alpha/6.0.0.md) for more details (#8232) ([99fcf45](99fcf45))

# [6.0.0-alpha.15](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.14...6.0.0-alpha.15) (2022-12-20)


### Bug Fixes

* Nested objects are encoded incorrectly for MongoDB ([#8209](https://github.com/parse-community/parse-server/issues/8209)) ([1412666](https://github.com/parse-community/parse-server/commit/1412666f75829612de6fb9d7ccae35761c9b75cb))


### BREAKING CHANGES

* Nested objects are now properly stored in the database using JSON serialization; previously, due to a bug only top-level objects were serialized, but nested objects were saved as raw JSON; for example, a nested `Date` object was saved as a JSON object like `{ "__type": "Date", "iso": "2020-01-01T00:00:00.000Z" }` instead of its serialized representation `2020-01-01T00:00:00.000Z` (#8209) ([1412666](1412666))

# [6.0.0-alpha.14](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.13...6.0.0-alpha.14) (2022-12-16)


### Features

* Write log entry when request with master key is rejected as outside of `masterKeyIps` ([#8350](https://github.com/parse-community/parse-server/issues/8350)) ([e22b73d](https://github.com/parse-community/parse-server/commit/e22b73d4b700c8ff745aa81726c6680082294b45))

# [6.0.0-alpha.13](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.12...6.0.0-alpha.13) (2022-12-07)


### Features

* Add option to change the log level of the logs emitted by triggers ([#8328](https://github.com/parse-community/parse-server/issues/8328)) ([8f3b694](https://github.com/parse-community/parse-server/commit/8f3b694e39d4a966567e50dbea4d62e954fa5c06))

# [6.0.0-alpha.12](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.11...6.0.0-alpha.12) (2022-11-26)


### Features

* Upgrade Redis 3 to 4 for LiveQuery ([#8333](https://github.com/parse-community/parse-server/issues/8333)) ([b2761fb](https://github.com/parse-community/parse-server/commit/b2761fb3786b519d9bbcf35be54309d2d35da1a9))

# [6.0.0-alpha.11](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.10...6.0.0-alpha.11) (2022-11-25)


### Bug Fixes

* Parse Server option `masterKeyIps` does not include localhost by default for IPv6 ([#8322](https://github.com/parse-community/parse-server/issues/8322)) ([ab82635](https://github.com/parse-community/parse-server/commit/ab82635b0d4cf323a07ddee51fee587b43dce95c))

# [6.0.0-alpha.10](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.9...6.0.0-alpha.10) (2022-11-19)


### Bug Fixes

* Cloud Code trigger `beforeSave` does not work with `Parse.Role` ([#8320](https://github.com/parse-community/parse-server/issues/8320)) ([f29d972](https://github.com/parse-community/parse-server/commit/f29d9720e9b37918fd885c97a31e34c42750e724))

# [6.0.0-alpha.9](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.8...6.0.0-alpha.9) (2022-11-16)


### Features

* Remove deprecation `DEPPS3`: Config option `enforcePrivateUsers` defaults to `true` ([#8283](https://github.com/parse-community/parse-server/issues/8283)) ([ed499e3](https://github.com/parse-community/parse-server/commit/ed499e32a21bab9a874a9e5367dc71248ce836c4))


### BREAKING CHANGES

* The Parse Server option `enforcePrivateUsers` is set to `true` by default; in previous releases this option defaults to `false`; this change improves the default security configuration of Parse Server (#8283) ([ed499e3](ed499e3))

# [6.0.0-alpha.8](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.7...6.0.0-alpha.8) (2022-11-11)


### Features

* Restrict use of `masterKey` to localhost by default ([#8281](https://github.com/parse-community/parse-server/issues/8281)) ([6c16021](https://github.com/parse-community/parse-server/commit/6c16021a1f03a70a6d9e68cb64df362d07f3b693))


### BREAKING CHANGES

* This release restricts the use of `masterKey` to localhost by default; if you are using Parse Dashboard on a different server to connect to Parse Server you need to add the IP address of the server that hosts Parse Dashboard to this option (#8281) ([6c16021](6c16021))

# [6.0.0-alpha.7](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.6...6.0.0-alpha.7) (2022-11-11)


### Features

* Upgrade Redis 3 to 4 ([#8293](https://github.com/parse-community/parse-server/issues/8293)) ([7d622f0](https://github.com/parse-community/parse-server/commit/7d622f06a4347e0ad2cba9a4ec07d8d4fb0f67bc))


### BREAKING CHANGES

* This release upgrades to Redis 4; if you are using the Redis cache adapter with Parse Server then this is a breaking change as the Redis client options have changed; see the [Redis migration guide](https://github.com/redis/node-redis/blob/redis%404.0.0/docs/v3-to-v4.md) for more details (#8293) ([7d622f0](7d622f0))

# [6.0.0-alpha.6](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.5...6.0.0-alpha.6) (2022-11-10)


### Features

* Remove support for MongoDB 4.0 ([#8292](https://github.com/parse-community/parse-server/issues/8292)) ([37245f6](https://github.com/parse-community/parse-server/commit/37245f62ce83516b6b95a54b850f0274ef680478))


### BREAKING CHANGES

* This release removes support for MongoDB 4.0; the new minimum supported MongoDB version is 4.2. which also removes support for the deprecated MongoDB MMAPv1 storage engine ([37245f6](37245f6))

# [6.0.0-alpha.5](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.4...6.0.0-alpha.5) (2022-11-10)


### Bug Fixes

* Throwing error in Cloud Code Triggers `afterLogin`, `afterLogout` crashes server ([#8280](https://github.com/parse-community/parse-server/issues/8280)) ([130d290](https://github.com/parse-community/parse-server/commit/130d29074e3f763460e5685d0b9059e5a333caff))


### BREAKING CHANGES

* Throwing an error in Cloud Code Triggers `afterLogin`, `afterLogout` returns a rejected promise; in previous releases it crashed the server if you did not handle the error on the Node.js process level; consider adapting your code if your app currently handles these errors on the Node.js process level with `process.on('unhandledRejection', ...)` ([130d290](130d290))

# [6.0.0-alpha.4](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.3...6.0.0-alpha.4) (2022-11-10)


### Features

* Remove deprecation `DEPPS2`: Config option `directAccess` defaults to true ([#8284](https://github.com/parse-community/parse-server/issues/8284)) ([f535ee6](https://github.com/parse-community/parse-server/commit/f535ee6ec2abba63f702127258ca49fa5b4e08c9))


### BREAKING CHANGES

* Config option `directAccess` defaults to true; set this to `false` in environments where multiple Parse Server instances run behind a load balancer and Parse requests within the current Node.js environment should be routed via the load balancer and distributed as HTTP requests among all instances via the `serverURL`. ([f535ee6](f535ee6))

# [6.0.0-alpha.3](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.2...6.0.0-alpha.3) (2022-11-10)


### Features

* Remove deprecation `DEPPS4`: Remove convenience method for http request `Parse.Cloud.httpRequest`  ([#8287](https://github.com/parse-community/parse-server/issues/8287)) ([2d79c08](https://github.com/parse-community/parse-server/commit/2d79c0835b6a9acaf20d5c943d9b4619bb96831c))


### BREAKING CHANGES

* The convenience method for HTTP requests `Parse.Cloud.httpRequest` is removed; use your preferred 3rd party library for making HTTP requests ([2d79c08](2d79c08))

# [6.0.0-alpha.2](https://github.com/parse-community/parse-server/compare/6.0.0-alpha.1...6.0.0-alpha.2) (2022-11-10)


### Features

* Improve authentication adapter interface to support multi-factor authentication (MFA), authentication challenges, and provide a more powerful interface for writing custom authentication adapters ([#8156](https://github.com/parse-community/parse-server/issues/8156)) ([5bbf9ca](https://github.com/parse-community/parse-server/commit/5bbf9cade9a527787fd1002072d4013ab5d8db2b))

# [6.0.0-alpha.1](https://github.com/parse-community/parse-server/compare/5.4.0-alpha.1...6.0.0-alpha.1) (2022-11-10)


### Bug Fixes

* Remove Node 12 and Node 17 support ([#8279](https://github.com/parse-community/parse-server/issues/8279)) ([2546cc8](https://github.com/parse-community/parse-server/commit/2546cc8572bea6610cb9b3c7401d9afac0e3c1d6))


### BREAKING CHANGES

* This release removes Node 12 and Node 17 support ([2546cc8](2546cc8))

# [5.4.0-alpha.1](https://github.com/parse-community/parse-server/compare/5.3.0...5.4.0-alpha.1) (2022-10-31)


### Bug Fixes

* authentication adapter app ID validation may be circumvented; this fixes a vulnerability that affects configurations which allow users to authenticate using the Parse Server authentication adapter for *Facebook* or *Spotify* and where the server-side authentication adapter configuration `appIds` is set as a string (e.g. `abc`) instead of an array of strings (e.g. `["abc"]`) ([GHSA-r657-33vp-gp22](https://github.com/parse-community/parse-server/security/advisories/GHSA-r657-33vp-gp22)) [skip release] ([#8187](https://github.com/parse-community/parse-server/issues/8187)) ([8c8ec71](https://github.com/parse-community/parse-server/commit/8c8ec715739e0f851338cfed794409ebac66c51b))
* brute force guessing of user sensitive data via search patterns (GHSA-2m6g-crv8-p3c6) ([#8146](https://github.com/parse-community/parse-server/issues/8146)) [skip release] ([4c0c7c7](https://github.com/parse-community/parse-server/commit/4c0c7c77b76257878b9bcb05ff9de01c9d790262))
* certificate in Apple Game Center auth adapter not validated [skip release] ([#8058](https://github.com/parse-community/parse-server/issues/8058)) ([75af9a2](https://github.com/parse-community/parse-server/commit/75af9a26cc8e9e88a33d1e452c93a0ee6e509f17))
* graphQL query ignores condition `equalTo` with value `false` ([#8032](https://github.com/parse-community/parse-server/issues/8032)) ([7f5a15d](https://github.com/parse-community/parse-server/commit/7f5a15d5df0dfa3515e9f73709d6a49663545f9b))
* internal indices for classes `_Idempotency` and `_Role` are not protected in defined schema ([#8121](https://github.com/parse-community/parse-server/issues/8121)) ([c16f529](https://github.com/parse-community/parse-server/commit/c16f529f74f92154401bf662f634b3c5fa45e18e))
* invalid file request not properly handled [skip release] ([#8062](https://github.com/parse-community/parse-server/issues/8062)) ([4c9e956](https://github.com/parse-community/parse-server/commit/4c9e95674ad081f13062e8cd30b77b1962d5df57))
* liveQuery with `containedIn` not working when object field is an array ([#8128](https://github.com/parse-community/parse-server/issues/8128)) ([1d9605b](https://github.com/parse-community/parse-server/commit/1d9605bc93009263d3811df4d4249034ba6eb8c4))
* protected fields exposed via LiveQuery (GHSA-crrq-vr9j-fxxh) [skip release] ([#8076](https://github.com/parse-community/parse-server/issues/8076)) ([9fd4516](https://github.com/parse-community/parse-server/commit/9fd4516cde5c742f9f29dd05468b4a43a85639a6))
* push notifications `badge` doesn't update with Installation beforeSave trigger ([#8162](https://github.com/parse-community/parse-server/issues/8162)) ([3c75c2b](https://github.com/parse-community/parse-server/commit/3c75c2ba4851fae96a8c19b11a3efde03816c9a1))
* query aggregation pipeline cannot handle value of type `Date` when `directAccess: true` ([#8167](https://github.com/parse-community/parse-server/issues/8167)) ([e424137](https://github.com/parse-community/parse-server/commit/e4241374061caef66538de15112fb6bbafb1f5bb))
* relation constraints in compound queries `Parse.Query.or`, `Parse.Query.and` not working ([#8203](https://github.com/parse-community/parse-server/issues/8203)) ([28f0d26](https://github.com/parse-community/parse-server/commit/28f0d2667787d2ac68726607b811d6f0ef62b9f1))
* security upgrade undici from 5.6.0 to 5.8.0 ([#8108](https://github.com/parse-community/parse-server/issues/8108)) ([4aa016b](https://github.com/parse-community/parse-server/commit/4aa016b7322467422b9fdf05d8e29b9ecf910da7))
* server crashes when receiving file download request with invalid byte range; this fixes a security vulnerability that allows an attacker to impact the availability of the server instance; the fix improves parsing of the range parameter to properly handle invalid range requests ([GHSA-h423-w6qv-2wj3](https://github.com/parse-community/parse-server/security/advisories/GHSA-h423-w6qv-2wj3)) [skip release] ([#8238](https://github.com/parse-community/parse-server/issues/8238)) ([c03908f](https://github.com/parse-community/parse-server/commit/c03908f74e5c9eed834874a89df6c89c1a1e849f))
* session object properties can be updated by foreign user; this fixes a security vulnerability in which a foreign user can write to the session object of another user if the session object ID is known; the fix prevents writing to foreign session objects ([GHSA-6w4q-23cf-j9jp](https://github.com/parse-community/parse-server/security/advisories/GHSA-6w4q-23cf-j9jp)) [skip release] ([#8180](https://github.com/parse-community/parse-server/issues/8180)) ([37fed30](https://github.com/parse-community/parse-server/commit/37fed3062ccc3ef1dfd49a9fc53318e72b3e4aff))
* sorting by non-existing value throws `INVALID_SERVER_ERROR` on Postgres ([#8157](https://github.com/parse-community/parse-server/issues/8157)) ([3b775a1](https://github.com/parse-community/parse-server/commit/3b775a1fb8a1878714e3451191438963d688f1b0))
* updating object includes unchanged keys in client response for certain key types ([#8159](https://github.com/parse-community/parse-server/issues/8159)) ([37af1d7](https://github.com/parse-community/parse-server/commit/37af1d78fce5a15039ffe3af7b323c1f1e8582fc))

### Features

* add convenience access to Parse Server configuration in Cloud Code via `Parse.Server` ([#8244](https://github.com/parse-community/parse-server/issues/8244)) ([9f11115](https://github.com/parse-community/parse-server/commit/9f111158edf7fd57a65db0c4f9244b37e58cf293))
* add option to change the default value of the `Parse.Query.limit()` constraint ([#8152](https://github.com/parse-community/parse-server/issues/8152)) ([0388956](https://github.com/parse-community/parse-server/commit/038895680894984e569dff54bf5c7b31094f3891))
* add support for MongoDB 6 ([#8242](https://github.com/parse-community/parse-server/issues/8242)) ([aba0081](https://github.com/parse-community/parse-server/commit/aba0081ce1a166a93de57f3928c19a05562b5cc1))
* add support for Postgres 15 ([#8215](https://github.com/parse-community/parse-server/issues/8215)) ([2feb6c4](https://github.com/parse-community/parse-server/commit/2feb6c46080946c984daa351187fa07cd582355d))
* liveQuery support for unsorted distance queries ([#8221](https://github.com/parse-community/parse-server/issues/8221)) ([0f763da](https://github.com/parse-community/parse-server/commit/0f763da17d646b2fec2cd980d3857e46072a8a07))

# [5.3.0-alpha.32](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.31...5.3.0-alpha.32) (2022-10-29)


### Features

* add convenience access to Parse Server configuration in Cloud Code via `Parse.Server` ([#8244](https://github.com/parse-community/parse-server/issues/8244)) ([9f11115](https://github.com/parse-community/parse-server/commit/9f111158edf7fd57a65db0c4f9244b37e58cf293))

# [5.3.0-alpha.31](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.30...5.3.0-alpha.31) (2022-10-24)


### Bug Fixes

* relation constraints in compound queries `Parse.Query.or`, `Parse.Query.and` not working ([#8203](https://github.com/parse-community/parse-server/issues/8203)) ([28f0d26](https://github.com/parse-community/parse-server/commit/28f0d2667787d2ac68726607b811d6f0ef62b9f1))

# [5.3.0-alpha.30](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.29...5.3.0-alpha.30) (2022-10-17)


### Features

* add support for MongoDB 6 ([#8242](https://github.com/parse-community/parse-server/issues/8242)) ([aba0081](https://github.com/parse-community/parse-server/commit/aba0081ce1a166a93de57f3928c19a05562b5cc1))

# [5.3.0-alpha.29](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.28...5.3.0-alpha.29) (2022-10-15)


### Bug Fixes

* server crashes when receiving file download request with invalid byte range; this fixes a security vulnerability that allows an attacker to impact the availability of the server instance; the fix improves parsing of the range parameter to properly handle invalid range requests ([GHSA-h423-w6qv-2wj3](https://github.com/parse-community/parse-server/security/advisories/GHSA-h423-w6qv-2wj3)) [skip release] ([#8238](https://github.com/parse-community/parse-server/issues/8238)) ([c03908f](https://github.com/parse-community/parse-server/commit/c03908f74e5c9eed834874a89df6c89c1a1e849f))

### Features

* add support for Postgres 15 ([#8215](https://github.com/parse-community/parse-server/issues/8215)) ([2feb6c4](https://github.com/parse-community/parse-server/commit/2feb6c46080946c984daa351187fa07cd582355d))

# [5.3.0-alpha.28](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.27...5.3.0-alpha.28) (2022-10-11)


### Features

* liveQuery support for unsorted distance queries ([#8221](https://github.com/parse-community/parse-server/issues/8221)) ([0f763da](https://github.com/parse-community/parse-server/commit/0f763da17d646b2fec2cd980d3857e46072a8a07))

# [5.3.0-alpha.27](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.26...5.3.0-alpha.27) (2022-09-29)


### Bug Fixes

* authentication adapter app ID validation may be circumvented; this fixes a vulnerability that affects configurations which allow users to authenticate using the Parse Server authentication adapter for *Facebook* or *Spotify* and where the server-side authentication adapter configuration `appIds` is set as a string (e.g. `abc`) instead of an array of strings (e.g. `["abc"]`) ([GHSA-r657-33vp-gp22](https://github.com/parse-community/parse-server/security/advisories/GHSA-r657-33vp-gp22)) [skip release] ([#8187](https://github.com/parse-community/parse-server/issues/8187)) ([8c8ec71](https://github.com/parse-community/parse-server/commit/8c8ec715739e0f851338cfed794409ebac66c51b))
* session object properties can be updated by foreign user; this fixes a security vulnerability in which a foreign user can write to the session object of another user if the session object ID is known; the fix prevents writing to foreign session objects ([GHSA-6w4q-23cf-j9jp](https://github.com/parse-community/parse-server/security/advisories/GHSA-6w4q-23cf-j9jp)) [skip release] ([#8180](https://github.com/parse-community/parse-server/issues/8180)) ([37fed30](https://github.com/parse-community/parse-server/commit/37fed3062ccc3ef1dfd49a9fc53318e72b3e4aff))

### Features

* add option to change the default value of the `Parse.Query.limit()` constraint ([#8152](https://github.com/parse-community/parse-server/issues/8152)) ([0388956](https://github.com/parse-community/parse-server/commit/038895680894984e569dff54bf5c7b31094f3891))

# [5.3.0-alpha.26](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.25...5.3.0-alpha.26) (2022-09-17)


### Bug Fixes

* sorting by non-existing value throws `INVALID_SERVER_ERROR` on Postgres ([#8157](https://github.com/parse-community/parse-server/issues/8157)) ([3b775a1](https://github.com/parse-community/parse-server/commit/3b775a1fb8a1878714e3451191438963d688f1b0))

# [5.3.0-alpha.25](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.24...5.3.0-alpha.25) (2022-09-17)


### Bug Fixes

* updating object includes unchanged keys in client response for certain key types ([#8159](https://github.com/parse-community/parse-server/issues/8159)) ([37af1d7](https://github.com/parse-community/parse-server/commit/37af1d78fce5a15039ffe3af7b323c1f1e8582fc))

# [5.3.0-alpha.24](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.23...5.3.0-alpha.24) (2022-09-17)


### Bug Fixes

* query aggregation pipeline cannot handle value of type `Date` when `directAccess: true` ([#8167](https://github.com/parse-community/parse-server/issues/8167)) ([e424137](https://github.com/parse-community/parse-server/commit/e4241374061caef66538de15112fb6bbafb1f5bb))

# [5.3.0-alpha.23](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.22...5.3.0-alpha.23) (2022-09-17)


### Bug Fixes

* liveQuery with `containedIn` not working when object field is an array ([#8128](https://github.com/parse-community/parse-server/issues/8128)) ([1d9605b](https://github.com/parse-community/parse-server/commit/1d9605bc93009263d3811df4d4249034ba6eb8c4))

# [5.3.0-alpha.22](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.21...5.3.0-alpha.22) (2022-09-16)


### Bug Fixes

* brute force guessing of user sensitive data via search patterns (GHSA-2m6g-crv8-p3c6) ([#8146](https://github.com/parse-community/parse-server/issues/8146)) [skip release] ([4c0c7c7](https://github.com/parse-community/parse-server/commit/4c0c7c77b76257878b9bcb05ff9de01c9d790262))
* push notifications `badge` doesn't update with Installation beforeSave trigger ([#8162](https://github.com/parse-community/parse-server/issues/8162)) ([3c75c2b](https://github.com/parse-community/parse-server/commit/3c75c2ba4851fae96a8c19b11a3efde03816c9a1))

# [5.3.0-alpha.21](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.20...5.3.0-alpha.21) (2022-08-05)


### Bug Fixes

* internal indices for classes `_Idempotency` and `_Role` are not protected in defined schema ([#8121](https://github.com/parse-community/parse-server/issues/8121)) ([c16f529](https://github.com/parse-community/parse-server/commit/c16f529f74f92154401bf662f634b3c5fa45e18e))

# [5.3.0-alpha.20](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.19...5.3.0-alpha.20) (2022-07-22)


### Bug Fixes

* security upgrade undici from 5.6.0 to 5.8.0 ([#8108](https://github.com/parse-community/parse-server/issues/8108)) ([4aa016b](https://github.com/parse-community/parse-server/commit/4aa016b7322467422b9fdf05d8e29b9ecf910da7))

# [5.3.0-alpha.19](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.18...5.3.0-alpha.19) (2022-07-03)


### Bug Fixes

* certificate in Apple Game Center auth adapter not validated [skip release] ([#8058](https://github.com/parse-community/parse-server/issues/8058)) ([75af9a2](https://github.com/parse-community/parse-server/commit/75af9a26cc8e9e88a33d1e452c93a0ee6e509f17))
* graphQL query ignores condition `equalTo` with value `false` ([#8032](https://github.com/parse-community/parse-server/issues/8032)) ([7f5a15d](https://github.com/parse-community/parse-server/commit/7f5a15d5df0dfa3515e9f73709d6a49663545f9b))
* invalid file request not properly handled [skip release] ([#8062](https://github.com/parse-community/parse-server/issues/8062)) ([4c9e956](https://github.com/parse-community/parse-server/commit/4c9e95674ad081f13062e8cd30b77b1962d5df57))
* protected fields exposed via LiveQuery (GHSA-crrq-vr9j-fxxh) [skip release] ([#8076](https://github.com/parse-community/parse-server/issues/8076)) ([9fd4516](https://github.com/parse-community/parse-server/commit/9fd4516cde5c742f9f29dd05468b4a43a85639a6))

# [5.3.0-alpha.18](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.17...5.3.0-alpha.18) (2022-06-17)


### Bug Fixes

* auto-release process may fail if optional back-merging task fails ([#8051](https://github.com/parse-community/parse-server/issues/8051)) ([cf925e7](https://github.com/parse-community/parse-server/commit/cf925e75e87a6989f41e2e2abb2aba4332b1e79f))

# [5.3.0-alpha.17](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.16...5.3.0-alpha.17) (2022-06-17)


### Bug Fixes

* errors in GraphQL do not show the original error but a general `Unexpected Error` ([#8045](https://github.com/parse-community/parse-server/issues/8045)) ([0d81887](https://github.com/parse-community/parse-server/commit/0d818879c217f9c56100a5f59868fa37e6d24b71))
* websocket connection of LiveQuery interrupts frequently ([#8048](https://github.com/parse-community/parse-server/issues/8048)) ([03caae1](https://github.com/parse-community/parse-server/commit/03caae1e611f28079cdddbbe433daaf69e3f595c))

# [5.3.0-alpha.16](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.15...5.3.0-alpha.16) (2022-06-11)


### Bug Fixes

* live query role cache does not clear when a user is added to a role ([#8026](https://github.com/parse-community/parse-server/issues/8026)) ([199dfc1](https://github.com/parse-community/parse-server/commit/199dfc17226d85a78ab85f24362cce740f4ada39))

# [5.3.0-alpha.15](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.14...5.3.0-alpha.15) (2022-06-05)


### Bug Fixes

* interrupted WebSocket connection not closed by LiveQuery server ([#8012](https://github.com/parse-community/parse-server/issues/8012)) ([2d5221e](https://github.com/parse-community/parse-server/commit/2d5221e48012fb7781c0406d543a922d313075ea))

# [5.3.0-alpha.14](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.13...5.3.0-alpha.14) (2022-05-29)


### Features

* align file trigger syntax with class trigger; use the new syntax `Parse.Cloud.beforeSave(Parse.File, (request) => {})`, the old syntax `Parse.Cloud.beforeSaveFile((request) => {})` has been deprecated ([#7966](https://github.com/parse-community/parse-server/issues/7966)) ([c6dcad8](https://github.com/parse-community/parse-server/commit/c6dcad8d167d44912dbd416d328519314c0809bd))

# [5.3.0-alpha.13](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.12...5.3.0-alpha.13) (2022-05-28)


### Features

* selectively enable / disable default authentication adapters ([#7953](https://github.com/parse-community/parse-server/issues/7953)) ([c1e808f](https://github.com/parse-community/parse-server/commit/c1e808f9e807fc49508acbde0d8b3f2b901a1638))

# [5.3.0-alpha.12](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.11...5.3.0-alpha.12) (2022-05-20)


### Bug Fixes

* afterSave trigger removes pointer in Parse object ([#7913](https://github.com/parse-community/parse-server/issues/7913)) ([47d796e](https://github.com/parse-community/parse-server/commit/47d796ea58f65e71612ce37149be692abc9ea97f))

# [5.3.0-alpha.11](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.10...5.3.0-alpha.11) (2022-05-18)


### Features

* replace GraphQL Apollo with GraphQL Yoga ([#7967](https://github.com/parse-community/parse-server/issues/7967)) ([1aa2204](https://github.com/parse-community/parse-server/commit/1aa2204aebfdbe273d54d6d56c6029f7c34aab14))

# [5.3.0-alpha.10](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.9...5.3.0-alpha.10) (2022-05-09)


### Features

* upgrade mongodb from 4.4.1 to 4.5.0 ([#7991](https://github.com/parse-community/parse-server/issues/7991)) ([e692b5d](https://github.com/parse-community/parse-server/commit/e692b5dd8214cdb0ce79bedd30d9aa3cf4de76a5))

# [5.3.0-alpha.9](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.8...5.3.0-alpha.9) (2022-05-07)


### Bug Fixes

* depreciate allowClientClassCreation defaulting to true ([#7925](https://github.com/parse-community/parse-server/issues/7925)) ([38ed96a](https://github.com/parse-community/parse-server/commit/38ed96ace534d639db007aa7dd5387b2da8f03ae))

# [5.3.0-alpha.8](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.7...5.3.0-alpha.8) (2022-05-06)


### Features

* add support for Node 17 and 18 ([#7896](https://github.com/parse-community/parse-server/issues/7896)) ([3e9f292](https://github.com/parse-community/parse-server/commit/3e9f292d840334244934cee9a34545ac86313549))

# [5.3.0-alpha.7](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.6...5.3.0-alpha.7) (2022-04-25)


### Bug Fixes

* security upgrade @parse/fs-files-adapter from 1.2.1 to 1.2.2 ([#7948](https://github.com/parse-community/parse-server/issues/7948)) ([20fc4e2](https://github.com/parse-community/parse-server/commit/20fc4e23b53c91aac657f894bd70d049b7525c37))

# [5.3.0-alpha.6](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.5...5.3.0-alpha.6) (2022-04-11)


### Bug Fixes

* peer dependency mismatch for GraphQL dependencies ([#7934](https://github.com/parse-community/parse-server/issues/7934)) ([b7a1d76](https://github.com/parse-community/parse-server/commit/b7a1d7617b4bcac677cecedfeb6ac4a27447083b))

# [5.3.0-alpha.5](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.4...5.3.0-alpha.5) (2022-04-09)


### Bug Fixes

* security upgrade moment from 2.29.1 to 2.29.2 ([#7931](https://github.com/parse-community/parse-server/issues/7931)) ([6b68593](https://github.com/parse-community/parse-server/commit/6b68593eaec17e8b183899d2b92699c9ede7625b))

# [5.3.0-alpha.4](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.3...5.3.0-alpha.4) (2022-04-04)


### Bug Fixes

* custom database options are not passed to MongoDB GridFS ([#7911](https://github.com/parse-community/parse-server/issues/7911)) ([a72b384](https://github.com/parse-community/parse-server/commit/a72b384f76137a3d83ffb69f65cb25aff1bbab4f))

# [5.3.0-alpha.3](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.2...5.3.0-alpha.3) (2022-03-27)


### Features

* add MongoDB 5.2 support ([#7894](https://github.com/parse-community/parse-server/issues/7894)) ([6b4b358](https://github.com/parse-community/parse-server/commit/6b4b358f0842ae920e45652f5e8b2afebc6caf3a))

# [5.3.0-alpha.2](https://github.com/parse-community/parse-server/compare/5.3.0-alpha.1...5.3.0-alpha.2) (2022-03-27)


### Bug Fixes

* security upgrade parse push adapter from 4.1.0 to 4.1.2 ([#7893](https://github.com/parse-community/parse-server/issues/7893)) ([ef56e98](https://github.com/parse-community/parse-server/commit/ef56e98ef65041b4d3b7b82cce3473269c27f6fd))

# [5.3.0-alpha.1](https://github.com/parse-community/parse-server/compare/5.2.1-alpha.2...5.3.0-alpha.1) (2022-03-27)


### Features

* add MongoDB 5.1 compatibility ([#7682](https://github.com/parse-community/parse-server/issues/7682)) ([90155cf](https://github.com/parse-community/parse-server/commit/90155cf1680e5e0499b0000e071c6cb0ce3aef96))

## [5.2.1-alpha.2](https://github.com/parse-community/parse-server/compare/5.2.1-alpha.1...5.2.1-alpha.2) (2022-03-26)


### Performance Improvements

* reduce database operations when using the constant parameter in Cloud Function validation ([#7892](https://github.com/parse-community/parse-server/issues/7892)) ([48bd512](https://github.com/parse-community/parse-server/commit/48bd512eeb47666967dff8c5e723ddc5b7801daa))

## [5.2.1-alpha.1](https://github.com/parse-community/parse-server/compare/5.2.0...5.2.1-alpha.1) (2022-03-26)


### Bug Fixes

* return correct response when revert is used in beforeSave ([#7839](https://github.com/parse-community/parse-server/issues/7839)) ([f63fb2b](https://github.com/parse-community/parse-server/commit/f63fb2b338c908f0e7a648d338c26b9daa50c8f2))

# [5.2.0-alpha.3](https://github.com/parse-community/parse-server/compare/5.2.0-alpha.2...5.2.0-alpha.3) (2022-03-24)


### Bug Fixes

* security bump minimist from 1.2.5 to 1.2.6 ([#7884](https://github.com/parse-community/parse-server/issues/7884)) ([c5cf282](https://github.com/parse-community/parse-server/commit/c5cf282d11ffdc023764f8e7539a2bd6bc246fe1))

# [5.2.0-alpha.2](https://github.com/parse-community/parse-server/compare/5.2.0-alpha.1...5.2.0-alpha.2) (2022-03-24)


### Bug Fixes

* sensitive keyword detection may produce false positives ([#7881](https://github.com/parse-community/parse-server/issues/7881)) ([0d6f9e9](https://github.com/parse-community/parse-server/commit/0d6f9e951d9e186e95e96d8869066ce7022bad02))

# [5.2.0-alpha.1](https://github.com/parse-community/parse-server/compare/5.1.1...5.2.0-alpha.1) (2022-03-23)


### Features

* improved LiveQuery error logging with additional information ([#7837](https://github.com/parse-community/parse-server/issues/7837)) ([443a509](https://github.com/parse-community/parse-server/commit/443a5099059538d379fe491793a5871fcbb4f377))

# [5.0.0-alpha.29](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.28...5.0.0-alpha.29) (2022-03-12)


### Features

* bump required node engine to >=12.22.10 ([#7846](https://github.com/parse-community/parse-server/issues/7846)) ([5ace99d](https://github.com/parse-community/parse-server/commit/5ace99d542a11e422af46d9fd6b1d3d2513b34cf))


### BREAKING CHANGES

* This requires Node.js version >=12.22.10. ([5ace99d](5ace99d))

# [5.0.0-alpha.28](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.27...5.0.0-alpha.28) (2022-03-12)


### Bug Fixes

* security vulnerability that allows remote code execution (GHSA-p6h4-93qp-jhcm) ([#7844](https://github.com/parse-community/parse-server/issues/7844)) ([e569f40](https://github.com/parse-community/parse-server/commit/e569f402b1fd8648fb0d1523b71b2a03273902a5))

# [5.0.0-alpha.27](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.26...5.0.0-alpha.27) (2022-03-12)


### Reverts

* update node engine to 2.22.0 ([#7827](https://github.com/parse-community/parse-server/issues/7827)) ([f235412](https://github.com/parse-community/parse-server/commit/f235412c1b6c2b173b7531f285429ea7214b56a2))

# [5.0.0-alpha.26](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.25...5.0.0-alpha.26) (2022-02-25)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#7823](https://github.com/parse-community/parse-server/issues/7823)) ([5ca2288](https://github.com/parse-community/parse-server/commit/5ca228882332b65f3ac05407e6e4da1ee3ef3749))

# [5.0.0-alpha.25](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.24...5.0.0-alpha.25) (2022-02-23)


### Bug Fixes

* upgrade winston from 3.5.0 to 3.5.1 ([#7820](https://github.com/parse-community/parse-server/issues/7820)) ([4af253d](https://github.com/parse-community/parse-server/commit/4af253d1f8654a6f57b5137ad310cdacadc922cc))

# [5.0.0-alpha.24](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.23...5.0.0-alpha.24) (2022-02-10)


### Bug Fixes

* security upgrade follow-redirects from 1.14.7 to 1.14.8 ([#7801](https://github.com/parse-community/parse-server/issues/7801)) ([70088a9](https://github.com/parse-community/parse-server/commit/70088a95a78393da2a4ac68be81e63107747626a))

# [5.0.0-alpha.23](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.22...5.0.0-alpha.23) (2022-02-06)


### Bug Fixes

* server crash using GraphQL due to missing @apollo/client peer dependency ([#7787](https://github.com/parse-community/parse-server/issues/7787)) ([08089d6](https://github.com/parse-community/parse-server/commit/08089d6fcbb215412448ce7d92b21b9fe6c929f2))

# [5.0.0-alpha.22](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.21...5.0.0-alpha.22) (2022-02-06)


### Features

* upgrade to MongoDB Node.js driver 4.x for MongoDB 5.0 support ([#7794](https://github.com/parse-community/parse-server/issues/7794)) ([f88aa2a](https://github.com/parse-community/parse-server/commit/f88aa2a62a533e5344d1c13dd38c5a0b283a480a))


### BREAKING CHANGES

* The MongoDB GridStore adapter has been removed. By default, Parse Server already uses GridFS, so if you do not manually use the GridStore adapter, you can ignore this change. ([f88aa2a](f88aa2a))

# [5.0.0-alpha.21](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.20...5.0.0-alpha.21) (2022-01-25)


### Features

* add Cloud Code context to `ParseObject.fetch` ([#7779](https://github.com/parse-community/parse-server/issues/7779)) ([315290d](https://github.com/parse-community/parse-server/commit/315290d16110110938f80a6b779cc2d1db58c552))

# [5.0.0-alpha.20](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.19...5.0.0-alpha.20) (2022-01-22)


### Bug Fixes

* bump node-fetch from 2.6.1 to 3.1.1 ([#7782](https://github.com/parse-community/parse-server/issues/7782)) ([9082351](https://github.com/parse-community/parse-server/commit/90823514113a1a085ebc818f7109b3fd7591346f))

# [5.0.0-alpha.19](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.18...5.0.0-alpha.19) (2022-01-22)


### Bug Fixes

* bump nanoid from 3.1.25 to 3.2.0 ([#7781](https://github.com/parse-community/parse-server/issues/7781)) ([f5f63bf](https://github.com/parse-community/parse-server/commit/f5f63bfc64d3481ed944ceb5e9f50b33dccd1ce9))

# [5.0.0-alpha.18](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.17...5.0.0-alpha.18) (2022-01-13)


### Bug Fixes

* security upgrade follow-redirects from 1.14.6 to 1.14.7 ([#7769](https://github.com/parse-community/parse-server/issues/7769)) ([8f5a861](https://github.com/parse-community/parse-server/commit/8f5a8618cfa7ed9a2a239a095abffa8f3fd8d31a))

# [5.0.0-alpha.17](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.16...5.0.0-alpha.17) (2022-01-13)


### Bug Fixes

* schema cache not cleared in some cases ([#7678](https://github.com/parse-community/parse-server/issues/7678)) ([5af6e5d](https://github.com/parse-community/parse-server/commit/5af6e5dfaa129b1a350afcba4fb381b21c4cc35d))

# [5.0.0-alpha.16](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.15...5.0.0-alpha.16) (2022-01-02)


### Features

* add Idempotency to Postgres ([#7750](https://github.com/parse-community/parse-server/issues/7750)) ([0c3feaa](https://github.com/parse-community/parse-server/commit/0c3feaaa1751964c0db89f25674935c3354b1538))

# [5.0.0-alpha.15](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.14...5.0.0-alpha.15) (2022-01-02)


### Features

* support `postgresql` protocol in database URI ([#7757](https://github.com/parse-community/parse-server/issues/7757)) ([caf4a23](https://github.com/parse-community/parse-server/commit/caf4a2341f554b28e3918c53e7e897a3ca47bf8b))

# [5.0.0-alpha.14](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.13...5.0.0-alpha.14) (2022-01-02)


### Features

* support relativeTime query constraint on Postgres ([#7747](https://github.com/parse-community/parse-server/issues/7747)) ([16b1b2a](https://github.com/parse-community/parse-server/commit/16b1b2a19714535ca805f2dbb3b561d8f6a519a7))

# [5.0.0-alpha.13](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.12...5.0.0-alpha.13) (2021-12-08)


### Bug Fixes

* node engine compatibility did not include node 16 ([#7739](https://github.com/parse-community/parse-server/issues/7739)) ([ea7c014](https://github.com/parse-community/parse-server/commit/ea7c01400f992a1263543706fe49b6174758a2d6))

# [5.0.0-alpha.12](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.11...5.0.0-alpha.12) (2021-12-06)


### Bug Fixes

* adding or modifying a nested property requires addField permissions ([#7679](https://github.com/parse-community/parse-server/issues/7679)) ([6a6248b](https://github.com/parse-community/parse-server/commit/6a6248b6cb2e732d17131e18e659943b894ed2f1))

# [5.0.0-alpha.11](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.10...5.0.0-alpha.11) (2021-11-29)


### Bug Fixes

* upgrade mime from 2.5.2 to 3.0.0 ([#7725](https://github.com/parse-community/parse-server/issues/7725)) ([f5ef98b](https://github.com/parse-community/parse-server/commit/f5ef98bde32083403c0e30a12162fcc1e52cac37))

# [5.0.0-alpha.10](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.9...5.0.0-alpha.10) (2021-11-29)


### Bug Fixes

* upgrade parse from 3.3.1 to 3.4.0 ([#7723](https://github.com/parse-community/parse-server/issues/7723)) ([d4c1f47](https://github.com/parse-community/parse-server/commit/d4c1f473073764cb0570c633fc4a30669c2ce889))

# [5.0.0-alpha.9](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.8...5.0.0-alpha.9) (2021-11-27)


### Bug Fixes

* unable to use objectId size higher than 19 on GraphQL API ([#7627](https://github.com/parse-community/parse-server/issues/7627)) ([ed86c80](https://github.com/parse-community/parse-server/commit/ed86c807721cc52a1a5a9dea0b768717eec269ed))

# [5.0.0-alpha.8](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.7...5.0.0-alpha.8) (2021-11-18)


### Features

* add support for Node 16 ([#7707](https://github.com/parse-community/parse-server/issues/7707)) ([45cc58c](https://github.com/parse-community/parse-server/commit/45cc58c7e5e640a46c5d508019a3aa81242964b1))


### BREAKING CHANGES

* Removes official Node 15 support which has reached it end-of-life date. ([45cc58c](45cc58c))

# [5.0.0-alpha.7](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.6...5.0.0-alpha.7) (2021-11-12)


### Bug Fixes

* node engine range has no upper limit to exclude incompatible node versions ([#7692](https://github.com/parse-community/parse-server/issues/7692)) ([573558d](https://github.com/parse-community/parse-server/commit/573558d3adcbcc6222c92003829867e1a73eef94))

# [5.0.0-alpha.6](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.5...5.0.0-alpha.6) (2021-11-10)


### Reverts

* refactor: allow ES import for cloud string if package type is module ([b64640c](https://github.com/parse-community/parse-server/commit/b64640c5705f733798783e68d216e957044ef23c))

# [5.0.0-alpha.5](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.4...5.0.0-alpha.5) (2021-11-01)


### Features

* add user-defined schema and migrations ([#7418](https://github.com/parse-community/parse-server/issues/7418)) ([25d5c30](https://github.com/parse-community/parse-server/commit/25d5c30be2111be332eb779eb0697774a17da7af))

# [5.0.0-alpha.4](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.3...5.0.0-alpha.4) (2021-10-31)


### Features

* add support for Postgres 14 ([#7644](https://github.com/parse-community/parse-server/issues/7644)) ([090350a](https://github.com/parse-community/parse-server/commit/090350a7a0fac945394ca1cb24b290316ef06aa7))

# [5.0.0-alpha.3](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.2...5.0.0-alpha.3) (2021-10-29)


### Bug Fixes

* combined `and` query with relational query condition returns incorrect results ([#7593](https://github.com/parse-community/parse-server/issues/7593)) ([174886e](https://github.com/parse-community/parse-server/commit/174886e385e091c6bbd4a84891ef95f80b50d05c))

# [5.0.0-alpha.2](https://github.com/parse-community/parse-server/compare/5.0.0-alpha.1...5.0.0-alpha.2) (2021-10-27)


### Bug Fixes

* setting a field to null does not delete it via GraphQL API ([#7649](https://github.com/parse-community/parse-server/issues/7649)) ([626fad2](https://github.com/parse-community/parse-server/commit/626fad2e71017dcc62196c487de5f908fa43000b))


### BREAKING CHANGES

* To delete a field via the GraphQL API, the field value has to be set to `null`. Previously, setting a field value to `null` would save a null value in the database, which was not according to the [GraphQL specs](https://spec.graphql.org/June2018/#sec-Null-Value). To delete a file field use `file: null`, the previous way of using `file: { file: null }` has become obsolete. ([626fad2](626fad2))

# [5.0.0-alpha.1](https://github.com/parse-community/parse-server/compare/4.10.4...5.0.0-alpha.1) (2021-10-12)

## Breaking Changes
- Improved schema caching through database real-time hooks. Reduces DB queries, decreases Parse Query execution time and fixes a potential schema memory leak. If multiple Parse Server instances connect to the same DB (for example behind a load balancer), set the [Parse Server Option](https://parseplatform.org/parse-server/api/master/ParseServerOptions.html) `databaseOptions.enableSchemaHooks: true` to enable this feature and keep the schema in sync across all instances. Failing to do so will cause a schema change to not propagate to other instances and re-syncing will only happen when these instances restart. The options `enableSingleSchemaCache` and `schemaCacheTTL` have been removed. To use this feature with MongoDB, a replica set cluster with [change stream](https://docs.mongodb.com/manual/changeStreams/#availability) support is required. (Diamond Lewis, SebC) [#7214](https://github.com/parse-community/parse-server/issues/7214)
- Added file upload restriction. File upload is now only allowed for authenticated users by default for improved security. To allow file upload also for Anonymous Users or Public, set the `fileUpload` parameter in the [Parse Server Options](https://parseplatform.org/parse-server/api/master/ParseServerOptions.html) (dblythy, Manuel Trezza) [#7071](https://github.com/parse-community/parse-server/pull/7071)
- Removed [parse-server-simple-mailgun-adapter](https://github.com/parse-community/parse-server-simple-mailgun-adapter) dependency; to continue using the adapter it has to be explicitly installed (Manuel Trezza) [#7321](https://github.com/parse-community/parse-server/pull/7321)
- Remove support for MongoDB 3.6 which has reached its End-of-Life date and PostgreSQL 10 (Manuel Trezza) [#7315](https://github.com/parse-community/parse-server/pull/7315)
- Remove support for Node 10 which has reached its End-of-Life date (Manuel Trezza) [#7314](https://github.com/parse-community/parse-server/pull/7314)
- Remove S3 Files Adapter from Parse Server, instead install separately as `@parse/s3-files-adapter` (Manuel Trezza) [#7324](https://github.com/parse-community/parse-server/pull/7324)
- Remove Session field `restricted`; the field was a code artifact from a feature that never existed in Open Source Parse Server; if you have been using this field for custom purposes, consider that for new Parse Server installations the field does not exist anymore in the schema, and for existing installations the field default value `false` will not be set anymore when creating a new session (Manuel Trezza) [#7543](https://github.com/parse-community/parse-server/pull/7543)
- ci: add node engine version check (Manuel Trezza) [#7574](https://github.com/parse-community/parse-server/pull/7574)

## Notable Changes
- Alphabetical ordered GraphQL API, improved GraphQL Schema cache system and fix GraphQL input reassign issue (Moumouls) [#7344](https://github.com/parse-community/parse-server/issues/7344)
- Added Parse Server Security Check to report weak security settings (Manuel Trezza, dblythy) [#7247](https://github.com/parse-community/parse-server/issues/7247)
- EXPERIMENTAL: Added new page router with placeholder rendering and localization of custom and feature pages such as password reset and email verification (Manuel Trezza) [#7128](https://github.com/parse-community/parse-server/pull/7128)
- EXPERIMENTAL: Added custom routes to easily customize flows for password reset, email verification or build entirely new flows (Manuel Trezza) [#7231](https://github.com/parse-community/parse-server/pull/7231)
- Added Deprecation Policy to govern the introduction of breaking changes in a phased pattern that is more predictable for developers (Manuel Trezza) [#7199](https://github.com/parse-community/parse-server/pull/7199)
- Add REST API endpoint `/loginAs` to create session of any user with master key; allows to impersonate another user. (GormanFletcher) [#7406](https://github.com/parse-community/parse-server/pull/7406)
- Add official support for MongoDB 5.0 (Manuel Trezza) [#7469](https://github.com/parse-community/parse-server/pull/7469)
- Added Parse Server Configuration `enforcePrivateUsers`, which will remove public access by default on new Parse.Users (dblythy) [#7319](https://github.com/parse-community/parse-server/pull/7319)

## Other Changes
- Support native mongodb syntax in aggregation pipelines (Raschid JF Rafeally) [#7339](https://github.com/parse-community/parse-server/pull/7339)
- Fix error when a not yet inserted job is updated (Antonio Davi Macedo Coelho de Castro) [#7196](https://github.com/parse-community/parse-server/pull/7196)
- request.context for afterFind triggers (dblythy) [#7078](https://github.com/parse-community/parse-server/pull/7078)
- Winston Logger interpolating stdout to console (dplewis) [#7114](https://github.com/parse-community/parse-server/pull/7114)
- Added convenience method `Parse.Cloud.sendEmail(...)` to send email via email adapter in Cloud Code (dblythy) [#7089](https://github.com/parse-community/parse-server/pull/7089)
- LiveQuery support for $and, $nor, $containedBy, $geoWithin, $geoIntersects queries (dplewis) [#7113](https://github.com/parse-community/parse-server/pull/7113)
- Supporting patterns in LiveQuery server's config parameter `classNames` (Nes-si) [#7131](https://github.com/parse-community/parse-server/pull/7131)
- Added `requireAnyUserRoles` and `requireAllUserRoles` for Parse Cloud validator (dblythy) [#7097](https://github.com/parse-community/parse-server/pull/7097)
- Support Facebook Limited Login (miguel-s) [#7219](https://github.com/parse-community/parse-server/pull/7219)
- Removed Stage name check on aggregate pipelines (BRETT71) [#7237](https://github.com/parse-community/parse-server/pull/7237)
- Retry transactions on MongoDB when it fails due to transient error (Antonio Davi Macedo Coelho de Castro) [#7187](https://github.com/parse-community/parse-server/pull/7187)
- Bump tests to use Mongo 4.4.4 (Antonio Davi Macedo Coelho de Castro) [#7184](https://github.com/parse-community/parse-server/pull/7184)
- Added new account lockout policy option `accountLockout.unlockOnPasswordReset` to automatically unlock account on password reset (Manuel Trezza) [#7146](https://github.com/parse-community/parse-server/pull/7146)
- Test Parse Server continuously against all recent MongoDB versions that have not reached their end-of-life support date, added MongoDB compatibility table to Parse Server docs (Manuel Trezza) [#7161](https://github.com/parse-community/parse-server/pull/7161)
- Test Parse Server continuously against all recent Node.js versions that have not reached their end-of-life support date, added Node.js compatibility table to Parse Server docs (Manuel Trezza) [7161](https://github.com/parse-community/parse-server/pull/7177)
- Throw error on invalid Cloud Function validation configuration (dblythy) [#7154](https://github.com/parse-community/parse-server/pull/7154)
- Allow Cloud Validator `options` to be async (dblythy) [#7155](https://github.com/parse-community/parse-server/pull/7155)
- Optimize queries on classes with pointer permissions (Pedro Diaz) [#7061](https://github.com/parse-community/parse-server/pull/7061)
- Test Parse Server continuously against all relevant Postgres versions (minor versions), added Postgres compatibility table to Parse Server docs (Corey Baker) [#7176](https://github.com/parse-community/parse-server/pull/7176)
- Randomize test suite (Diamond Lewis) [#7265](https://github.com/parse-community/parse-server/pull/7265)
- LDAP: Properly unbind client on group search error (Diamond Lewis) [#7265](https://github.com/parse-community/parse-server/pull/7265)
- Improve data consistency in Push and Job Status update (Diamond Lewis) [#7267](https://github.com/parse-community/parse-server/pull/7267)
- Excluding keys that have trailing edges.node when performing GraphQL resolver (Chris Bland) [#7273](https://github.com/parse-community/parse-server/pull/7273)
- Added centralized feature deprecation with standardized warning logs (Manuel Trezza) [#7303](https://github.com/parse-community/parse-server/pull/7303)
- Use Node.js 15.13.0 in CI (Olle Jonsson) [#7312](https://github.com/parse-community/parse-server/pull/7312)
- Fix file upload issue for S3 compatible storage (Linode, DigitalOcean) by avoiding empty tags property when creating a file (Ali Oguzhan Yildiz) [#7300](https://github.com/parse-community/parse-server/pull/7300)
- Add building Docker image as CI check (Manuel Trezza) [#7332](https://github.com/parse-community/parse-server/pull/7332)
- Add NPM package-lock version check to CI (Manuel Trezza) [#7333](https://github.com/parse-community/parse-server/pull/7333)
- Fix incorrect LiveQuery events triggered for multiple subscriptions on the same class with different events [#7341](https://github.com/parse-community/parse-server/pull/7341)
- Fix select and excludeKey queries to properly accept JSON string arrays. Also allow nested fields in exclude (Corey Baker) [#7242](https://github.com/parse-community/parse-server/pull/7242)
- Fix LiveQuery server crash when using $all query operator on a missing object key (Jason Posthuma) [#7421](https://github.com/parse-community/parse-server/pull/7421)
- Added runtime deprecation warnings (Manuel Trezza) [#7451](https://github.com/parse-community/parse-server/pull/7451)
- Add ability to pass context of an object via a header, X-Parse-Cloud-Context, for Cloud Code triggers. The header addition allows client SDK's to add context without injecting _context in the body of JSON objects (Corey Baker) [#7437](https://github.com/parse-community/parse-server/pull/7437)
- Add CI check to add changelog entry (Manuel Trezza) [#7512](https://github.com/parse-community/parse-server/pull/7512)
- Refactor: uniform issue templates across repos (Manuel Trezza) [#7528](https://github.com/parse-community/parse-server/pull/7528)
- ci: bump ci environment (Manuel Trezza) [#7539](https://github.com/parse-community/parse-server/pull/7539)
- CI now pushes docker images to Docker Hub (Corey Baker) [#7548](https://github.com/parse-community/parse-server/pull/7548)
- Allow afterFind and afterLiveQueryEvent to set unsaved pointers and keys (dblythy) [#7310](https://github.com/parse-community/parse-server/pull/7310)
- Allow setting descending sort to full text queries (dblythy) [#7496](https://github.com/parse-community/parse-server/pull/7496)
- Allow cloud string for ES modules (Daniel Blyth) [#7560](https://github.com/parse-community/parse-server/pull/7560)
- docs: Introduce deprecation ID for reference in comments and online search (Manuel Trezza) [#7562](https://github.com/parse-community/parse-server/pull/7562)
- refactor: deprecate `Parse.Cloud.httpRequest`; it is recommended to use a HTTP library instead. (Daniel Blyth) [#7595](https://github.com/parse-community/parse-server/pull/7595)
- refactor: Modernize HTTPRequest tests (brandongregoryscott) [#7604](https://github.com/parse-community/parse-server/pull/7604)
- Allow liveQuery on Session class (Daniel Blyth) [#7554](https://github.com/parse-community/parse-server/pull/7554)
