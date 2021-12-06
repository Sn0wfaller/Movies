package com.infinity.movies.service;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Director;
import com.infinity.movies.model.DirectorModel;
import org.springframework.data.domain.Page;

public interface DirectorService {

    Director getDirectorById(Long id);

    Page<Director> getDirector(PageDto pageDto);

    Director addDirector(DirectorModel directorModel);

    Director updateDirector(Long id, DirectorModel directorModel);

    void deleteById(Long id);
}
