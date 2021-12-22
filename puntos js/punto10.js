// // Reto #10 “Conversor de millas”

// // Instrucciones: hay 1.609344 km en una milla (mi).
// Escribe un programa en el que el usuario indique una cantidad de millas y
// muestre en pantalla el resultado convertido a kilómetros.

const millas = parseFloat(
  prompt("Escribí una cantidad de millas que deseas convertir a kilometros: ")
);
const kilometros = (millas * 1.609344) / 1;

alert(
  `resultado convertido a kilómetros : ${millas} es igual a : ${kilometros.toFixed(
    5
  )}  `
);
