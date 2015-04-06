package controllers;

import model.Attribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.AttributeService;

import java.util.Collection;

@Controller
@RequestMapping("/attribute")
public class AttributeController {

    @Autowired
    private AttributeService attributeService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Attribute> getAttributes(String search) {
        return attributeService.getAttributes (search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResultAttribute setAttribute(@RequestBody Attribute attribute) {
        return new ExtResultAttribute(attributeService.add(attribute), attribute);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteAttribute(@RequestBody Attribute attribute) {
        attributeService.delete(attribute);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateAttribute(@RequestBody Attribute attribute) {
        attributeService.update(attribute);
        return "update";
    }
}
