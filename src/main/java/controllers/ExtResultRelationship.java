package controllers;

import model.Relationship;

public class ExtResultRelationship {
    private boolean success;
    private Relationship data;


    public ExtResultRelationship(boolean success, Relationship data) {
        this.success = success;
        this.data = data;
    }

    public ExtResultRelationship() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Relationship getData() {
        return data;
    }

    public void setData(Relationship data) {
        this.data = data;
    }
}
