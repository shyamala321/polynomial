const input = {
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
};

const k = input.keys.k;

let roots = [];
for (let key in input) {
  if (key === "keys") continue;
  const base = parseInt(input[key].base);
  const value = input[key].value;
  try {
    const root = BigInt(parseInt(value, base));
    roots.push(root);
  } catch (e) {
    console.error(`Error parsing key ${key}:`, e.message);
  }
}
const selectedRoots = roots.slice(0, k);

let constantTerm = 1n;
for (let root of selectedRoots) {
  constantTerm *= -root;
}
console.log("Constant Term (C value) of Polynomial:");
console.log(constantTerm.toString());