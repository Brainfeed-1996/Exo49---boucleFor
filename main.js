//La boucle for
const livres = 8;

for (let i = 0; i < livres; i++) {
  console.log("La Tour Sombre");
}

//La boucle for avec un tableau
const livresLaTourSombre = [
  "La Tour Sombre 1",
  "La Tour Sombre 2",
  "La Tour Sombre 3",
  "La Tour Sombre 4",
  "La Tour Sombre 5",
  "La Tour Sombre 6",
  "La Tour Sombre 7",
  "La Tour Sombre 8",
];

function boucleFor() {
  for (let i = 0; i < livresLaTourSombre.length; i++) {
    console.log(`Le livre ${livresLaTourSombre[i]}`);
  }
}

boucleFor();
