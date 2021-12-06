package com.infinity.movies.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class MoviesModel {

    @JsonProperty(value = "title")
    private String title;
    @JsonProperty(value = "release")
    private Date release;
    @JsonProperty(value = "directorId")
    private Long directorId;
    @JsonProperty(value = "countryId")
    private Long countryId;
}
