package com.infinity.movies.controller;


import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.model.CountryModel;
import com.infinity.movies.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@AllArgsConstructor
@RequestMapping("/country")
public class CountryController {

    private final CountryService countryService;

    @GetMapping("/{id}")
    public ResponseEntity<Country> getCountryById(@PathVariable Long id) {
        return new ResponseEntity<>(countryService.getCountryById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Iterable<Country>> getCountry(){
        return new ResponseEntity<>(countryService.getCountry(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Country> addCountry(@RequestBody CountryModel countryModel)
    {
        return new ResponseEntity<>(countryService.addCountry(countryModel), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Country> updateCountry(@PathVariable Long id, @RequestBody CountryModel countryModel)
    {
        return new ResponseEntity<>(countryService.updateCountry(id, countryModel), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id)
    {
        countryService.deleteById(id);
    }
}
