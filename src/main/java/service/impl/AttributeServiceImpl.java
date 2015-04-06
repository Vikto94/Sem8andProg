package service.impl;

import model.Attribute;
import model.dao.AttributeDao;
import org.springframework.transaction.annotation.Transactional;
import service.AttributeService;

import java.util.Collection;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: k.tagintsev
 * Date: 05.10.13
 * Time: 13:16
 * To change this template use File | Settings | File Templates.
 */
public class AttributeServiceImpl implements AttributeService {

    private AttributeDao attributeDao;

    public AttributeDao getAttributeDao() {
        return attributeDao;
    }

    public void setAttributeDao(AttributeDao attributeDao) {
        this.attributeDao = attributeDao;
    }

    @Transactional
    @Override
    public Boolean add(Attribute attribute) {
        List<Attribute> duplicate = attributeDao.findByAttribute(attribute.getName(), attribute.getType());
        if (duplicate.isEmpty()) {
            attributeDao.add(attribute);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Attribute attribute) {
        attributeDao.update(attribute);
    }

    @Transactional
    @Override
    public Collection<Attribute> getAttributes(String search) {
        return attributeDao.getAttributes(search);
    }

    @Transactional
    @Override
    public void delete(Attribute attribute) {
        attributeDao.delete(attribute);
    }

}
