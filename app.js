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

// Nouvelle fonction ajoutée en v2
function divide(a, b) {
  if (b === 0) throw new Error('Division par zéro interdite');
  return a / b;
}

// Exporte les fonctions pour les tests
module.exports = { add, subtract, multiply, divide };
