// Reto #9 “Calculando días”

// Instrucciones: escribe un programa al que le indiques una cantidad de días y
// como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha cantidad de días.

const dias = parseInt(prompt("cantidad de dias", ""));
const horas = (dias * 24) / 1;
const minutos = (horas * 60) / 1;
const segundos = (minutos * 3600) / 60;

alert(`resultado : ${dias} DIAS ${horas} HORAS ${segundos} SEGUNDOS`);
