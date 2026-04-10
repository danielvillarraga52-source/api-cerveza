const {Country}=require("../../db.");
const loadCountriesApi=require("../../utils/json");
const {Op,fn,col}=require("sequelize");

const controllerDataBase = async () => {
    
    await loadCountriesApi(); 
    
    const allCountries = await Country.findAll({attributes:["name","flag","continent"],order:[["name","ASC"]]});
    return allCountries;
};
const controllerOneCountry = async({id})=>{
     const oneCountry=await Country.findByPk(id);
    if(!oneCountry) throw Error("No existe este País...");
    return oneCountry;
}
const controllerByName=async({name})=>{
    const cleanName = name.trim();
    const countries = await Country.findAll({
    where: {
        name: {
            [Op.iLike]: `%${cleanName}%` 
        }
    },
    order:[[
        "name","ASC"
    ]]
});
if (countries.length === 0) throw Error(`No se encontraron países con el nombre: ${name}`);
return countries;


}


module.exports={
    controllerDataBase,
    controllerOneCountry,
    controllerByName
}