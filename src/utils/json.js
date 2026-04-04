const axios = require('axios');
const { Country } = require('../db.'); // Importa tu modelo desde donde lo tengas definido

const loadCountriesApi = async () => {
    try {
        
        const apiResponse = await axios.get('https://restcountries.com/v3.1/all?fields=cca3,name,flags,region,capital,subregion,area,population');
        
        const countriesData = apiResponse.data;

       
        const countriesToSave = countriesData.map(country => {
            return {
               
                id: country.cca3,
                name: country.name.common || "Unknown", 
        flag: country.flags.png || country.flags.svg || "No Flag",
        continent: country.region || "Unknown",
        
        capital: country.capital ? country.capital : ["No Capital"], 
        subregion: country.subregion || "No Subregion",
        area: country.area ? Math.round(country.area) : 0,
        poblation: country.population || 0
            };
        });

       
        await Country.bulkCreate(countriesToSave, { ignoreDuplicates: true });
        console.log(countriesToSave)
        console.log('Datos cargados exitosamente');
    } catch (error) {
        console.error('Error cargando los datos:', error.message);
    }
};



module.exports=loadCountriesApi;