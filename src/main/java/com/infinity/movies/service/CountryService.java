package com.infinity.movies.service;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.model.CountryModel;
import org.springframework.data.domain.Page;

public interface CountryService {

    Country getCountryById(Long id);

    Page<Country> getCountry(PageDto pageDto);

    Country addCountry(CountryModel countryModel);

    Country updateCountry(Long id, CountryModel countryModel);

    void deleteById(Long id);
}
