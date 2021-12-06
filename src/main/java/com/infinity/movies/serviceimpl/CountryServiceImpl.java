package com.infinity.movies.serviceimpl;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.entity.Movies;
import com.infinity.movies.exception.ResourceAlreadyExistsException;
import com.infinity.movies.exception.ResourceNotFoundException;
import com.infinity.movies.model.CountryModel;
import com.infinity.movies.repository.CountryRepository;
import com.infinity.movies.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CountryServiceImpl implements CountryService {


    private final CountryRepository countryRepository;

    @Override
    public Country getCountryById(Long id) {
        return countryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The country with id=" + id + " does not exist."));
    }

    @Override
    public Page<Country> getCountry(PageDto pageDto) {

        return countryRepository.findAll(pageDto.getPageable());
    }

    @Override
    public Country addCountry(CountryModel countryModel) {
        if (countryRepository.existsByTitle(countryModel.getTitle()))
        {
            throw new ResourceAlreadyExistsException("The country with such name already exists.");
        }
        Country country = new Country(countryModel.getTitle());
        countryRepository.save(country);
        return country;
    }

    @Override
    public Country updateCountry(Long id, CountryModel countryModel) {
        Country country = countryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The country with id = "+id+"does not exist."));
        country.setTitle(countryModel.getTitle());
        countryRepository.save(country);
        return country;
    }

    @Override
    public void deleteById(Long id) {
        countryRepository.deleteById(id);
    }
}
