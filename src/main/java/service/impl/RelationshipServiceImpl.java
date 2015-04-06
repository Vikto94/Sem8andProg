package service.impl;

import model.Relationship;
import model.dao.RelationshipDao;
import org.springframework.transaction.annotation.Transactional;
import service.RelationshipService;

import java.util.Collection;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: k.tagintsev
 * Date: 05.10.13
 * Time: 13:16
 * To change this template use File | Settings | File Templates.
 */
public class RelationshipServiceImpl implements RelationshipService {

    private RelationshipDao relationshipDao;

    public RelationshipDao getRelationshipDao() {
        return relationshipDao;
    }

    public void setRelationshipDao(RelationshipDao relationshipDao) {
        this.relationshipDao = relationshipDao;
    }

    @Transactional
    @Override
    public Boolean add(Relationship relationship) {
        List<Relationship> duplicate = relationshipDao.findByRelationship(relationship.getattrfirst(), relationship.getType());
        if (duplicate.isEmpty()) {
            relationshipDao.add(relationship);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Relationship relationship) {
        relationshipDao.update(relationship);
    }

    @Transactional
    @Override
    public Collection<Relationship> getRelationships(String search) {
        return relationshipDao.getRelationships(search);
    }

    @Transactional
    @Override
    public void delete(Relationship relationship) {
        relationshipDao.delete(relationship);
    }

}
