const {Router}=require("express");
const mainCountries=require("./countries/mainCountries");
//const mainActivities=require("./activities/")
const mainRouter=Router();

mainRouter.use("/countries",mainCountries);
//mainRouter.use("/activiy",mainActivities);


module.exports=mainRouter;