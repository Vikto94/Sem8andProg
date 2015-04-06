package service;

import model.Diagram;

import java.util.Collection;


public interface DiagramService {

    Boolean add(Diagram diagram);

    void update(Diagram diagram);

    Collection<Diagram> getDiagrams(String search);

    void delete(Diagram diagram);

}
