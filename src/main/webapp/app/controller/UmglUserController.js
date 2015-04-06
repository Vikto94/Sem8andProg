Ext.define('CarCatalog.controller.UmglUserController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'diagramsUserView',
            ref: 'diagramsUserView'},
        {selector: 'diagramsUserView button[action="add"]',
            ref: 'diagramsUserAdd'},
        {selector: 'diagramsUserView button[action="delete"]',
            ref: 'diagramsUserDelete'},

        {selector: 'attributesUserView',
            ref: 'attributesUserView'},
        {selector: 'attributesUserView button[action="add"]',
            ref: 'attributesUserAdd'},
        {selector: 'attributesUserView button[action="delete"]',
            ref: 'attributesUserDelete'},

        {selector: 'relationshipsUserView',
            ref: 'relationshipsUserView'},
        {selector: 'relationshipsUserView button[action="add"]',
            ref: 'relationshipsUserAdd'},
        {selector: 'relationshipsUserView button[action="delete"]',
            ref: 'relationshipsUserDelete'},

        {selector: 'addDiagramUserFormView',
            ref: 'addDiagramUserFormView'},
        {selector: 'addDiagramUserFormView textfield[name=name] ',
            ref: 'addDiagramUserFormName'},
        {selector: 'addDiagramUserFormView button[action=save]',
            ref: 'addDiagramUserFormSave'},

        {selector: 'addAttributeUserFormView',
            ref: 'addAttributeUserFormView'},
        {selector: 'addAttributeUserFormView textfield[name=name] ',
            ref: 'addAttributeUserFormName'},
        {selector: 'addAttributeUserFormView textfield[name=type] ',
            ref: 'addAttributeUserFormType'},
        {selector: 'addAttributeUserFormView button[action=save]',
            ref: 'addAttributeUserFormSave'},

        {selector: 'addRelationshipUserFormView',
            ref: 'addRelationshipUserFormView'},
        {selector: 'addRelationshipUserFormView textfield[name=attrfirst] ',
            ref: 'addRelationshipUserFormAttrfirst'},
        {selector: 'addRelationshipUserFormView textfield[name=type] ',
            ref: 'addRelationshipUserFormType'},
        {selector: 'addRelationshipUserFormView button[action=save]',
            ref: 'addRelationshipUserFormSave'}
    ],

    init: function () {
        this.control({
            'diagramsUserView  button[action=add]': {
                click: this.onAddDiagram
            },
            'attributesUserView  button[action=add]': {
                click: this.onAddAttribute
            },
            'relationshipsUserView  button[action=add]': {
                click: this.onAddRelationship
            },

            'diagramsUserView  button[action=delete]': {
                click: this.onDelDiagram
            },
            'attributesUserView  button[action=delete]': {
                click: this.onDelAttribute
            },
            'relationshipsUserView  button[action=delete]': {
                click: this.onDelRelationship
            },

            'diagramsUserView': {
                cellclick: this.onLineGridDiagram
            },
            'attributesUserView': {
                cellclick: this.onLineGridAttribute
            },
            'relationshipsUserView': {
                cellclick: this.onLineGridRelationship
            },

            'addDiagramUserFormView  button[action=save]': {
                click: this.onSaveDiagram
            },
            'addAttributeUserFormView  button[action=save]': {
                click: this.onSaveAttribute
            },
            'addRelationshipUserFormView  button[action=save]': {
                click: this.onSaveRelationship
            },

            'addDiagramUserFormView  textfield[name=name]': {
                change: this.onValidationDiagram
            },

            'addAttributeUserFormView  textfield[name=name]': {
                change: this.onValidationAttribute
            },
            'addAttributeUserFormView  textfield[name=type]': {
                change: this.onValidationAttribute
            },

            'addRelationshipUserFormView  textfield[name=attrfirst]': {
                change: this.onValidationRelationship
            },
            'addRelationshipUserFormView  textfield[name=type]': {
                change: this.onValidationRelationship
            }
        });
    },

    onSaveDiagram: function (button) {
        var me = this;
        var umglModel = Ext.create('CarCatalog.model.DiagramUserModel');
        umglModel.set(this.getAddDiagramUserFormView().down('form').getValues());
        umglModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('DiagramUserStore').add(objAjax);
                me.getAddDiagramUserFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'ERROR!',
                    msg: 'This diagramm can not be added.',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    },

    onSaveAttribute: function (button) {
        var me = this;
        var umglModel = Ext.create('CarCatalog.model.AttributeUserModel');
        umglModel.set(this.getAddAttributeUserFormView().down('form').getValues());
        umglModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('AttributeUserStore').add(objAjax);
                me.getAddAttributeUserFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'ERROR!',
                    msg: 'This attribute can not be added.',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    },

    onSaveRelationship: function (button) {
        var me = this;
        var umglModel = Ext.create('CarCatalog.model.RelationshipUserModel');
        umglModel.set(this.getAddRelationshipUserFormView().down('form').getValues());
        umglModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('RelationshipUserStore').add(objAjax);
                me.getAddRelationshipUserFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'ERROR!',
                    msg: 'This relationship can not be added.',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    },

    onAddDiagram: function () {
        Ext.widget('addDiagramUserFormView');
    },

    onAddAttribute: function () {
        Ext.widget('addAttributeUserFormView');
    },

    onAddRelationship: function () {
        Ext.widget('addRelationshipUserFormView');
    },

    onDelDiagram: function () {
        var sm = this.getDiagramsUserView().getSelectionModel();
        var rs = sm.getSelection();
        this.getDiagramsUserView().store.remove(rs[0]);
        this.getDiagramsUserView().store.commitChanges();
        this.getDiagramsUserDelete().disable();
    },

    onDelAttribute: function () {
        var sm = this.getAttributesUserView().getSelectionModel();
        var rs = sm.getSelection();
        this.getAttributesUserView().store.remove(rs[0]);
        this.getAttributesUserView().store.commitChanges();
        this.getAttributesUserDelete().disable();
    },

    onDelRelationship: function () {
        var sm = this.getRelationshipsUserView().getSelectionModel();
        var rs = sm.getSelection();
        this.getRelationshipsUserView().store.remove(rs[0]);
        this.getRelationshipsUserView().store.commitChanges();
        this.getRelationshipsUserDelete().disable();
    },

    onLineGridDiagram: function () {
        this.getDiagramsUserDelete().enable();
    },

    onLineGridAttribute: function () {
        this.getAttributesUserDelete().enable();
    },

    onLineGridRelationship: function () {
        this.getRelationshipsUserDelete().enable();
    },

    onValidationDiagram: function () {
        if (this.getAddDiagramUserFormName().validate()) {
            this.getAddDiagramUserFormSave().enable();
        } else {
            this.getAddDiagramUserFormSave().disable();
        }
    },

    onValidationAttribute: function () {
        if (this.getAddAttributeUserFormName().validate() && this.getAddAttributeUserFormType().validate()) {
            this.getAddAttributeUserFormSave().enable();
        } else {
            this.getAddAttributeUserFormSave().disable();
        }
    },

    onValidationRelationship: function () {
        if (this.getAddRelationshipUserFormAttrfirst().validate() && this.getAddRelationshipUserFormType().validate()) {
            this.getAddRelationshipUserFormSave().enable();
        } else {
            this.getAddRelationshipUserFormSave().disable();
        }
    }
});