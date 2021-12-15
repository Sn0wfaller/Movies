package com.infinity.movies.service;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.model.CountryModel;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface CountryService {

    Country getCountryById(Long id);

    Iterable<Country> getCountry();

    Country addCountry(CountryModel countryModel);

    Country updateCountry(Long id, CountryModel countryModel);

    void deleteById(Long id);
}
