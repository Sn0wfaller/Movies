package com.infinity.movies.repository;

import com.infinity.movies.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Long> {

    boolean existsByTitle(String title);
}
