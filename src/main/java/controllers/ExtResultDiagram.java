package controllers;

import model.Diagram;

/**
 * Created with IntelliJ IDEA.
 * User: k.tagintsev
 * Date: 06.10.13
 * Time: 3:13
 * To change this template use File | Settings | File Templates.
 */

public class ExtResultDiagram {
    private boolean success;
    private Diagram data;


    public ExtResultDiagram(boolean success, Diagram data) {
        this.success = success;
        this.data = data;
    }

    public ExtResultDiagram() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Diagram getData() {
        return data;
    }

    public void setData(Diagram data) {
        this.data = data;
    }
}
