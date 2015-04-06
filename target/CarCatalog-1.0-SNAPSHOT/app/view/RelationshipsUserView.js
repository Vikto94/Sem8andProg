Ext.define('CarCatalog.view.RelationshipsUserView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.relationshipsUserView',
    frame: true,
    store: 'RelationshipUserStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'relationship attrfirst',
            flex: 1,
            sortable: true,
            dataIndex: 'attrfirst',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'this field must not be empty'
            }
        },
        {
            flex: 2,
            text: 'type',
            sortable: true,
            dataIndex: 'type',
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