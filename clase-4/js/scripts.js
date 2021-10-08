/* 
 
 // Ejercicio 1
 const tabla = function(){
    let numero = Number(prompt("digite un numero porfavor"));
    let resultado = 0;
    for(let i = 1; i<=10; i++){
         resultado = i*numero;
         console.log(`${numero} X ${i} = ${resultado}`);
     }
}
console.log(tabla());
*/

/*
// Ejercicio 2

 function Ejercicio2 (numero){
do {
     numero = Number(prompt("por favor digite un número entre el 10 y el 100"))
 } while (numero < 10 || numero > 100 || isNaN(numero));
  for (let index = 1; index <= numero; index++) {
if (index % 2 == 0) {
    console.log(index)
}
  }
 }
 console.log(Ejercicio2())
*/
/*
// Ejercicio 3

let sumadorDeDigitos = function (numero) {
    do {
        numero = prompt('porfavor digite un numero para sumar sus digitos entre si')
    } while (numero < 0 ||  isNaN(numero));
    
    let cadena = numero.match(/[1234567890]/g);

    console.log(cadena)

    let suma = 0;

    for(let index = 0; index < cadena.length; index++) {
    suma = suma + Number(cadena[index]);    
    }
    return `El resultado de la suma es de: ${suma}`
}
console.log(sumadorDeDigitos())

*/

function multiply(a, b){
    a = 1
    b = 2
      return a * b
     
   }
   console.log(multiply())
   for (let index = 0; index < array.length; index++) {
       const element = array[index];
       
   }

