let din = Number(prompt("Por favor digite una cantidad en pesos mexicanos"))
let dincon
let pais
if (din >= 0) {
pais = String(prompt('A continuacion convertiremos su cantidad de dinero a la moneda local de algún país al que quiera viajar, las opciones son: España, Inglaterra, China y Turquía. Por favor digite en minúscula la inicial del país que le interese.'))
switch (pais) {
    case 'e':
        dincon = din / 23.71 
        console.log(`Su cantidad equivale a`, dincon, 'euros.'  )
        break;
    case 'i':
        
        dincon = din / 27.7 
        console.log(`Su cantidad equivale a`, dincon, 'libras esterlinas.'  )
        break;
    case 'c':
        dincon = din / 3 
        console.log(`Su cantidad equivale a`, dincon, 'yuanes.'  )
        break;
    case 't':
        dincon = din / 2.31
        console.log(`Su cantidad equivale a`, dincon, 'liras turcas.'  )
        break;    
    default:
        console.log('Error, digite un caracter válido.')
        break;
} 
} else {
    console.log('Error, inténtelo de nuevo con un valor o caracter valido.')
    
}