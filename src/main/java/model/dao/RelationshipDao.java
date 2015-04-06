package model.dao;

import model.Relationship;

import java.util.Collection;
import java.util.List;

public interface RelationshipDao {

    void add(Relationship relationship);

    void update(Relationship relationship);

    void delete(Relationship relationship);

    Collection<Relationship> getRelationships(String search);

    public List findByRelationship(String attrfirst, String type);

}
