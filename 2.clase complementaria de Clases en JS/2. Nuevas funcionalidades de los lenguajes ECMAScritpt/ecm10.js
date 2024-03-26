//.trim()
//Lo que hace el .trim() es eliminar espacios en cadenas string

const saludo = "            Hola como estás                      ";

const quitarEspacios = saludo.trim();

console.log(quitarEspacios)

//flat()

const miArray = [1,2,3,4,[10,20,30], 5, 6]

console.log(miArray.flat())
