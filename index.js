const app=require("../Backend/src/app");




const PORT=3001;

app.listen(PORT,()=>{
    console.log(`Servidor escuchado en el puerto ${PORT}`)
})