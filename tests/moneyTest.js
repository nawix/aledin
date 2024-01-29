import { formatValuta } from "../scripts/utils/money.js";

console.log("test suite: formatValuta");
console.log("basic");
if (formatValuta(2095) === "20.95") {
  console.log("oki");
} else {
  console.log("zajebosi");
}

console.log("nula");
if (formatValuta(0) === "0.00") {
  console.log("oki");
} else {
  console.log("zajebosi");
}

console.log("zaokruzivanje");
if (formatValuta(2000.4) === "20.00") {
  console.log("oki");
} else {
  console.log("zajebosi");
}
