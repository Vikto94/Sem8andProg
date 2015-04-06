package controllers;

import model.Attribute;

public class ExtResultAttribute {
    private boolean success;
    private Attribute data;


    public ExtResultAttribute(boolean success, Attribute data) {
        this.success = success;
        this.data = data;
    }

    public ExtResultAttribute() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Attribute getData() {
        return data;
    }

    public void setData(Attribute data) {
        this.data = data;
    }
}
