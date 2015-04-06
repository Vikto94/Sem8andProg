Ext.define('CarCatalog.view.DiagramsUserView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.diagramsUserView',
    frame: true,
    store: 'DiagramUserStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'diagram name',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'this field must not be empty'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'save',
            cancelBtnText: 'undo'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'add',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'delete',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});