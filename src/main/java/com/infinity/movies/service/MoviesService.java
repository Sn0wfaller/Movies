package com.infinity.movies.service;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Movies;
import com.infinity.movies.model.MoviesModel;
import org.springframework.data.domain.Page;

public interface MoviesService {

    Movies getMoviesById(Long id);

    Page<Movies> getMovies(PageDto pageDto);

    Movies addMovies(MoviesModel moviesModel);

    Movies updateMovies(Long id, MoviesModel moviesModel);

    void deleteById(Long id);
}
