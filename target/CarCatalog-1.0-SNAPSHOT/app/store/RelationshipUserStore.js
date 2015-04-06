Ext.define('CarCatalog.store.RelationshipUserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'CarCatalog.model.RelationshipUserModel'
    ],
    model: 'CarCatalog.model.RelationshipUserModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'relationship',
            read: 'relationship',
            destroy: 'relationship',
            update: 'relationship'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});