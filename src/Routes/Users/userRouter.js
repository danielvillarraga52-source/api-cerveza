const {Router}=require("express");
const {getAllUsers,postUsers,putUser,deleteUsers,getUser}=require("./userHandler")

const userRouter=Router();

userRouter.get("/",getAllUsers);
userRouter.post("/postUser",postUsers);
userRouter.put("/updateUser",putUser);
userRouter.delete("/deleteUser",deleteUsers);
userRouter.get("/:id",getUser);

module.exports=userRouter;