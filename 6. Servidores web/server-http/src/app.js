const express = require("express")

const PORT = 3000

const app = express()

app.get("/", (req,res ) => {
  res.send("Server con express básico")
  //Nos lo responderá bien sin tener que hacer esto      res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})

})

//página de contacto 
app.get("/contacto", (req,res ) => {

    res.send("contacto page ")
  
  })
  

app.listen(PORT, () => {
  console.log(`Server online en puerto ${PORT}`)
})
