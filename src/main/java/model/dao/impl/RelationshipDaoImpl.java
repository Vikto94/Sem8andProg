package model.dao.impl;

import model.Relationship;
import model.dao.RelationshipDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

public class RelationshipDaoImpl implements RelationshipDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Relationship relationship) {
        emf.persist(relationship);
    }

    @Override
    public void update(Relationship relationship) {
        emf.merge(relationship);
    }

    @Override
    public void delete(Relationship relationship) {
        emf.remove(emf.getReference(Relationship.class, relationship.getId()));
    }

    @Override
    public Collection<Relationship> getRelationships(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "select c from Relationship c")
                    .getResultList();
        }
        return emf.createQuery(
                "select c from Relationship c where c.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Relationship> findByRelationship(String attrfirst, String type) {
        return emf.createQuery(
                "select c from Relationship c where c.attrfirst = :attrfirst and c.type = :type")
                .setParameter("attrfirst", attrfirst)
                .setParameter("type", type)
                .getResultList();
    }
}
