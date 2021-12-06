package com.infinity.movies.repository;

import com.infinity.movies.entity.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movies, Long> {

    boolean existsByTitle(String title);
}