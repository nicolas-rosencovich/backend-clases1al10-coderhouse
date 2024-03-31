/* import fs from "fs"

let ruta = "./archivos/pruebaTexto.txt"

let texto = "Hola, como estás. Este es un texto creado con la librería del file system"

fs.writeFileSync(ruta,texto, (error) => {
  if(!error){
    let leeMensaje= rs.readFileSync(ruta)
    console.log("El mensaje enviado es " + leeMensaje)

  }else{
    console.log("ERROR al ejecutar")
  }
})

 */


//fs.writeFileSync() -  fs.existSync()  fs.readFileSync - fs.appendFileSync - fs.unlinkSync()
import fs from "fs";

const rutaArchivo = "./archivos/razasDePerro.txt"

const razasDePerros = [
  [{
      "name": "Poodle",
      "origin": "Germany",
      "year": "15th century",
      "size": "Medium"
    },
    {
      "name": "Labrador Retriever",
      "origin": "Canada",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "German Shepherd",
      "origin": "Germany",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "Bulldog",
      "origin": "England",
      "year": "13th century",
      "size": "Medium"
    },
    {
      "name": "Beagle",
      "origin": "England",
      "year": "19th century",
      "size": "Small to Medium"
    },
    {
      "name": "French Bulldog",
      "origin": "France",
      "year": "19th century",
      "size": "Small"
    },
    {
      "name": "Rottweiler",
      "origin": "Germany",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "Yorkshire Terrier",
      "origin": "England",
      "year": "19th century",
      "size": "Small"
    },
    {
      "name": "Boxer",
      "origin": "Germany",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "Dachshund",
      "origin": "Germany",
      "year": "15th century",
      "size": "Small to Medium"
    },
    {
      "name": "Golden Retriever",
      "origin": "Scotland",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "Siberian Husky",
      "origin": "Russia",
      "year": "19th century",
      "size": "Medium to Large"
    },
    {
      "name": "Chihuahua",
      "origin": "Mexico",
      "year": "19th century",
      "size": "Small"
    },
    {
      "name": "Doberman Pinscher",
      "origin": "Germany",
      "year": "19th century",
      "size": "Large"
    },
    {
      "name": "Great Dane",
      "origin": "Germany",
      "year": "16th century",
      "size": "Giant"
    },
    {
      "name": "Shih Tzu",
      "origin": "China",
      "year": "8th century",
      "size": "Small"
    },
    {
      "name": "Cavalier King Charles Spaniel",
      "origin": "England",
      "year": "16th century",
      "size": "Small to Medium"
    },
    {
      "name": "Pomeranian",
      "origin": "Germany",
      "year": "19th century",
      "size": "Small"
    },
    {
      "name": "Australian Shepherd",
      "origin": "United States",
      "year": "19th century",
      "size": "Medium to Large"
    }
  ]

]

fs.writeFileSync(rutaArchivo, JSON.stringify(razasDePerros, null, 5), (error) => {
  if (error) {
    console.log("Upss. Hubo un error");
  }
})


let leerArchivo= fs.readFileSync(rutaArchivo)

console.log(JSON.parse(leerArchivo))