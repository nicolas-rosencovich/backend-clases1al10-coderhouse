const productos = [
    {
    manzanas:3, 
    peras: 2, 
    carne: 1, 
    jugos: 5, 
    dulces:2
},

{
    manzanas:1, 
    sandias:1,
    huevos:6,
    jugos:1,
    panes:4

}]

//Con esto voy a hacer un arrray con todos los tipos d datos key

const tipos = []
//Con esto sacamos de cada producto su relativa Key
productos.forEach((value) => {
  
    const typeProduct = Object.keys(value);
    console.log(typeProduct)
})

productos.forEach((value) => {
  
    const cantidadProduct = Object.values(value);
    console.log(cantidadProduct)
})


