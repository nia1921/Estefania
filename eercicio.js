//crear un vector con los numeros del 1 al 20
// luego recorrelo,sumar solo los numeros pares y mostrar el resultado
//definir un vector numerico
let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
//definir una variable para guardar la suma
let resultado = 0;
// recorremosun lector y sumar los pares
for (let i = 0; i < num.length; i++) {
  // sumar solo los pares
  if (num[i] % 2 == 0) {
    resultado = resultado + num[i];
  }
}
console.log(resultado);
