package com.infinity.movies.service;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.entity.Movies;
import com.infinity.movies.model.MoviesModel;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface MoviesService {

    Movies getMoviesById(Long id);

    Iterable<Movies> getMovies();

    Movies addMovies(MoviesModel moviesModel);

    Movies updateMovies(Long id, MoviesModel moviesModel);

    void deleteById(Long id);
}
