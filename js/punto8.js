// Reto #8 “Divide la cuenta”

// Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta.
// Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas
// personas se dvidirá la cuenta, porcentaje de propina a incluir,
// un porcentaje de impuestos, total a pagar incluyendo propina más impuestos
// y el total a pagar por cada persona.

const total = parseInt(prompt("total a pagar", ""));
const dividir = parseInt(prompt("entre cuantas personas se dividirá", ""));
const propina = parseInt(prompt("porcentaje de propina", ""));
const impuestos = parseInt(prompt("porcentaje de impuestos", ""));
const totalProp = (total * propina) / 100;
const totalImp = (total * impuestos) / 100;

alert(
  `el total a pagar incluyendo propina más impuestos es: ${
    total + totalProp + totalImp
  } y cada uno pagará :   ${(total + totalProp + totalImp) / dividir}`
);
