const {Router}=require("express");
const userRouter=require("./Users/userRouter");
const mainRouter=Router();

mainRouter.use("/users",userRouter);

module.exports=mainRouter;