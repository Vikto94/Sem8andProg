Ext.define('CarCatalog.view.AddAttributeUserFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addAttributeUserFormView',
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
                    fieldLabel: 'name',
                    allowBlank: false,
                    blankText: 'this field must not be empty'
                },
                {
                    xtype: 'textfield',
                    name: 'type',
                    fieldLabel: 'type',
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