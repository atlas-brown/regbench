# History

## 9.1.2

### Bug fixes

* streamify: fix nonsense race condition mitigation (bcf35db58538b3e4feda31e4d0781ff16ee0d0a7)

### Other changes

* deps: upgrade `cross-spawn` to `7.0.6` (4a55a0f3e8a0a6eadc3f43bd3c0f33eedb0619a6)
* eventify: remove redundant `async` (44d90b45f0f84423784ccd835dad20ca8209162b)
* lint: stop warning on ternary operators (4cb552cd2b69b0432ace5f326b2804f57010e69f)

## 9.1.1

### Bug fixes

* streamify: ensure array/object value are always followed by comma (a3ad4cbced8997f4030d8cf3a2466b2d3234611d)

## 9.1.0

### New features

* match: implement `recursive` option (acdd744c2eeedad3b5b3df6bc9cf4c48272b6677)
* walk: implement `stringChunkSize` option and `stringChunk` event (ea8bafcdcbc9a45d177c3407d6e7e88e1e22072a)

## 9.0.2

### Bug fixes

* deps: fix bad lockfile (446370bc4547ce68c398fb1daf7d73fa3aa8349d)

### Other changes

* tests: `new Buffer` => `Buffer.from` (6a6d08eb89ddcca2cec94bdd9f54b295172623c0)
* deps: upgrade `please-release-me` to `2.1.4` (ee3f56de430b3f9a18a590c5425b3f9ab88cf9cb)

## 9.0.1

### Other changes

* docs: remove some old information from the readme (8609361b2b2289d296ee695444bad9eb490b80d9)
* ci: run tests in node 22 (b150d9a2f538c8ef0d9fa393212994a3e33ff31e)

## 9.0.0

### Breaking changes

* options: ditch bluebird promises and the `Promise` option (7b8292977c3ea1ebf0b0abdfb91a428b0159f374)

### Other changes

* docs: remove some old information from the readme (7665213e6f24c3cf287d361100513288d0f8b1cf)
* deps: update dev dependencies (d8a1e3c4028d300a4b292efb82b1bb5d02cff62b)
* tests: add perf test for walk (ac48de9bb613133a62bd6f67b8f7baccc3808609)
* walk: restrict json buffer length when parsing (59d8f5f17081a8610f94c614929e3665d5ac511d)
* options: more modest default options (ff8d18d0c57120cc2a16c66de17908ce85a7f028)
* perf: add test command for match perf testing (2d4c48040fdc43f7838a565913ec577da921938d)

## 8.0.0

### Breaking changes

* platform: only support node 18+ (45062680c52dc5ee09b136babcb3c333e3409409)

### New features

* match: support jsonpath expressions (96e3a20eea18efd982867dd894c2f1c2a649321e)

### Other changes

* docs: change downloads metric to weekly in readme (869b78f6629cbfcf9f4f6035c8bef52f1efaf0d1)
* ci: run tests in node 16, 18 and 20 (a688782892f72f554215e181d7925fb19de934ff)
* deps: upgrade dependencies (f6e8664281931e0eeea26d62059bfbc9e9a8c37d)
* tests: add perf test for bfj.match (f345bc83e5fbd9204cab02169a2ae9f4c02d1450)

## 7.0.2

### Other changes

* package: update dependencies (cf82fd4)

## 7.0.1

### Bug fixes

* match: prevent mismatched properties when minDepth is set (4efaf1a)

## 7.0.0

### Breaking changes

* package: limit to node 8+ (cc42139)

### New features

* match: support minDepth option to improve performance (6d79fe4)

### Refactorings

* code: prefer spread syntax to Object.assign (5544086)
* code: prefer Object.entries to iterate keys and values (d101317)

### Other changes

* package: test in node 12 (9bf4e6b)
* git: ignore test/*.json (e87eaf7)

## 6.1.2

### Bug fixes

* eventify: escape object keys (910ad08)

### Other changes

* package: update deps (aafb4ff)

## 6.1.1

### Bug fixes

* eventify: don't serialise NaN or infinities (3c50fe4)

### Other changes

* deps: npm update (b3c86d0)
* project: add package lock file (63df27d)
* project: migrate to gitlab (26746a0)

## 6.1.0

### New features

* match: pass a depth argument to selector predicates (af15939)

### Other changes

* tests: delete unused var (f10902a)
* ci: reinstate tests in node 9 (7cd2594)
* ci: temporarily disable tests in node 9 (e27ccd0)

## 6.0.0

### Breaking changes

* eventify: distinguish between syntax and operational errors (e7bc23d)
* walk: distinguish between syntax and operational errors (419ddae)

### New features

* streams: expose a highWaterMark option (626f755)
* match: implement a streaming match api (e2e320d)

### Other changes

* docs: note the end of node-4 maintenance (0a32090)

## 5.3.1

### Bug fixes

* unpipe: prohibit unpipe from setting the ndjson option (90b61c6)

## 5.3.0

### New features

* walk: add support for NDJSON streams (e87672a)

### Bug fixes

* docs: document the pause and resume functions on event emitters (bfdf152)

### Other changes

* lint: silence warning (761bad4)
* package: update dev dependencies (396cc40)
* docs: link to bfj-collections (11eacb8)

## 5.2.1

### Bug fixes

* walk: handle stream errors sanely (9fe21ff)

### Other changes

* deps: update dev dependencies (c1d0518)
* ci: run tests in node 9 (222356e)
* deps: update dev dependencies (be54dbf)

## 5.2.0

* fix: extra paragraph about why bfj is slow (e51ca34)
* fix: expand possible causes of the error event (8d1d352)
* feature: add a pause method to the walk emitter (a4cd0e0)

## 5.1.1

* fix: replace old mockery link with proxyquire (e6b3924)
* chore: delete redundant teardowns (52040a6)
* fix: catch errors from user code (b8103e4)

## 5.1.0

* chore: remove extra trailing newlines (fa561e2)
* feature: allow callers to pass in the Promise constructor (aa5a664)
* refactor: better names for the option-mangling functions (5eb2e4e)

## 5.0.0

* fix: ditch mockery in favour of proxyquire (01a9177)
* breaking change: return bluebird promises instead of native (c80fe0f)
* fix: clear the yield counter when unpausing (9d5c95d)
* chore: reduce the buffer length (9abd435)

## 4.2.4

* chore: update deps (c3eeeb4)

## 4.2.3

* fix: eliminate costly string concatenation (42998d7)
* fix: micro-optimise eventify::proceed::after (98a2519)
* fix: micro-optimise walk::character (8d1c4cf)

## 4.2.2

* fix: silence obnoxious unhandled rejection warnings (1d4a902)

## 4.2.1

* refactor: discard chunks more aggressively (970a964)

## 4.2.0

* chore: add a unit test for parallel object references (e8f3895)
* chore: update check-types (c0bc551)
* fix: shortcut primitive coercion (c6381b5)
* fix: shortcut coercions (d9a9676)
* fix: eliminate unnecessary indirection in promise coercion (c63e81f)
* fix: yield rather than grow when buffer is filled (a3cc7e6)
* feature: add a bufferLength option (3b560f9)
* fix: document improved performance from disabling coercions (25eecc7)
* fix: fix lint errors (a85f7c0)

## 4.1.1

* fix: fix links in readme (90d7a0b)
* fix: pop references on exiting collections (c13eaf4)
* fix: eliminate sequential reference look-up (d622893)
* chore: add a couple of sentences on speed (ae8994d)

## 4.1.0

* fix: update node support in the readme (61c41f4)
* fix: reject if fs.createReadStream throws (4840938)
* fix: test on node 8 (371807b)
* feature: add a yieldRate option to the parsing functions (35bd20b)

## 4.0.1

* fix: set minimum required node version (db58b47)

## 4.0.0

* breaking change: revert to strings from circular arrays in walk (ccda677)
* feature: add yieldRate option to control events per tick (419247b)
* chore: increase the default discard threshold (751aa6c)

## 3.1.4

* fix: add options to example code (5c207dd)
* chore: update authors (cdf2b7d)
* chore: bump up the default array size to 4mb (4a2fe55)
* fix: fix stupid memory consumption bug (d2b6fe2)

## 3.1.3

* fix: eliminate needless per-character chunking in streamify (a7fcc2f)

## 3.1.2

* fix: eliminate duplicated readme section (283b3ce)

## 3.1.1

* fix: document the dropped support for node 4 (6120c9e)

## 3.1.0

* chore: tweak the readme (040e9be)
* chore: swap out bespoke circular array for hoopy (0ed7986)
* feature: used fixed-length circular array in streamify (e773a94)
* fix: eliminate mockery allowed module warning (b1dc7db)
* chore: fix lint errors (abde4de)

## 3.0.0

* chore: delete left-over debugging code (b903a27)
* chore: run tests on node 7 (acbb808)
* chore: remove old linter config (62c18ce)
* chore: update dependencies (882c74c)
* chore: add an integration test that parses a request (029afdb)
* chore: fix the broken perf test (8ac0e03)
* chore: add a crude memory-profiling script (1ee6f36)
* breaking change: preallocate memory to avoid out-of-memory conditions (18da753)
* feature: implement unpipe (f8a41d2)

## 2.1.2

* Fix lint errors.

## 2.1.1

* Fix "unhandled rejection" warnings.

## 2.1.0

* Stop throwing errors from promise-returning methods.

## 2.0.0

* Honour `toJSON` on all objects.
* Drop support for Node.js 0.12, switch to ES6.
* Tidy the readme.

## 1.2.2

* Sanely escape strings when serialising (thanks [@rowanmanning](https://github.com/rowanmanning)).

## 1.2.1

* Sanely handle `undefined`, functions and symbols.

## 1.2.0

* Sanely handle circular references in the data when serialising.

## 1.1.0

* Pass `options` to `fs.createReadStream` inside `read`.
* Fix truncated output bug in `write`.

## 1.0.0

* Breaking changes:
  * Take `Readable` parameter in `walk`.
  * Return `EventEmitter` from `walk`.
  * Return `Promise` from `write`.
* Fix stream termination bug in `streamify`.
* Fix missing comma after empty objects and arrays in `streamify`.
* Improve tests.
* Add `reviver` option for `parse` and `read`.
* Add `space` option for `streamify`, `stringify` and `write`.
* Remove the `debug` option from all functions.

## 0.2.0

* Implement `eventify`.
* Implement `streamify`.
* Implement `stringify`.
* Implement `write`.

## 0.1.0

* Initial release.

