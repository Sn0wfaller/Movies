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
public class DirectorModel {

    @JsonProperty(value = "name")
    private String name;
    @JsonProperty(value = "birth")
    private Date birth;
}