// ── Application principale ────────────────────────────────
// Analogie : une calculatrice minimaliste qu'on va tester

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Exporte les fonctions pour les tests
module.exports = { add, subtract, multiply };