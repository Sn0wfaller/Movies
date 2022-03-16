import axios from "axios";

export class MovieDataProvider{



    static movieURL = "https://movies-super-lab.herokuapp.com/movie";
    

    static getAllMoviesShortInfo = () => 
        axios.get(this.movieURL)

    static getMovieByID = (id) =>
        axios.get(this.movieURL + `/${id}`)

    static updateMovie = (newMovieData, id) =>
        axios.put(this.movieURL + `/${id}`, newMovieData)


    static putMovie = (newMovie) =>
        axios.post(this.movieURL, newMovie)

    static deleteMovie = (id) =>
        axios.delete(this.movieURL + `/${id}`)





    /*static findMovieByIdPredicate = (movie, id) => movie.id === id;

    static getAllMoviesShortInfo = () => 
      Promise.resolve(
        movies.map((movie) => ({id: movie.id, title: movie.title}))
    );

    static getMovieByID = (id) => new Promise((resolve, reject) =>{

        const result = movies.find(movie => 
            findMovieByIdPredicate(movie, id)
        );

        if (!result)
        {
            reject(`Фильм с id ${id} не найден`);
        }

        resolve(result);
    });

    static updateMovie = (newMovieData) => {

        return new Promise((resolve, reject) => {
            const index = movies.findIndex((movie) => 
              findMovieByIdPredicate(movie, newMovieData.id)
            );

            if (index < 0)
            {
                reject(`Фильма с id ${newMovieData.id} не найдено`);
            }
            
            movies[index] = newMovieData;
            resolve(index);
        });
    };

    static putMovie = (newMovie) => {
        console.log(movies.length);
        for (let i = 0; i < movies.length; i++)
        {
            let check = false;
            for (let j = 0; j < movies.length && !check ; j++)
            {
                if (movies[j].id !== i)
                {
                    check = true;
                }
            }
            newMovie.id = i;
        }
        const newMovieIndex = movies.push({
            id: movies.length,
            ...newMovie,
        });

        return Promise.resolve(newMovieIndex);
    };

    static deleteMovie = (id) => {

        return new Promise((resolve, reject) => {
            const index = movies.findIndex((movie) => 
              findMovieByIdPredicate(movie, id)
            );

            if (index < 0)
            {
                reject(`Фильма с id ${id} не найдено`);
            }
            
            movies.splice(index, 1);
            resolve(movies.length);
        });
    };*/
}