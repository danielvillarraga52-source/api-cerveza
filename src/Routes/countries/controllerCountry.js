const {Country}=require("../../db.")
const loadCountriesApi=require("../../utils/json")

const controllerDataBase = async () => {
    
    await loadCountriesApi(); 
    const allCountries = await Country.findAll();
    return allCountries;
};
const controllerByName=async({name})=>{
    return await Country.findAll({where:{name:name}})


}
const controllerOneCountry = async({id})=>{
     console.log(id)
    return await Country.findByPk(id)
}

module.exports={
    controllerDataBase,
    controllerOneCountry,
    controllerByName
}