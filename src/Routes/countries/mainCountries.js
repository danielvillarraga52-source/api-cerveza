const {Router}=require("express");

const {getAllHandlerCountries,getHandlerCountry}=require("./handlerCountry")
const mainCountries=Router();

mainCountries.get("/",getAllHandlerCountries);
mainCountries.get("/:id",getHandlerCountry);

module.exports=mainCountries;