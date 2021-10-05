// Ejercicio 1
/*
let nombreTransformado = function(params) {
    

    let nombre, apellidoP, apellidoM
    nombre = prompt(`Por favor teclé su primer nombre`);
    apellidoP = prompt(`Por favor teclé su apellido paterno`);
    apellidoM = prompt(`Por favor teclé su apellido materno`);
    nombreEnMin = nombre.toLowerCase()
    apellidoPMayus = apellidoP.toUpperCase()
    apellidoMMayus = apellidoM.toUpperCase()
   
    return  `${nombreEnMin} ${apellidoPMayus} ${apellidoMMayus}`
}

console.log(nombreTransformado())
*/

/*
 // Ejercicio 2
  
 const resultado = function () {
     nombre = prompt(`Teclé su nombre completo sin espacios, por favor.`);
    return ` ${nombre} tiene ${nombre.length} caracteres`
 }
 console.log (resultado());
 */

 // Ejercicio 3
 /*
const numeroDeVocales = function(){
     let nombre= prompt("Por favor escribe tu nombre completo");
        let arregloDeNombre = nombre.toLowerCase().split("");
        const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "o", "ú", "ä", "ë", "ï", "ö", "ü"];
        let contador = 0;
        arregloDeNombre.forEach((element)=>{
             let busquedaVocales = vocales.indexOf(element);
             if(busquedaVocales != -1){
                 contador++;
             }
        }
        )
         return contador
     }
     console.log(numeroDeVocales())

*/

/*
//Ejercicio 4

let resultado = function(){ 
    let texto = `Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
al estudiante que tiene a su lado`;
    let arregloDeTexto = texto.toLowerCase().split(" ")
    const estudiante = `estudiante`
    let contador = 0;
    arregloDeTexto.forEach(element => {
        let busquedaEstudiante = estudiante.indexOf(element);
        if( busquedaEstudiante != -1 ){
            contador++ ;
        }
    }
    )
    return ` aparece ${contador -1} veces, se remplazará estudiante por koder: ${texto.replace(/estudiante/g, `koder`)} `
    }
    console.log(resultado())
    */

// Ejercicio 5

let result = function () {
let firstWord = prompt(`Por favor inserte  sólo una palabra`)
let secondWord = prompt(`Por favor inserte otra palabra`)
let firstWordN = firstWord.length
let secondWordN = secondWord.length
if (firstWordN > secondWordN ) {
    console.log(firstWord)
} else if (secondWordN > firstWordN) {
    console.log(secondWord)
}
else if (firstWord == secondWord) {
    console.log('ambas palabras tienen el mismo numero de caracteres.')
}else {
    console.log('Error')
}
}
console.log(result())