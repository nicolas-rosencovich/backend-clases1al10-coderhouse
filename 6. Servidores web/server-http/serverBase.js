//Acá estamos trayendo el módulo http   (Lo hacemos igual que fs)
//Basicamente le estamos diciendo a Node que traiga esta libreria
const http = require("http")

//Configuración de puerto.
//Es una dirección de memoria a donde va a estar escuchando mi servidor  
const PORT = 3000

//Cuando llegue una peticion e¿jecutaré este callback
const server = http.createServer((req, res ) => {
    //la url
   console.log(req.url)
//Si bien es una función dentro de todo simple la que está haciedno es mejor usar express.
//Si queremos hacerlo con muchas cosas terminaría siendo súper engorropso y repetitivo
   if(req.url=="/perros"){

    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})

    res.end("Esta es la página de perros ")
    return 
   }

    //información para la cabecera(una parte de la estructura)
    //Este 200 quiere decir que la operación salió bien
    //Básicamente estamos diciendo que lo queremos en html y que el tipo de caracteres sea el utf-8 (el que usamos)
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})

    //Enviamos un dato
    res.end("Server básico con módulo http de node-prueba nodemon")
})

//levantamos el servidor y lo ponemos a escuhcar
//La funcion server.listen es como un addEventlistener, tiene 2 argumentos, el puerto y la funcion de callback 
server.listen(PORT, () => {
   console.log(`Server online en puerto ${PORT}`)
})

/* app.get = para enviar datos al cliente

app.post = carga de datos del usuario

app.put = actualizacion

app.dellete = eliminacion */