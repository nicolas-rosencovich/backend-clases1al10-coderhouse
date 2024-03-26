//map()---------------------------

//Hacemos un Array en el cual ponemos diversos números
 const miArray= [1,2,3,4,8, 10, 20 ]

//Con map agarramos cada valo del array y en este caso lo que hacemos es hacerlo que se sume por si mismo
/* const numerosDobles = miArray.map((value)=>{
    return value + value
})

console.log(numerosDobles)

 */
 


//push()------------------------------

//Lo que hace esta propiedad es tirar o agregar al último
/* 
miArray.push("Hola, me agregué con el push")
console.log(miArray)
 */


//find()--------------------------------
//Lo que hace esta propiedad es buscar un valor que determinemos

const buscar = miArray.find((value) => {
   
    if(value == 8)
  return value;
  
})

console.log(buscar)
