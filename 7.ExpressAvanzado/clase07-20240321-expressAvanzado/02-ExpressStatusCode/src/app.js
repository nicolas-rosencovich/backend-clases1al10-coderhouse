import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());//Y con esta podemos acceder a esa infomación...
app.use(express.urlencoded({extended:true}));//Cuando queramos recibir info compleja desde el front, ya que podemos recibir archivos en formato que no solo sea texto.Con esta expresión lo vamos a pdoer interpretar desde express

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



app.get("/acceso",(req,res)=>{
    let usuario=req.query.usuario
    let password=req.query.password

    if(!usuario || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete usuario y password`})
    }

    if(usuario!=="admin" || password!=="CoderCoder"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales invalidas`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Accedo concedido...!!!"});

})



app.get('*',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(404).json({
        message:"error 404 - page not found"
    });
});

//Le asignamos una variable al listen 
//y ahora podremos ejecturar varias funciones con su variabl. Será más facil interactuar, aunque en general no lo vamos a utilizar
const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


  


