/**
 * Schrijf een functie processArray die een array en een callback-functie accepteert. 
 * De callback moet op elk element van de array worden toegepast.
 */

const processArray = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i])
  }
  return result;
}

// Verwacht resultaat: [2, 4, 6, 8, 10]
console.log(processArray([1, 2, 3, 4, 5], (num) => num * 2));