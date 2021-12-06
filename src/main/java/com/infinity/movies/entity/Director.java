package com.infinity.movies.entity;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class Director {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_director")
    private Long id;

    @NotNull
    private String name;

    @NotNull
    @Column(name = "birth")
    private Date birth;


    public Director(String name, Date birth) {
        this.name = name;
        this.birth = birth;
    }
}
