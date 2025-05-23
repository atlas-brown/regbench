

# [0.13.0](https://github.com/flatiron/nconf/compare/v0.12.1...v0.13.0) (2025-04-14)


### Features

* add env prefix option ([#428](https://github.com/flatiron/nconf/issues/428)) ([c0c8787](https://github.com/flatiron/nconf/commit/c0c8787a3ba62cb21ceda568e2778caea6fe8e1f))

## [0.12.1](https://github.com/flatiron/nconf/compare/v0.12.0...v0.12.1) (2023-10-23)

### Bug Fixes
* avoid dynamic require ([#386](https://github.com/flatiron/nconf/issues/386)) ([#387](https://github.com/flatiron/nconf/issues/387)) ([#402](https://github.com/flatiron/nconf/issues/402)) ([4ee8a28](https://github.com/flatiron/nconf/commit/4ee8a28566a000e6f63a5a1ccfa49b4730c0c2f8))

v0.11.0 / Mon, 23 Nov 2020
==========================
  * [4122731](https://github.com/projects/nconf/commit/4122731) 0.11.0 (`Matt Hamann`)
  * [56794d1](https://github.com/projects/nconf/commit/56794d1) chore: upgrade deps to fix security vulns (`Matt Hamann`)

v0.10.0 / Mon, 18 Dec 2017
==========================
  * [0ef652e](https://github.com/projects/nconf/commit/0ef652e) 0.10.0 (`Matt Hamann`)
  * [01f25fa](https://github.com/projects/nconf/commit/01f25fa) Regex as env separator (#288) (`Adrien Becchis`)
  * [16667be](https://github.com/projects/nconf/commit/16667be) Argv store separator (#291) (`Adrien Becchis`)

v0.9.1 / Fri, 3 Nov 2017
========================
  * [bac910a](https://github.com/projects/nconf/commit/bac910a) 0.9.1 (`Matt Hamann`)
  * [2bdf7e1](https://github.com/projects/nconf/commit/2bdf7e1) Clean Argv Store options (#290) (`Adrien Becchis`)
  * [b9321b2](https://github.com/projects/nconf/commit/b9321b2) transformer can now return an undefined key (#289) (`Adrien Becchis`)
  * [81ce0be](https://github.com/projects/nconf/commit/81ce0be) Update changelog (`Matt Hamann`)

0.9.0 / Tue, 31 Oct 2017
========================
  * [b1ee63c](https://github.com/projects/nconf/commit/b1ee63c) fix error in transform function when dealing with dropped entries (#287) (`Augusto Franzoia`)
  * [9f70ba1](https://github.com/projects/nconf/commit/9f70ba1) [doc] Update changelog (`Matt Hamann`)
  * [8afcf99](https://github.com/projects/nconf/commit/8afcf99) [dist] Version bump. 0.9.0 (`Matt Hamann`)
  * [b41c505](https://github.com/projects/nconf/commit/b41c505) Save conf to dedicated file (#283) (`Adrien Becchis`)
  * [52e0a35](https://github.com/projects/nconf/commit/52e0a35) Update changelog (`Matt Hamann`)
  * [fa215a4](https://github.com/projects/nconf/commit/fa215a4) add tests for the normal configuration of yargs via argv (`AdrieanKhisbe`)
  * [802a8d6](https://github.com/projects/nconf/commit/802a8d6) test for yargs custom instance (more flexible check isYargs) (`AdrieanKhisbe`)
  * [3e26bb2](https://github.com/projects/nconf/commit/3e26bb2) Add posibility to pass a yargs instance to argv() method (`Nicolas Deveaud`)
  * [856fdf8](https://github.com/projects/nconf/commit/856fdf8) First pass at transform functions (#279) (`Matt Hamann`)
  * [b9c345b](https://github.com/projects/nconf/commit/b9c345b) Fix `parseValues` option name (`Matt Hamann`)
  * [35088a3](https://github.com/projects/nconf/commit/35088a3) Added nconf.any method (#278) (`Matt Hamann`)
  * [ca10d0e](https://github.com/projects/nconf/commit/ca10d0e) Add basic linting rules (`Matt Hamann`)
  * [bfb0220](https://github.com/projects/nconf/commit/bfb0220) Remove unused module (#277) (`Brian Harrington`)
  * [532ac9c](https://github.com/projects/nconf/commit/532ac9c) Support parsing simple values from env/argv strings (#273) (`Matt Hamann`)
  * [b8402d4](https://github.com/projects/nconf/commit/b8402d4) Enable support for parsing JSON environment variables (#272) (`Matt Hamann`)

v0.8.5 / Tue, 15 Aug 2017
=========================
  * [f46c449](https://github.com/projects/nconf/commit/f46c449) 0.8.5 (`Matt Hamann`)
  * [552300a](https://github.com/projects/nconf/commit/552300a) [doc] Document lowerCase option in .env(options) (#268) (`Matt Hamann`)
  * [5e8a34d](https://github.com/projects/nconf/commit/5e8a34d) enable use with webpack by removing unnecessary fs call (#252) (`evoye`)
  * [608b607](https://github.com/projects/nconf/commit/608b607) Add test for merging with defaults (#255) (`Chris Manson`)
  * [d70b6a0](https://github.com/projects/nconf/commit/d70b6a0) Fixed some issues with code escaping (`Charter Jacobson`)
  * [392c602](https://github.com/projects/nconf/commit/392c602) Copy `process.env` before lower-casing the keys (`Jan Klosinski`)

0.8.4 / Wed, 3 Feb 2016
=======================
  * [3d4e589](https://github.com/projects/nconf/commit/3d4e589) [dist] Version bump. 0.8.4 (`Jarrett Cruger`)
  * [4431c33](https://github.com/projects/nconf/commit/4431c33) [fix] handle buffers so we dont get ambiguous errors when we dont strictly read the file as utf8 (`Jarrett Cruger`)

0.8.3 / Mon, 1 Feb 2016
=======================
  * [54cab20](https://github.com/projects/nconf/commit/54cab20) [dist] Version bump. 0.8.3 (`Jarrett Cruger`)
  * [b447268](https://github.com/projects/nconf/commit/b447268) [fix] cleanup secure with new module (`Jarrett Cruger`)
  * [de551d4](https://github.com/projects/nconf/commit/de551d4) Update README.md (`Mark Oberemk`)
  * [c242f77](https://github.com/projects/nconf/commit/c242f77) [travis test] setup coveralls config + update README badges (`AdrieanKhisbe`)
  * [c8dbede](https://github.com/projects/nconf/commit/c8dbede) [test] setup istanbul coverage (`AdrieanKhisbe`)
  * [bdecdc2](https://github.com/projects/nconf/commit/bdecdc2) [travis] add v5 to node version tested (`AdrieanKhisbe`)
  * [5d6e236](https://github.com/projects/nconf/commit/5d6e236) fixed (`Wojtek Turyn`)
  * [37a84ae](https://github.com/projects/nconf/commit/37a84ae) required() method (`Wojtek Turyn`)

0.8.2 / Wed, 7 Oct 2015
=======================
  * [ddee9bc](https://github.com/projects/nconf/commit/ddee9bc) [dist] Version bump. 0.8.2 (`indexzero`)
  * [86bfd7c](https://github.com/projects/nconf/commit/86bfd7c) [fix] Do not trim `\n` from files read in. (`indexzero`)

0.8.1 / Fri, 2 Oct 2015
=======================
  * [ff0f174](https://github.com/projects/nconf/commit/ff0f174) [dist] Version bump. 0.8.1 (`indexzero`)
  * [11b2448](https://github.com/projects/nconf/commit/11b2448) [fix] Correct property path. Trim read secret keys from disk. (`indexzero`)
  * [438a2c8](https://github.com/projects/nconf/commit/438a2c8) [doc] Remove `node@0.8.0` from travis. Drop `nodeci` because it is 503 atm`. (`indexzero`)

0.8.0 / Sun, 20 Sep 2015
========================
  * [ebd8e48](https://github.com/projects/nconf/commit/ebd8e48) [dist] Version bump. 0.8.0 (`indexzero`)
  * [be085c9](https://github.com/projects/nconf/commit/be085c9) [doc] Update CHANGELOG.md. (`indexzero`)
  * [0922563](https://github.com/projects/nconf/commit/0922563) [doc fix] Remove unused and outdated literate coding documentation. (`indexzero`)
  * [4b5030d](https://github.com/projects/nconf/commit/4b5030d) [fix] Only merge actual objects, not `null` values. Fixes #150. (`indexzero`)
  * [a3589fa](https://github.com/projects/nconf/commit/a3589fa) Fixing provider issue in source (`Rob Rodriguez`)
  * [51653e6](https://github.com/projects/nconf/commit/51653e6) Passing the value parameter to the providers (`Rob Rodriguez`)
  * [2030144](https://github.com/projects/nconf/commit/2030144) [test dist] Add `test/fixtures/secure.json`. (`indexzero`)
  * [9dbed2d](https://github.com/projects/nconf/commit/9dbed2d) [doc minor] Update docs for secure information. (`indexzero`)
  * [0358545](https://github.com/projects/nconf/commit/0358545) [test api] Make the format capable of sub-objects. (`indexzero`)
  * [04c0f3a](https://github.com/projects/nconf/commit/04c0f3a) [api test] Encrypt individual keys instead of entire stringified contents. Added basic unit tests. (`indexzero`)
  * [d2b3561](https://github.com/projects/nconf/commit/d2b3561) [dist] Update `.travis.yml`. (`indexzero`)
  * [442d2b4](https://github.com/projects/nconf/commit/442d2b4) [api] Allow for `secure` to be simply a secret string. (`indexzero`)
  * [2de2bc0](https://github.com/projects/nconf/commit/2de2bc0) [api] Allow for "secure" option to be passed to `nconf.stores.File` to perform content encryption / decryption with `crypto.createCipher`. (`indexzero`)
  * [5d95f13](https://github.com/projects/nconf/commit/5d95f13) filter out undefined values (`Christian Murphy`)
  * [7d6be32](https://github.com/projects/nconf/commit/7d6be32) [travis] fix yaml syntax (supposed to solve nvm bugs #182) (`Joseph Page`)
  * [abeeca0](https://github.com/projects/nconf/commit/abeeca0) [travis] fix npm bugs for node 0.8 (recommended way) (`Joseph Page`)
  * [59056fe](https://github.com/projects/nconf/commit/59056fe) Update Async and ini (`Christian Murphy`)
  * [a2b812f](https://github.com/projects/nconf/commit/a2b812f) Add travis tests for iojs (`Joseph Page`)
  * [32d560c](https://github.com/projects/nconf/commit/32d560c) Add tests for node 0.12 (`Joseph Page`)
  * [8a21ef3](https://github.com/projects/nconf/commit/8a21ef3) env({lowerCase:true}) option to make it possible to get() keys in lower case (`Olivier Lalonde`)
  * [89dff39](https://github.com/projects/nconf/commit/89dff39) Quick grammar fix (`Nick Heiner`)
  * [339e59a](https://github.com/projects/nconf/commit/339e59a) fix random fails on tests that use child process (`Pierre Beaujeu`)
  * [a65e1a3](https://github.com/projects/nconf/commit/a65e1a3) update async (`Christian Murphy`)
  * [a82b539](https://github.com/projects/nconf/commit/a82b539) update badge and use container build (`Christian Murphy`)
  * [e5b33ce](https://github.com/projects/nconf/commit/e5b33ce) Add license attribute (`Gilad Peleg`)

0.7.2 / Tue, 4 Aug 2015
=======================
  * [c2b8b97](https://github.com/projects/nconf/commit/c2b8b97) [dist] Version bump. 0.7.2 (`indexzero`)
  * [3c11ef5](https://github.com/projects/nconf/commit/3c11ef5) fix: env.match test (`Remy Sharp`)
  * [372521b](https://github.com/projects/nconf/commit/372521b) [doc] Add the badges!. (`indexzero`)
  * [80ec01b](https://github.com/projects/nconf/commit/80ec01b) replace optimist with yargs (`Christian Murphy`)
  * [6d86950](https://github.com/projects/nconf/commit/6d86950) Grammar nit (`Nick Heiner`)

v0.7.1 / Wed, 26 Nov 2014
=========================


v0.7.1 / Wed, 26 Nov 2014
=========================
  * [dc6aed2](https://github.com/projects/nconf/commit/dc6aed2) [dist] Version bump. 0.7.1 (`Jarrett Cruger`)
  * [87a3b82](https://github.com/projects/nconf/commit/87a3b82) [fix] we shouldnt be reversing here fixes #127 (`Jarrett Cruger`)
  * [6271cdb](https://github.com/projects/nconf/commit/6271cdb) Revert "fixing the tests" (`Jarrett Cruger`)
  * [f0d5b6e](https://github.com/projects/nconf/commit/f0d5b6e) [dist] Fix travis. (`indexzero`)

v0.7.0 / Wed, 26 Nov 2014
=========================


v0.7.0 / Wed, 26 Nov 2014
=========================
  * [a2a1321](https://github.com/projects/nconf/commit/a2a1321) [dist] Version bump. 0.7.0 (`indexzero`)
  * [352f075](https://github.com/projects/nconf/commit/352f075) [dist] "Real" CHANGELOG.md again. (`indexzero`)
  * [af0e9fb](https://github.com/projects/nconf/commit/af0e9fb) [dist fix] Cleanup some whitespace. (`indexzero`)
  * [0934255](https://github.com/projects/nconf/commit/0934255) [fix] Fixed regression introduced by #98. (`indexzero`)
  * [8d5fb25](https://github.com/projects/nconf/commit/8d5fb25) [fix] Fix my own sloppy coding fixing the sloppy coding from #76. (`indexzero`)
  * [f07bc40](https://github.com/projects/nconf/commit/f07bc40) [fix] Fix inconsistent style from #98. (`indexzero`)
  * [0b8aa90](https://github.com/projects/nconf/commit/0b8aa90) [fix test] Remove leftover `console.log()` from #79. (`indexzero`)
  * [f771500](https://github.com/projects/nconf/commit/f771500) [dist] Semantic cleanup from sloppy coding in #76. (`indexzero`)
  * [ffce2cb](https://github.com/projects/nconf/commit/ffce2cb) [dist] Update package.json versions. (`indexzero`)
  * [6301d7d](https://github.com/projects/nconf/commit/6301d7d) Update Readme; multiple file() needs custom key (`Mitchell McKenna`)
  * [f69e43a](https://github.com/projects/nconf/commit/f69e43a) fixing the tests (`Chris Manson`)
  * [c8b6c98](https://github.com/projects/nconf/commit/c8b6c98) Adding helpful information in case parsing failed. (`Martin Heidegger`)
  * [8105c76](https://github.com/projects/nconf/commit/8105c76) [fix] only reverse keys for "get" action to be safe. (`Christopher Jeffrey`)
  * [2241a36](https://github.com/projects/nconf/commit/2241a36) [fix] have latter stores precede the former stores again. (`Christopher Jeffrey`)
  * [0bb89ee](https://github.com/projects/nconf/commit/0bb89ee) [fix] have latter stores precede the former stores. (`Christopher Jeffrey`)
  * [43505a5](https://github.com/projects/nconf/commit/43505a5) Use ~ for dependencies (`Gabe Gorelick`)
  * [05d73de](https://github.com/projects/nconf/commit/05d73de) [fix] No need to test 0.6 anymore (`Jarrett Cruger`)
  * [79b9b84](https://github.com/projects/nconf/commit/79b9b84) [doc] Add a Literal example to add() (`Tommy Stanton`)
  * [3a7b788](https://github.com/projects/nconf/commit/3a7b788) [doc] The store for File is empty if non-existent (`Tommy Stanton`)
  * [9891814](https://github.com/projects/nconf/commit/9891814) Delete CHANGELOG.md (`Alexey Simonenko`)
  * [120f5f0](https://github.com/projects/nconf/commit/120f5f0) added documentation (`joaoafrmartins`)
  * [681fd2f](https://github.com/projects/nconf/commit/681fd2f) added regexp filtering to nconf env store (`joaoafrmartins`)
  * [039057c](https://github.com/projects/nconf/commit/039057c) allow different separator for memorystore (`José F. Romaniello`)
  * [b73b0e1](https://github.com/projects/nconf/commit/b73b0e1) attach help and showHelp arguments to the argv store (`Johnny Domino`)
  * [4894c8f](https://github.com/projects/nconf/commit/4894c8f) resolves #64 passing usage string to optimist (`Johnny Domino`)

v0.6.9 / Sun, 1 Dec 2013
========================


v0.6.9 / Sun, 1 Dec 2013
========================
  * [022b9bc](https://github.com/projects/nconf/commit/022b9bc) [dist] Version bump. 0.6.9 (`Jarrett Cruger`)
  * [9aa33b5](https://github.com/projects/nconf/commit/9aa33b5) [dist] bump optimist version, fixes #89 (`Jarrett Cruger`)
  * [92311c8](https://github.com/projects/nconf/commit/92311c8) [rm] kill pkginfo (`Jarrett Cruger`)
  * [c713936](https://github.com/projects/nconf/commit/c713936) [dist] bump async (`Jarrett Cruger`)

v0.6.8 / Tue, 29 Oct 2013
=========================


v0.6.8 / Tue, 29 Oct 2013
=========================
  * [cd81efa](https://github.com/projects/nconf/commit/cd81efa) [dist] Version bump. 0.6.8 (`Jarrett Cruger`)
  * [6c1eb5e](https://github.com/projects/nconf/commit/6c1eb5e) fixed white spacing and added (embarrassing absent) variable declarations (`midknight41`)
  * [ccd609c](https://github.com/projects/nconf/commit/ccd609c) updated version of vows as v0.6 didn't work with node 0.10 (`midknight41`)
  * [5546469](https://github.com/projects/nconf/commit/5546469) updated .travis.yml as travis doesn't support node 0.4 or 0.9 (`midknight41`)
  * [6641ed2](https://github.com/projects/nconf/commit/6641ed2) made bom tests more meaningful (`midknight41`)
  * [2ce8aea](https://github.com/projects/nconf/commit/2ce8aea) made bom tests more meaningful (`midknight41`)
  * [f7733c1](https://github.com/projects/nconf/commit/f7733c1) included bom test fixtures (`midknight41`)
  * [24f77a0](https://github.com/projects/nconf/commit/24f77a0) included bom test fixtures (`midknight41`)
  * [29f1ca2](https://github.com/projects/nconf/commit/29f1ca2) added support for BOM in load() and loadSync() (`midknight41`)
  * [ada15db](https://github.com/projects/nconf/commit/ada15db) Test that invalid file name is indicated (`Marcin Floryan`)
  * [0135d95](https://github.com/projects/nconf/commit/0135d95) Additional error information when JSON config file cannot be read (`Marcin Floryan`)
  * [5d2ebfb](https://github.com/projects/nconf/commit/5d2ebfb) Added test to confirm merging an Object and null behaves as expected. (`Michael Schoonmaker`)
  * [ed41c51](https://github.com/projects/nconf/commit/ed41c51) Updated Memory.merge to handle null values (`Michael Schoonmaker`)

v0.6.7 / Thu, 20 Dec 2012
=========================


v0.6.7 / Thu, 20 Dec 2012
=========================
  * [d77c55d](https://github.com/projects/nconf/commit/d77c55d) [dist] Version bump. 0.6.7 (`indexzero`)
  * [bb57c49](https://github.com/projects/nconf/commit/bb57c49) Prefer this fix for #65 to 6045618 (`Michael Hart`)

v0.6.6 / Thu, 20 Dec 2012
=========================


v0.6.6 / Thu, 20 Dec 2012
=========================
  * [aec2b4e](https://github.com/projects/nconf/commit/aec2b4e) [dist] Version bump. 0.6.6 (`indexzero`)
  * [6045618](https://github.com/projects/nconf/commit/6045618) [fix] Fix for #65 (`indexzero`)
  * [0d795ec](https://github.com/projects/nconf/commit/0d795ec) [test] Better tests to show #65 (`indexzero`)
  * [f19f0b6](https://github.com/projects/nconf/commit/f19f0b6) [test] Added failing test to illustrate #65 (`indexzero`)

v0.6.5 / Fri, 2 Nov 2012
========================


v0.6.5 / Fri, 2 Nov 2012
========================
  * [bcbaf3a](https://github.com/projects/nconf/commit/bcbaf3a) [dist] Bump version to 0.6.5 (`Maciej Małecki`)
  * [8b65e19](https://github.com/projects/nconf/commit/8b65e19) [test] Test on newer node versions (`Maciej Małecki`)
  * [8e987b8](https://github.com/projects/nconf/commit/8e987b8) make it possible to use other formats than json in common.loadFiles and common.loadFilesSync (`Christian Tellnes`)
  * [da39d3c](https://github.com/projects/nconf/commit/da39d3c) [fix] null values should merge properly instead of throwing errors (`Bradley Meck`)
  * [7421836](https://github.com/projects/nconf/commit/7421836) [fix] heirarchy fixture file path wrong in tests (`Bradley Meck`)
  * [683f789](https://github.com/projects/nconf/commit/683f789) [fix] #59 root get/set should work via null/undefined as key (`Bradley Meck`)
  * [0f092ab](https://github.com/projects/nconf/commit/0f092ab) Added docs for options hash to optimist. (`Ethan Winn`)

v0.6.4 / Tue, 10 Jul 2012
=========================


v0.6.4 / Tue, 10 Jul 2012
=========================
  * [7279bc1](https://github.com/projects/nconf/commit/7279bc1) [dist] Version bump. 0.6.4 (`indexzero`)
  * [d96d254](https://github.com/projects/nconf/commit/d96d254) [fix] Fix regression introduced by 36e061c4bda8d79f657dc24b1dcf1937f31d7efe (`indexzero`)
  * [7e8d9d6](https://github.com/projects/nconf/commit/7e8d9d6) [test] Added failing test for `.save()` regression introduced by @russfrank in 36e061c4bda8d79f657dc24b1dcf1937f31d7efe (`indexzero`)
  * [04e2230](https://github.com/projects/nconf/commit/04e2230) [minor doc] Update file header in test/provider-test.js (`indexzero`)

v0.6.3 / Tue, 10 Jul 2012
=========================


v0.6.3 / Tue, 10 Jul 2012
=========================
  * [c7c6b6f](https://github.com/projects/nconf/commit/c7c6b6f) [dist] Version bump. 0.6.3 (`indexzero`)
  * [3073430](https://github.com/projects/nconf/commit/3073430) [api test doc] Make options to `Provider.prototype.file` take more flexible options (`indexzero`)
  * [8b53c12](https://github.com/projects/nconf/commit/8b53c12) [minor] Use locally scoped `path` variable (`indexzero`)

v0.6.2 / Tue, 10 Jul 2012
=========================


v0.6.2 / Tue, 10 Jul 2012
=========================
  * [80a7973](https://github.com/projects/nconf/commit/80a7973) [dist] Version bump. 0.6.2 (`indexzero`)
  * [7515f66](https://github.com/projects/nconf/commit/7515f66) [fix] Ensure that all options are passed to `Provider.prototype.add` in `Provider.prototype.file`. Fixes #51 [doc] Update README.md and method documentation [dist] Remove vim comments (`indexzero`)

v0.6.1 / Sun, 8 Jul 2012
========================


v0.6.1 / Sun, 8 Jul 2012
========================
  * [eeddb70](https://github.com/projects/nconf/commit/eeddb70) [dist] Version bump. 0.6.1 (`indexzero`)
  * [9aaafc5](https://github.com/projects/nconf/commit/9aaafc5) Ugh, fixed whitespace (`Michael Hart`)
  * [3c08fad](https://github.com/projects/nconf/commit/3c08fad) Changed  to  as it's more accurate (`Michael Hart`)
  * [e15f787](https://github.com/projects/nconf/commit/e15f787) Updated README and allowed a simpley syntax (`Michael Hart`)
  * [92d4e9e](https://github.com/projects/nconf/commit/92d4e9e) Added test and updated docs (`Michael Hart`)
  * [8921d05](https://github.com/projects/nconf/commit/8921d05) Added support for nested configs via env (`Michael Hart`)
  * [6cbc323](https://github.com/projects/nconf/commit/6cbc323) Add reset to the list of destructive commands (`Michael Hart`)
  * [26d81e8](https://github.com/projects/nconf/commit/26d81e8) Merge objects if necessary when traversing stores on get() (`Michael Hart`)
  * [83440f9](https://github.com/projects/nconf/commit/83440f9) fix spelling in error message (`Christian Tellnes`)
  * [87b0dd0](https://github.com/projects/nconf/commit/87b0dd0) [minor] Use `fs.exists` when available (`Maciej Małecki`)
  * [1f67d35](https://github.com/projects/nconf/commit/1f67d35) [dist] Fix maintainers field (`Christian Howe`)
  * [6353d02](https://github.com/projects/nconf/commit/6353d02) api and doc change for flatiron/nconf#28 (`.file` may now take a string instead of an object) (`Jonathan Stewmon`)
  * [d3e6897](https://github.com/projects/nconf/commit/d3e6897) Proper teardowns in `complete-test.js` (`Russell Frank`)
  * [94bdb7d](https://github.com/projects/nconf/commit/94bdb7d) Added `complete-test.js` & fixture. (`Russell Frank`)
  * [36e061c](https://github.com/projects/nconf/commit/36e061c) Fixes to `Provider.save()` and tests. (`Russell Frank`)
  * [29eb5f9](https://github.com/projects/nconf/commit/29eb5f9) [minor] Fix whitespaces (`Pavan Kumar Sunkara`)
  * [6ce0b7a](https://github.com/projects/nconf/commit/6ce0b7a) Surfacing additional JSON.stringify arguments in formats.json.stringify, and adding the json_spacing option to the File constructor. (`Jordan Harband`)
  * [b369931](https://github.com/projects/nconf/commit/b369931) [minor] Use `fs.existsSync` when available (`Maciej Małecki`)
  * [d8c4749](https://github.com/projects/nconf/commit/d8c4749) [test] Test on `node@0.7` (`Maciej Małecki`)
  * [464af41](https://github.com/projects/nconf/commit/464af41) [fix test] Fix bad test assertion (`indexzero`)

v0.5.1 / Mon, 2 Jan 2012
========================


v0.5.1 / Mon, 2 Jan 2012
========================
  * [6a6e092](https://github.com/projects/nconf/commit/6a6e092) [dist] Version bump. 0.5.1 (`indexzero`)
  * [6242caa](https://github.com/projects/nconf/commit/6242caa) [api minor] Add `.loadSync()` to Memory store. Fixes #24 (`indexzero`)
  * [d0a9121](https://github.com/projects/nconf/commit/d0a9121) [test dist] Remove unused `eyes` dependency (`indexzero`)
  * [9e9e37b](https://github.com/projects/nconf/commit/9e9e37b) [minor] Update whitespace (`indexzero`)
  * [fdb73f0](https://github.com/projects/nconf/commit/fdb73f0) updated tests to verify that Provider.load respects hierarchy (`Jonathan Stewmon`)
  * [a216336](https://github.com/projects/nconf/commit/a216336) updated Provider.load to respect sources hierarchy (`Jonathan Stewmon`)
  * [6b6bf85](https://github.com/projects/nconf/commit/6b6bf85) updated optimist to version 0.3.x (`Jonathan Stewmon`)
  * [5c43d54](https://github.com/projects/nconf/commit/5c43d54) fixed merge issue in Provider.load by reversing store keys in getStores (`Jonathan Stewmon`)
  * [2804b1f](https://github.com/projects/nconf/commit/2804b1f) fixed issue caused by using same name for defaults and overrides (`Jonathan Stewmon`)
  * [e0e070a](https://github.com/projects/nconf/commit/e0e070a) [test] Test if `File.saveSync()` returns store content (`Maciej Małecki`)
  * [963387c](https://github.com/projects/nconf/commit/963387c) [api] `File.saveSync()` should return store content (`Maciej Małecki`)
  * [d5ce1ed](https://github.com/projects/nconf/commit/d5ce1ed) [test] Test `saveSync()` method of file store (`Maciej Małecki`)
  * [cf9889e](https://github.com/projects/nconf/commit/cf9889e) [dist] Upgrade vows to 0.6.x (`Pavan Kumar Sunkara`)

v0.5.0 / Thu, 24 Nov 2011
=========================


v0.5.0 / Thu, 24 Nov 2011
=========================
  * [62cb7fb](https://github.com/projects/nconf/commit/62cb7fb) [dist] Version bump. 0.5.0 (`indexzero`)
  * [6c720ee](https://github.com/projects/nconf/commit/6c720ee) [dist] Update Copyright and Author to Nodejitsu Inc. (`indexzero`)
  * [4643a14](https://github.com/projects/nconf/commit/4643a14) [doc] Updated README and added CHANGELOG.md (`indexzero`)
  * [90b0297](https://github.com/projects/nconf/commit/90b0297) [test] Update tests to use optional options API (`indexzero`)
  * [53d854a](https://github.com/projects/nconf/commit/53d854a) [api] Default to `options` if `options.store` is not available in nconf.Literal (`indexzero`)
  * [b658f68](https://github.com/projects/nconf/commit/b658f68) [test] Add additional test coverage for hierarchical configuration (`indexzero`)
  * [a9c3540](https://github.com/projects/nconf/commit/a9c3540) [fix test] Fix overwritten tests in file-store-test.js (`indexzero`)
  * [f4f1fdf](https://github.com/projects/nconf/commit/f4f1fdf) [fix test] Update to respected `.sources` option correctly (`indexzero`)
  * [bbcb271](https://github.com/projects/nconf/commit/bbcb271) [api fix] Dont eagerly create config files in `.load()` and `.loadSync()` (`indexzero`)
  * [021850a](https://github.com/projects/nconf/commit/021850a) [test] Move around test .json files (`indexzero`)
  * [0fbc9a2](https://github.com/projects/nconf/commit/0fbc9a2) [test] Added tests (which are now passing) for #15 (`indexzero`)
  * [16a18bf](https://github.com/projects/nconf/commit/16a18bf) [refactor] Expose all store prototypes on `nconf.*`. Expose store instances on Provider.stores and Provider.sources (`indexzero`)
  * [c3cebe7](https://github.com/projects/nconf/commit/c3cebe7) [refactor] Rename `.sources` to `._stores` and bring back `._sources` (`indexzero`)
  * [78ce556](https://github.com/projects/nconf/commit/78ce556) [minor] Dont allow `.set()` calls to change values in readOnly stores: argv, env, and literal (`indexzero`)
  * [1aa2f1f](https://github.com/projects/nconf/commit/1aa2f1f) [doc] Updated README.md (`indexzero`)
  * [47a56cc](https://github.com/projects/nconf/commit/47a56cc) [test] Test for hierarchical argv options get() (`Sander Tolsma`)
  * [c3c315d](https://github.com/projects/nconf/commit/c3c315d) [refactor] Refactor to make using nconf more fluent. (`indexzero`)
  * [2c1ef71](https://github.com/projects/nconf/commit/2c1ef71) [dist] Bump to v0.4.6 (`Marak Squires`)
  * [1b258bf](https://github.com/projects/nconf/commit/1b258bf) [fix] Fix option parsing (`Maciej Małecki`)
  * [ef3222e](https://github.com/projects/nconf/commit/ef3222e) [dist] Make `repository` point to `flatiron/nconf` (`Maciej Małecki`)

v0.4.5 / Sun, 20 Nov 2011
=========================


v0.4.5 / Sun, 20 Nov 2011
=========================
  * [f4723e9](https://github.com/projects/nconf/commit/f4723e9) [dist] Version bump. 0.4.5 (`indexzero`)
  * [2475d06](https://github.com/projects/nconf/commit/2475d06) [test] Test command line arguments reparsing (`Maciej Małecki`)
  * [bbc5885](https://github.com/projects/nconf/commit/bbc5885) [api] Reparse argv arguments on `system.loadArgv()` (`Maciej Małecki`)
  * [51700ca](https://github.com/projects/nconf/commit/51700ca) [test minor] Use `process.argv[0]` when spawning processes (`Maciej Małecki`)
  * [07f8c3e](https://github.com/projects/nconf/commit/07f8c3e) [doc] Add Travis build status image (`Maciej Małecki`)
  * [bab96b0](https://github.com/projects/nconf/commit/bab96b0) [test] Add `.travis.yml` for testing on Travis CI (`Maciej Małecki`)

v0.4.4 / Sat, 22 Oct 2011
=========================


v0.4.4 / Sat, 22 Oct 2011
=========================
  * [b96151e](https://github.com/projects/nconf/commit/b96151e) [dist] Version bump. 0.4.4 (`indexzero`)
  * [d8a3020](https://github.com/projects/nconf/commit/d8a3020) [fix] filename --> file in a few file transport examples (`Joshua Holbrook`)
  * [2e33082](https://github.com/projects/nconf/commit/2e33082) [api] Automatically search for a file if `options.search` is true in File store (`indexzero`)

v0.4.3 / Sun, 25 Sep 2011
=========================


v0.4.3 / Sun, 25 Sep 2011
=========================
  * [86e22cb](https://github.com/projects/nconf/commit/86e22cb) [dist] Version bump. 0.4.3 (`indexzero`)
  * [a2464d2](https://github.com/projects/nconf/commit/a2464d2) [api] Load sources into the default system store so they are permenantly cached (`indexzero`)

v0.4.2 / Sun, 25 Sep 2011
=========================


v0.4.2 / Sun, 25 Sep 2011
=========================
  * [e243b0b](https://github.com/projects/nconf/commit/e243b0b) [dist] Version bump. 0.4.2 (`indexzero`)
  * [d0aee0d](https://github.com/projects/nconf/commit/d0aee0d) [api test] Added `.sources` option for `nconf.Provider` for readonly configuration data (`indexzero`)
  * [0234e17](https://github.com/projects/nconf/commit/0234e17) [fix] Update bad variable reference (`indexzero`)

v0.4.1 / Mon, 19 Sep 2011
=========================


v0.4.1 / Mon, 19 Sep 2011
=========================
  * [d334d07](https://github.com/projects/nconf/commit/d334d07) [dist] Version bump. 0.4.1 (`indexzero`)
  * [a490c77](https://github.com/projects/nconf/commit/a490c77) [fix] Match case in `require` statements (`indexzero`)

v0.4.0 / Sun, 18 Sep 2011
=========================


v0.4.0 / Sun, 18 Sep 2011
=========================
  * [0addce4](https://github.com/projects/nconf/commit/0addce4) [dist] Version bump. 0.4.0 (`indexzero`)
  * [c4c8d7b](https://github.com/projects/nconf/commit/c4c8d7b) [doc] Updated docco docs (`indexzero`)
  * [f867e74](https://github.com/projects/nconf/commit/f867e74) [dist] Remove unused test fixtures (`indexzero`)
  * [1ef5797](https://github.com/projects/nconf/commit/1ef5797) [api test] Finished API and tests for hierarchical configuration storage. (`indexzero`)
  * [7ef9b11](https://github.com/projects/nconf/commit/7ef9b11) [doc] Minor update to library `title` (`indexzero`)
  * [a063880](https://github.com/projects/nconf/commit/a063880) [doc] Updated usage.js and README.md for the next hierarchical syntax. (`indexzero`)
  * [da2da7a](https://github.com/projects/nconf/commit/da2da7a) [api test breaking refactor] Significant refactor to how nconf works. Now a fully hierarchical configuration storage mechanism capable of multiple levels of stores of the same type. (`indexzero`)
  * [2bda7b6](https://github.com/projects/nconf/commit/2bda7b6) [api] Added `nconf.stores.System` (`indexzero`)

v0.3.1 / Mon, 29 Aug 2011
=========================


v0.3.1 / Mon, 29 Aug 2011
=========================
  * [54ea095](https://github.com/projects/nconf/commit/54ea095) [dist] Version bump. 0.3.1 (`indexzero`)
  * [e631d23](https://github.com/projects/nconf/commit/e631d23) [fix] Lazy-load any CLI arguments from `optimist` (`indexzero`)

v0.3.0 / Sun, 28 Aug 2011
=========================


v0.3.0 / Sun, 28 Aug 2011
=========================
  * [8a31728](https://github.com/projects/nconf/commit/8a31728) [dist] Version bump. 0.3.0 (`indexzero`)
  * [2e47d02](https://github.com/projects/nconf/commit/2e47d02) [doc] Updated README.md (`indexzero`)
  * [954b5fd](https://github.com/projects/nconf/commit/954b5fd) [doc] Updated docco docs (`indexzero`)
  * [fb392dd](https://github.com/projects/nconf/commit/fb392dd) [api test] Updated test/provider-test.js and associated merge implementation (`indexzero`)
  * [e8904e9](https://github.com/projects/nconf/commit/e8904e9) [api] Added `nconf.loadFiles()` method (`indexzero`)
  * [a6533aa](https://github.com/projects/nconf/commit/a6533aa) [dist api test] Finished integrating features from reconf and updating associated tests (`indexzero`)
  * [add8922](https://github.com/projects/nconf/commit/add8922) [api dist] Begin to integrate features from reconf (`indexzero`)
  * [57f0742](https://github.com/projects/nconf/commit/57f0742) [doc] Update README.md for nconf-redis (`indexzero`)

v0.2.0 / Fri, 8 Jul 2011
========================


v0.2.0 / Fri, 8 Jul 2011
========================
  * [b6adab2](https://github.com/projects/nconf/commit/b6adab2) [dist] Version bump. 0.2.0 (`indexzero`)
  * [8620e6b](https://github.com/projects/nconf/commit/8620e6b) [api test] Remove Redis store in preparation for nconf-redis (`indexzero`)
  * [49a1a6d](https://github.com/projects/nconf/commit/49a1a6d) [dist] Added LICENSE (MIT ftw) (`indexzero`)

0.1.14 / Sat, 25 Jun 2011
=========================
  * [d485f5e](https://github.com/projects/nconf/commit/d485f5e) [dist] Version bump. 0.1.14 (`indexzero`)
  * [7e4623e](https://github.com/projects/nconf/commit/7e4623e) [api test] Update `nconf.Provider` to create a new instance of the store if the options are different (`indexzero`)

v0.1.13 / Fri, 24 Jun 2011
==========================


v0.1.13 / Fri, 24 Jun 2011
==========================
  * [1b0f347](https://github.com/projects/nconf/commit/1b0f347) [dist] Version bump. 0.1.13 (`indexzero`)
  * [d8b5a80](https://github.com/projects/nconf/commit/d8b5a80) [minor] Small style updates to the File store (`indexzero`)
  * [c436851](https://github.com/projects/nconf/commit/c436851) [refactor]: Cleaned up error handling on File.loadSync and File.load [refactor]: Using path module to determine if file exists instead of throwing error [api]: File.load and File.loadSync will now automatically create the requested JSON file path if no file is found. (`Marak Squires`)
  * [6c6887a](https://github.com/projects/nconf/commit/6c6887a) move callback outside of try / catch (`Dominic Tarr`)

v0.1.12 / Wed, 8 Jun 2011
=========================


v0.1.12 / Wed, 8 Jun 2011
=========================
  * [ae5aec6](https://github.com/projects/nconf/commit/ae5aec6) [dist] Version bump. 0.1.12 (`indexzero`)
  * [76db254](https://github.com/projects/nconf/commit/76db254) [fix test] Update nconf.stores.File to respond with an error when loading malformed JSON async (`indexzero`)

v0.1.11 / Tue, 7 Jun 2011
=========================


v0.1.11 / Tue, 7 Jun 2011
=========================
  * [d7495f8](https://github.com/projects/nconf/commit/d7495f8) [dist] Version bump. 0.1.11 (`indexzero`)
  * [4c7aea9](https://github.com/projects/nconf/commit/4c7aea9) [doc] Update docco docs (`indexzero`)
  * [f611066](https://github.com/projects/nconf/commit/f611066) [dist] Update to pkginfo 0.2.0 (`indexzero`)

v0.1.10 / Sun, 5 Jun 2011
=========================


v0.1.10 / Sun, 5 Jun 2011
=========================
  * [be76887](https://github.com/projects/nconf/commit/be76887) [dist] Version bump. 0.1.10 (`indexzero`)
  * [7ffbf0a](https://github.com/projects/nconf/commit/7ffbf0a) [doc] Regenerate docco docs (`indexzero`)
  * [13f5753](https://github.com/projects/nconf/commit/13f5753) [minor] Update `nconf.version` to use pkginfo (`indexzero`)
  * [c9e60d9](https://github.com/projects/nconf/commit/c9e60d9) [doc] Update code docs (`indexzero`)
  * [4459ba5](https://github.com/projects/nconf/commit/4459ba5) [api] Added `.merge()` to stores.Memory and stores.Redis (`indexzero`)
  * [a4f00be](https://github.com/projects/nconf/commit/a4f00be) [dist] Update package.json and .gitignore (`indexzero`)
  * [8a79ef0](https://github.com/projects/nconf/commit/8a79ef0) test retrieving non-existent keys and drilling into non-objects (`Sami Samhuri`)
  * [6acc1fc](https://github.com/projects/nconf/commit/6acc1fc) allow storing null in redis (`Sami Samhuri`)
  * [faa8ab9](https://github.com/projects/nconf/commit/faa8ab9) correctly retrieve falsy values from memory (hence file) (`Sami Samhuri`)
  * [bdf2fc8](https://github.com/projects/nconf/commit/bdf2fc8) [fix] Fixed spelling error (`avian`)
  * [e7c216e](https://github.com/projects/nconf/commit/e7c216e) [minor] Clarified error message returned when a config file contains invalid JSON. (`avian`)
  * [e26bbe2](https://github.com/projects/nconf/commit/e26bbe2) [doc] Updated code samples for GitHub flavored markdown with Javascript (`indexzero`)

v0.1.9 / Mon, 16 May 2011
=========================


v0.1.9 / Mon, 16 May 2011
=========================
  * [78202ec](https://github.com/projects/nconf/commit/78202ec) [dist] Version bump. 0.1.9 (`indexzero`)
  * [87351ca](https://github.com/projects/nconf/commit/87351ca) [fix] Use the memory engine by default (`indexzero`)

v0.1.8 / Mon, 16 May 2011
=========================


v0.1.8 / Mon, 16 May 2011
=========================
  * [badbb59](https://github.com/projects/nconf/commit/badbb59) [dist] Version bump. 0.1.8 (`indexzero`)
  * [9da37df](https://github.com/projects/nconf/commit/9da37df) [dist api test] Refactor pluggable nconf-level logic into nconf.Provider. Update .gitignore for npm 1.0. Update pathing in source and tests to be more `require.paths` future-proof (`indexzero`)

v0.1.7 / Wed, 20 Apr 2011
=========================


v0.1.7 / Wed, 20 Apr 2011
=========================
  * [4a61560](https://github.com/projects/nconf/commit/4a61560) [dist] Version bump. 0.1.7 (`indexzero`)
  * [3b104f2](https://github.com/projects/nconf/commit/3b104f2) [doc] Update docco docs (`indexzero`)
  * [d65922d](https://github.com/projects/nconf/commit/d65922d) [api] Add `.saveSync()` and `.loadSync()` methods to File store (`indexzero`)

v0.1.6 / Tue, 19 Apr 2011
=========================


v0.1.6 / Tue, 19 Apr 2011
=========================
  * [b9951b4](https://github.com/projects/nconf/commit/b9951b4) [dist] Version bump. 0.1.6. (`indexzero`)
  * [da85594](https://github.com/projects/nconf/commit/da85594) [doc] Update docco docs (`indexzero`)
  * [067d58a](https://github.com/projects/nconf/commit/067d58a) [minor test] Add tests for File store `save()`. Improve default file format to pretty print the JSON output (`indexzero`)

v0.1.5 / Wed, 13 Apr 2011
=========================


v0.1.5 / Wed, 13 Apr 2011
=========================
  * [96859f9](https://github.com/projects/nconf/commit/96859f9) [dist] Version bump. 0.1.5 (`indexzero`)
  * [d99ab32](https://github.com/projects/nconf/commit/d99ab32) [fix] Dont allow `async.forEach` to be called on undefined or null arrays (`indexzero`)

v0.1.4 / Tue, 5 Apr 2011
========================


v0.1.4 / Tue, 5 Apr 2011
========================
  * [7484fdb](https://github.com/projects/nconf/commit/7484fdb) [dist] Version bump. 0.1.4 (`indexzero`)
  * [04a59e9](https://github.com/projects/nconf/commit/04a59e9) [fix] Supress errors from Redis (`indexzero`)

v0.1.3 / Tue, 5 Apr 2011
========================


v0.1.3 / Tue, 5 Apr 2011
========================
  * [9bd6e26](https://github.com/projects/nconf/commit/9bd6e26) [dist] Version bump. 0.1.3 (`indexzero`)
  * [4094125](https://github.com/projects/nconf/commit/4094125) [api] Add support for Redis auth and optional callbacks. (`indexzero`)

v0.1.2 / Sun, 3 Apr 2011
========================


v0.1.2 / Sun, 3 Apr 2011
========================
  * [81e1883](https://github.com/projects/nconf/commit/81e1883) [dist] Version bump. 0.1.2 (`indexzero`)
  * [b850ae2](https://github.com/projects/nconf/commit/b850ae2) [fix] Update path to require statement in Redis store (`indexzero`)

v0.1.1 / Sat, 2 Apr 2011
========================


v0.1.1 / Sat, 2 Apr 2011
========================
  * [6f16bc7](https://github.com/projects/nconf/commit/6f16bc7) [dist] Version bump. 0.1.1 (`indexzero`)
  * [752bb98](https://github.com/projects/nconf/commit/752bb98) [api] Improve the `.use()` method. Use the memory engine by default (`indexzero`)

v0.1.0 / Sat, 2 Apr 2011
========================