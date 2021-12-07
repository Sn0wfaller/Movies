package com.infinity.movies.entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class Movies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_movies")
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String release;

    @NotNull
    @JoinColumn(name = "id_country")
    @ManyToOne
    private Country country;

    @NotNull
    @JoinColumn(name = "id_director")
    @ManyToOne
    private Director director;

    public Movies(String title, String release, Country country, Director director)
    {
        this.title = title;
        this.release = release;
        this.country = country;
        this.director = director;
    }
}
