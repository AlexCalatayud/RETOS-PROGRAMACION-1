const nombre = prompt("ingrese su nombre", "");
const edad = parseInt(prompt("ingrese su edad", ""));
const unAño = 1;

alert(
  ` ${
    nombre +
    " el año pasado tenias " +
    (parseInt(edad) - unAño) +
    " años" +
    " y el proximo año cumplirás " +
    (parseInt(edad) + unAño) +
    " años"
  }`
);
