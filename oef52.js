/**
 * Maak een functie totaal die een array als eerst parameter heeft 
 * en een callback als tweede paramater.
 * Als resultaat telt hij alle nummer op van de array 
 */

let telOp = (lijst, callback) => {
  let som = 0
  for(let i = 0; i < lijst.length; i++) {
    som += lijst[i]
  }
  callback(som)
}

// Verwacht resultaat: 35
telOp([5,8,10,2,3,7], resultaat => console.log(resultaat))