package model.dao;

import model.Diagram;

import java.util.Collection;
import java.util.List;


public interface DiagramDao {

    void add(Diagram diagram);

    void update(Diagram diagram);

    void delete(Diagram diagram);

    Collection<Diagram> getDiagrams(String search);

    public List findByDiagram(String name);

}