import axios from "axios";

export class CountryDataProvider{

    static countryURL = "https://movies-super-lab.herokuapp.com/country";
    

    static getAllCountriesShortInfo = () => 
        axios.get(this.countryURL)

    static getCountryByID = (id) =>
        axios.get(this.countryURL + `/${id}`)

    static updateCountry = (newCountryData, id) =>
        axios.put(this.countryURL + `/${id}`, newCountryData)

    static putCountry = (newCountry) =>
        axios.post(this.countryURL, newCountry)

    static deleteCountry = (id) =>
        axios.delete(this.countryURL + `/${id}`)



    /*static findCountryByIdPredicate = (countries, id) => countries.id === id;

    static getAllCountriesShortInfo = () => 
      Promise.resolve(
        countries.map((country) => ({id: country.id, title: country.title}))
    );

    static getCountryByID = (id) => new Promise((resolve, reject) =>{

        const result =  countries.find(country => 
            findCountryByIdPredicate(country, id)
        );

        if (!result)
        {
            reject(`Страна с id ${id} не найдена`);
        }

        resolve(result);
    });

    static updateCountry = (newCountryData) => {

        return new Promise((resolve, reject) => {
            const index = countries.findIndex((country) => 
              findCountryByIdPredicate(country, newCountryData.id)
            );

            if (index < 0)
            {
                reject(`Страны с id ${newCountryData.id} не найдено`);
            }
            
            countries[index] = newCountryData;
            resolve(index);
        });
    };

    static putCountry = (newCountry) => {
        
        newCountry.id = countries.length
        const newCountryIndex = countries.push({
            id:countries.length,
            ...newCountry,
        });

        return Promise.resolve(newCountryIndex);
    };

    static deleteCountry = (id) => {

        return new Promise((resolve, reject) => {
            const index = countries.findIndex((country) => 
              findCountryByIdPredicate(country, id)
            );

            if (index < 0)
            {
                reject(`Страны с id ${id} не найдено`);
            }
            
            countries.splice(index, 1);
            resolve(countries.length);
        });
    };*/
}