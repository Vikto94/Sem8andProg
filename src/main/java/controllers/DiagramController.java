package controllers;

import model.Diagram;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.DiagramService;

import java.util.Collection;

@Controller
@RequestMapping("/diagram")
public class DiagramController {

    @Autowired
    private DiagramService diagramService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Diagram> getDiagrams(String search) {
        return diagramService.getDiagrams (search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResultDiagram setDiagram(@RequestBody Diagram diagram) {
        return new ExtResultDiagram(diagramService.add(diagram), diagram);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteDiagram(@RequestBody Diagram diagram) {
        diagramService.delete(diagram);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateDiagram(@RequestBody Diagram diagram) {
        diagramService.update(diagram);
        return "update";
    }
}
