const express=require("express")
const UserManager=require("../src/classes/UserMananger.js")

const PORT=3000
const app=express()

const userManager=new UserManager("./src/data/usuarios.json")

app.get("/usuarios", async(req, res)=>{

    let usuarios=await userManager.leerUsuarios()

    res.json(usuarios)

})


app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))