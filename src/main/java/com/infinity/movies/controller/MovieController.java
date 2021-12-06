package com.infinity.movies.controller;


import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Movies;
import com.infinity.movies.model.MoviesModel;
import com.infinity.movies.service.MoviesService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@AllArgsConstructor
@RequestMapping("/movie")
public class MovieController {

    private final MoviesService moviesService;

    @GetMapping("/{id}")
    public ResponseEntity<Movies> getMoviesById(@PathVariable Long id) {
        return new ResponseEntity<>(moviesService.getMoviesById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<Movies>> getMovies(PageDto pageDto){
        return new ResponseEntity<>(moviesService.getMovies(pageDto), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Movies> addMovies(@RequestBody MoviesModel moviesModel)
    {
        return new ResponseEntity<>(moviesService.addMovies(moviesModel), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Movies> updateMovies(@PathVariable Long id, @RequestBody MoviesModel moviesModel)
    {
        return new ResponseEntity<>(moviesService.updateMovies(id, moviesModel), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id)
    {
        moviesService.deleteById(id);
    }
}
