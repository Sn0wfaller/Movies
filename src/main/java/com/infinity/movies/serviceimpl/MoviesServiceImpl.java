package com.infinity.movies.serviceimpl;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.*;
import com.infinity.movies.exception.ResourceAlreadyExistsException;
import com.infinity.movies.exception.ResourceNotFoundException;
import com.infinity.movies.model.MoviesModel;
import com.infinity.movies.repository.CountryRepository;
import com.infinity.movies.repository.DirectorRepository;
import com.infinity.movies.repository.MoviesRepository;
import com.infinity.movies.service.MoviesService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MoviesServiceImpl implements MoviesService {


    private final MoviesRepository moviesRepository;
    private final CountryRepository countryRepository;
    private final DirectorRepository directorRepository;


    @Override
    public Movies getMoviesById(Long id) {
        return moviesRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The movie with id=" + id + " does not exist."));
    }

    @Override
    public Iterable<Movies> getMovies() {
        return moviesRepository.findAll();
    }

    @Override
    public Movies addMovies(MoviesModel moviesModel) {
        Country country = countryRepository
                .findById(moviesModel.getCountryId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The country with id=" + moviesModel.getCountryId() + " does not exist."));

        Director director = directorRepository
                .findById(moviesModel.getDirectorId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The director with id=" + moviesModel.getDirectorId() + " does not exist."));

        if (moviesRepository.existsByTitle(moviesModel.getTitle()))
        {
            throw new ResourceAlreadyExistsException("The movies with such name already exists.");
        }
        Movies movies = new Movies(moviesModel.getTitle(), moviesModel.getRelease(), country, director);
        moviesRepository.save(movies);
        return movies;
    }

    @Override
    public Movies updateMovies(Long id, MoviesModel moviesModel) {
        Country country = countryRepository
                .findById(moviesModel.getCountryId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The country with id=" + moviesModel.getCountryId() + " does not exist."));

        Director director = directorRepository
                .findById(moviesModel.getDirectorId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The director with id=" + moviesModel.getDirectorId() + " does not exist."));
        Movies movies = moviesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The movie with id = "+id+"does not exist."));
        movies.setCountry(country);
        movies.setDirector(director);
        movies.setRelease(moviesModel.getRelease());
        movies.setTitle(moviesModel.getTitle());
        moviesRepository.save(movies);
        return movies;
    }

    @Override
    public void deleteById(Long id) {
        moviesRepository.deleteById(id);
    }
}
