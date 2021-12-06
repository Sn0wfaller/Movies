package com.infinity.movies.serviceimpl;

import com.infinity.movies.dto.PageDto;
import com.infinity.movies.entity.Country;
import com.infinity.movies.entity.Director;
import com.infinity.movies.exception.ResourceAlreadyExistsException;
import com.infinity.movies.exception.ResourceNotFoundException;
import com.infinity.movies.model.DirectorModel;
import com.infinity.movies.repository.DirectorRepository;
import com.infinity.movies.service.DirectorService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DirectorServiceImpl implements DirectorService {


    private final DirectorRepository directorRepository;

    @Override
    public Director getDirectorById(Long id) {
        return directorRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "The director with id=" + id + " does not exist."));
    }

    @Override
    public Page<Director> getDirector(PageDto pageDto) {

        return directorRepository.findAll(pageDto.getPageable());
    }

    @Override
    public Director addDirector(DirectorModel directorModel) {
        if (directorRepository.existsByName(directorModel.getName()))
        {
            throw new ResourceAlreadyExistsException("The director with such name already exists.");
        }
        Director director = new Director(directorModel.getName(), directorModel.getBirth());
        directorRepository.save(director);
        return director;
    }

    @Override
    public Director updateDirector(Long id, DirectorModel directorModel) {

        Director director = directorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The director with id = "+id+"does not exist."));
        director.setName(directorModel.getName());
        director.setBirth(directorModel.getBirth());
        directorRepository.save(director);
        return director;
    }

    @Override
    public void deleteById(Long id) {
        directorRepository.deleteById(id);
    }
}
