const {Sequelize}=require("sequelize");
const countryModel=require("./Models/Country");
const activityModel=require("./Models/Activity");




require("dotenv").config();
const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME}=process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{logging:false});
countryModel(sequelize);
activityModel(sequelize);



const {Country,Activity}=sequelize.models;

Country.belongsToMany(Activity, { through: 'ActivityCountry' });
Activity.belongsToMany(Country, { through: 'ActivityCountry' });

module.exports={
    ...sequelize.models,
    conn:sequelize
}

