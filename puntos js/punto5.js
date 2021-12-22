// Reto #5 “Suma y multiplicación”

//  Instrucciones: añadiendo un extra al reto anterior ahora
// el usuario ingresará 3 números, sumarás los 2 primeros
//  y el resultado será multiplicado por el tercero.
//  Añade las consideraciones del punto decimal del reto anterior.

const num1 = parseFloat(prompt("ingrese un numero suma"));
const num2 = parseFloat(prompt("ingrese un numero suma"));
const num3 = parseFloat(prompt("ingrese un numero para multiplicar"));

alert(`el resultado es :  ${((num1 + num2) * num3).toFixed}`);
