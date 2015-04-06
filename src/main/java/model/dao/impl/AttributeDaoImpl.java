package model.dao.impl;

import model.Attribute;
import model.dao.AttributeDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

public class AttributeDaoImpl implements AttributeDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Attribute attribute) {
        emf.persist(attribute);
    }

    @Override
    public void update(Attribute attribute) {
        emf.merge(attribute);
    }

    @Override
    public void delete(Attribute attribute) {
        emf.remove(emf.getReference(Attribute.class, attribute.getId()));
    }

    @Override
    public Collection<Attribute> getAttributes(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "select c from Attribute c")
                    .getResultList();
        }
        return emf.createQuery(
                "select c from Attribute c where c.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Attribute> findByAttribute(String name, String type) {
        return emf.createQuery(
                "select c from Attribute c where c.name = :name and c.type = :type")
                .setParameter("name", name)
                .setParameter("type", type)
                .getResultList();
    }
}
