/**
 * Schrijf een functie: doeIets, die een string als eerste argument accepteert en
 * een callback-functie als tweede argument. De callback functie moet de string 
 * als hoofdletters teruggeven. 
 * 
 * ( string omzetten naar hoofdletters: string.toUpperCase() )
 */

function doIets(text, callback) {
  const hoofdText = text.toUpperCase();
  callback(hoofdText);
}

// Verwacht resultaat: "HALLO WERELD"
doIets("Hallo wereld", function (resultaat) {
  console.log(resultaat);
});