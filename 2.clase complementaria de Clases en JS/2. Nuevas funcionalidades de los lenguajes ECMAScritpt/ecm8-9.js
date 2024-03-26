//Async - Await

//Objet.entries(), objet.value(), objet.keys() EN MAYUSCULA XD 

const miArray ={
    nombre: "nicolas",
    apellido: "Rosencovich",
    edad: 19,
    nacionalidad: "Argentina",
}

const segundoObjeto = {
estacion: "Verano", 
clima: "Soleado",
temperatura : "30°",
nacionalidad: "Hong kong",

}
/* 
console.log(Object.entries(nombres))
Lo que devuelvió
[
    [ 'nombre', 'nicolas' ],
    [ 'apellido', 'Rosencovich' ],
    [ 'edad', 19 ],
    [ 'nacionalidad', 'Argentina' ]
  ]
   */
/* 


  console.log(Object.values(nombres))
Lo que devolvió
  [ 'nicolas', 'Rosencovich', 19, 'Argentina' ] */

/* 

  console.log( Object.keys( nombres))
  Lo que devolvió 
  [ 'nombre', 'apellido', 'edad', 'nacionalidad' ] */

  //ESC9 

  // Desestructuración - Spread

/*   let {nombre} = miArray;

  let {apellido, edad, nacionalidad } = miArray


  console.log( nombre)


console.log(apellido, edad, nacionalidad)

  //nos devuelve  
  //primer console
  nicolas

  //segundo
  nicolas
Rosencovich 19 Argentina */

//Spread

const pruebaSpread =  {  ...miArray, ...segundoObjeto}
/* 
console.log( pruebaSpread) */

//Lo que devuelve será esto pero mucho ojo pq si repetimos alguna key solo dará el valor de la segunda key

//rest 

//Lo que hacemos acá es que basicamente la prop de temperatura la scamos y dejamos todas las otras 
const {temperatura, ...demasProps} = segundoObjeto ;

console.log(demasProps)