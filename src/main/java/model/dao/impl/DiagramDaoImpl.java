package model.dao.impl;

import model.Diagram;
import model.dao.DiagramDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

public class DiagramDaoImpl implements DiagramDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Diagram diagram) {
        emf.persist(diagram);
    }

    @Override
    public void update(Diagram diagram) {
        emf.merge(diagram);
    }

    @Override
    public void delete(Diagram diagram) {
        emf.remove(emf.getReference(Diagram.class, diagram.getId()));
    }

    @Override
    public Collection<Diagram> getDiagrams (String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "select c from Diagram c")
                    .getResultList();
        }
        return emf.createQuery(
                "select c from Diagram c where c.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    @Override
    public List<Diagram> findByDiagram (String name) {
        return emf.createQuery(
                "select c from Diagram c where c.name = :name")
                .setParameter("name", name)
                .getResultList();
    }
}
