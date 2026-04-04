const {Router}=require("express");

const {getAllHandlerCountries,
    getHandlerCountry,
    putHandlerCountries,
    deleteHandlerCountries,
    postHandlerCountries}=require("./handlerCountry")
const mainCountries=Router();

mainCountries.get("/",getAllHandlerCountries);
mainCountries.get("/:id",getHandlerCountry);
mainCountries.post("/postCountry",postHandlerCountries);
mainCountries.put("/updateCountry/:id",putHandlerCountries);
mainCountries.delete("/delete/:id",deleteHandlerCountries);
module.exports=mainCountries;