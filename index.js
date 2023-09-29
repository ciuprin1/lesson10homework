let ziua = "luni";

switch (ziua.toLowerCase()) {
  case "luni":
    console.log("Astazi este luni!");
    break;
  case "marti":
    console.log("Astazi este marti!");
    break;
  case "miercuri":
    console.log("Astazi este miercuri!");
    break;
  case "joi":
    console.log("Astazi este joi!");
    break;
  case "vineri":
    console.log("Astazi este vineri!");
    break;
  case "sambata":
    console.log("Astazi este sambata!");
    break;
  case "duminica":
    console.log("Astazi este duminica!");
    break;
  default:
    console.log("Ziua introdusa nu este valida!");
}

let str = "Hello, World!";
let lungimeaStr =
  str.length > 10
    ? "lungimea str este mai mare de 10"
    : "lungimea str este mai mica de 10";
console.log(lungimeaStr);

let text = "example";
text = text.toUpperCase();
console.log(text);
text = text.toLowerCase();
console.log(text);

let stringCuvinte = "Acesta este un exemplu de string";
let cuvant3Metoda1 = stringCuvinte.split(" ")[5];
console.log(cuvant3Metoda1);

let cuvant3Metoda2 = stringCuvinte.match(/\S+/g)[1];
console.log(cuvant3Metoda2);

const str1 = "citeva cuvinte la rand pentru a alege doar unu";

const fIndex = str1.indexOf("la");
const lIndex = str1.indexOf("rand");

console.log(str1.slice(fIndex, lIndex - 1));
console.log(str1.substring(fIndex, lIndex - 1));
