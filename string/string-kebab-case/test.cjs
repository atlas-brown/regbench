var test = require('tape-catch');
var kebabCase = require('./');

test('string with spaces', function(t) {
  t.plan(2);
  t.equal(kebabCase('the quick brown fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the quick     brownfox'), 'the-quick-brownfox');
  t.end();
});

test('string with punctuation', function(t) {
  t.plan(4);
  t.equal(kebabCase('the_quick_brown_fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the_quick_brown_fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the*quick-brown_fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the****quick-_-brown_:fox'), 'the-quick-brown-fox');
  t.end();
});

test('string with mixed spaces and punctuation', function(t) {
  t.plan(2);
  t.equal(kebabCase('the_quick_brown_   fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the** **quick-_-brown_:fox'), 'the-quick-brown-fox');
  t.end();
});

test('string with leading or trailing punctuation', function(t) {
  t.plan(2);
  t.equal(kebabCase('*Rank Ordinal*'), 'rank-ordinal');
  t.equal(kebabCase('Rank (Ordinal)'), 'rank-ordinal');
  t.end();
});

test('string with capitalization', function(t) {
  t.plan(8);
  t.equal(kebabCase('theQuickBrownFox'), 'the-quick-brown-fox');
  t.equal(kebabCase('the QuickBrown Fox'), 'the-quick-brown-fox');
  t.equal(kebabCase('The quick brown FOX'), 'the-quick-brown-fox');
  t.equal(kebabCase('MapGLBeta'), 'map-gl-beta');
  t.equal(kebabCase('MapGL-_-Beta'), 'map-gl-beta');
  t.equal(kebabCase('MapGL-_-beta'), 'map-gl-beta');
  t.equal(kebabCase('ABCHaček Kroužek'), 'abc-haček-kroužek');
  t.equal(kebabCase('Bonjour XYZÉtienne-Louis Boullée'), 'bonjour-xyz-étienne-louis-boullée');
  t.end();
});
