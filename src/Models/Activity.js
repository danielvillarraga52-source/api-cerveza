const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Activity",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING
        },
        dificulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
        },
        duration:{
            type: DataTypes.STRING,
        },
        season:{
            type: DataTypes.ENUM('Summer', 'Autumn', 'winter', 'spring'),
        }
    })
});