package service;

import model.Attribute;

import java.util.Collection;


public interface AttributeService {

    Boolean add(Attribute attribute);

    void update(Attribute attribute);

    Collection<Attribute> getAttributes(String search);

    void delete(Attribute attribute);

}
