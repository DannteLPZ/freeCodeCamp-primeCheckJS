const assert = require("node:assert/strict");
const primeCheck = require("./index");

assert.strictEqual(
  primeCheck.isPrime(6),
  false,
);

assert.strictEqual(
  primeCheck.isPrime(7),
  true,
);

