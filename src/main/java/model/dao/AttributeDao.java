package model.dao;

import model.Attribute;

import java.util.Collection;
import java.util.List;

public interface AttributeDao {

    void add(Attribute attribute);

    void update(Attribute attribute);

    void delete(Attribute attribute);

    Collection<Attribute> getAttributes(String search);

    public List findByAttribute(String name, String type);

}
