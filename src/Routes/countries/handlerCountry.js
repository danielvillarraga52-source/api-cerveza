const {controllerDataBase,controllerOneCountry,controllerByName}=require("./controllerCountry")
const getAllHandlerCountries=async(req,res)=>{
    const {name}=req.query;
    try {
        if(name){
            const byName=await controllerByName({name})
            res.status(200).json(byName)
        }else{

            const prueba=await controllerDataBase();
            res.status(200).json(prueba)
        }
        
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};
const getHandlerCountry=async(req,res)=>{
    const {id}=req.params;
   
        try {
            const oneCountry= await controllerOneCountry({id});
            res.status(200).json(oneCountry);
        } catch (error) {
            res.status(400).json({error:error.message});
        }
};
const postHandlerCountries=(req,res)=>{
    res.send("soy ruta post");
}
const putHandlerCountries=(req,res)=>{
    res.send("update countries")
};
const deleteHandlerCountries=(req,res)=>{
    res.send("delete countries")
};



module.exports={
    getAllHandlerCountries,
    getHandlerCountry,
    putHandlerCountries,
    deleteHandlerCountries,
    postHandlerCountries

}
