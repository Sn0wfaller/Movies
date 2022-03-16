import axios from "axios";


export class DirectorDataProvider{



    static directorURL = "https://movies-super-lab.herokuapp.com/director";
    

    static getAllDirectorsShortInfo = () => 
        axios.get(this.directorURL)

    static getDirectorByID = (id) =>
        axios.get(this.directorURL + `/${id}`)

    static updateDirector = (newDirectorData, id) =>
        axios.put(this.directorURL + `/${id}`, newDirectorData)


    static putDirector = (newDirector) =>
        axios.post(this.directorURL, newDirector)

    static deleteDirector = (id) =>
        axios.delete(this.directorURL + `/${id}`)









    /*static findDirectorByIdPredicate = (directors, id) => directors.id === id;

    static getAllDirectorsShortInfo = () => 
      Promise.resolve(
        directors.map((director) => ({id: director.id, name: director.name}))
    );

    static getDirectorByID = (id) => new Promise((resolve, reject) =>{

        const result =  directors.find(director => 
            findDirectorByIdPredicate(director, id)
        );

        if (!result)
        {
            reject(`Режиссёр с id ${id} не найден`);
        }

        resolve(result);
    });

    static updateDirector = (newDirectorData) => {

        return new Promise((resolve, reject) => {
            const index = directors.findIndex((director) => 
              findDirectorByIdPredicate(director, newDirectorData.id)
            );

            if (index < 0)
            {
                reject(`Режиссёр с id ${newDirectorData.id} не найден`);
            }
            
            directors[index] = newDirectorData;
            resolve(index);
        });
    };

    static putDirector = (newDirector) => {
        
        newDirector.id = directors.length
        const newDirectorIndex = directors.push({
            id: directors.length,
            ...newDirector,
        });

        return Promise.resolve(newDirectorIndex);
    };

    static deleteDirector = (id) => {

        return new Promise((resolve, reject) => {
            const index = directors.findIndex((director) => 
              findDirectorByIdPredicate(director, id)
            );

            if (index < 0)
            {
                reject(`Режиссёр с id ${id} не найден`);
            }
            
            directors.splice(index, 1);
            resolve(directors.length);
        });
    };*/
}