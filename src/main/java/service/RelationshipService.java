package service;

import model.Relationship;

import java.util.Collection;


public interface RelationshipService {

    Boolean add(Relationship relationship);

    void update(Relationship relationship);

    Collection<Relationship> getRelationships(String search);

    void delete(Relationship relationship);

}
