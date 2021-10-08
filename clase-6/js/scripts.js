
function invertidor () {
    let palabra = prompt(`Por favor escriba una plabra.`).split(``);
    let arrayPalabraVolteada = palabra.reverse();
    let palabraVolteada = arrayPalabraVolteada.join(``).toString()
    console.log(palabraVolteada)
}
 invertidor()


