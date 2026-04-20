// ── Tests unitaires ───────────────────────────────────────
// GitHub Actions les exécutera à chaque push

const { add, subtract, multiply } = require('./app');

// Test : addition
test('add(2, 3) doit retourner 5', () => {
  expect(add(2, 3)).toBe(5);
});

// Test : soustraction
test('subtract(10, 4) doit retourner 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

// Test : multiplication
test('multiply(3, 4) doit retourner 12', () => {
  expect(multiply(3, 4)).toBe(12);
});