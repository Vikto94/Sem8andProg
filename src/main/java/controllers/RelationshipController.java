package controllers;

import model.Relationship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.RelationshipService;

import java.util.Collection;

@Controller
@RequestMapping("/relationship")
public class RelationshipController {

    @Autowired
    private RelationshipService relationshipService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Relationship> getRelationships(String search) {
        return relationshipService.getRelationships(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResultRelationship setRelationship(@RequestBody Relationship relationship) {
        return new ExtResultRelationship(relationshipService.add(relationship), relationship);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteRelationship(@RequestBody Relationship relationship) {
        relationshipService.delete(relationship);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateRelationship(@RequestBody Relationship relationship) {
        relationshipService.update(relationship);
        return "update";
    }
}
