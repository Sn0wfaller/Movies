package com.infinity.movies.repository;

import com.infinity.movies.entity.Director;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectorRepository extends JpaRepository<Director, Long> {


    boolean existsByName(String name);
}
