package service.impl;

import model.Diagram;
import model.dao.DiagramDao;
import org.springframework.transaction.annotation.Transactional;
import service.DiagramService;

import java.util.Collection;
import java.util.List;

public class DiagramServiceImpl implements DiagramService {

    private DiagramDao diagramDao;

    public DiagramDao getDiagramDao() {
        return diagramDao;
    }

    public void setDiagramDao(DiagramDao diagramDao) {
        this.diagramDao = diagramDao;
    }

    @Transactional
    @Override
    public Boolean add(Diagram diagram) {
        List<Diagram> duplicate = diagramDao.findByDiagram(diagram.getName());
        if (duplicate.isEmpty()) {
            diagramDao.add(diagram);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Diagram diagram) {
        diagramDao.update(diagram);
    }

    @Transactional
    @Override
    public Collection<Diagram> getDiagrams(String search) {
        return diagramDao.getDiagrams(search);
    }

    @Transactional
    @Override
    public void delete(Diagram diagram) {
        diagramDao.delete(diagram);
    }

}
