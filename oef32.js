/**
 * Maak een functie greet die een naam aanneemt 
 * en een callback uitvoert die de naam gebruikt.
 */

const greet = (name, callback) => {
  const bericht = `Hallo, ${name}!`
  callback(bericht)
}

// Verwacht resultaat: "Hallo, Sam!"
greet("Ianis", bericht => console.log(bericht))