
function createKoder() {
    const cantidad = prompt(`Ingresa una cantidad de koders a crear`)
    let koders = []

for (let index = 1; index <= cantidad; index++) {
    const nombreCompleto = prompt(`ingresa el nombre completo del koder, primer nombre y apellido`)
    const nombreSeparado = nombreCompleto.split(` `)
    const nombre = nombreSeparado[0]
    const apellido =nombreSeparado[1]
    const resultado = {
        id: index,
        nombre: nombre,
        apellido: apellido,
        iniciales:` (${nombre.charAt(0).toUpperCase()}.${apellido.charAt(0).toUpperCase()})`,
     }
    koders.push(resultado)
}
console.log(koders)
}
createKoder()
