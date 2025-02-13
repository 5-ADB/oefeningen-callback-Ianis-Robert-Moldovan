/**
 * Maak een functie doubleNumber die een getal verdubbelt 
 * met behulp van een callback.
 */

const doubleNumber = (num, callback) => {
  const doubled = num * 2;
  callback(doubled)
}

// Verwacht resultaat: 10
doubleNumber(5, resultaat => console.log(resultaat))