// Reto #11 “Cuantas veces un número en otro”

// Instrucciones:
// pide al usuario ingresar un número mayor a 1000 y otro menor a 100.
// Indica de una forma sencilla de entender al usuario cuantas veces cabe el número menor a 100 en el número mayor a 1000

valor1 = prompt("Inserta un valor mayor a 1000");
valor1 = parseInt(valor1);
var valor2 = prompt("inserta un valor menor a 100");
valor2 = parseInt(valor2);
var total;

while (valor1 < 1000 && valor2 > 100) {
  if (valor1 < 1000) {
    valor1 = prompt("Inserta un valor mayor a 1000");
  }
  elseif(valor2 > 100);
  {
    valor2 = prompt("inserta un valor menor a 100");
  }
}

total = valor1 / valor2;
total = total.toFixed();

alert(valor1 + " cabe " + total + " de veces en " + valor2);
