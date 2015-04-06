Ext.define('CarCatalog.view.AddDiagramUserFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addDiagramUserFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'diagram name',
                    allowBlank: false,
                    blankText: 'this field must not be empty'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'save',
            action: 'save',
            disabled: true
        },
        {
            text: 'Undo',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});