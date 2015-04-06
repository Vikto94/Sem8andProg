Ext.define('CarCatalog.store.AttributeUserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'CarCatalog.model.AttributeUserModel'
    ],
    model: 'CarCatalog.model.AttributeUserModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'attribute',
            read: 'attribute',
            destroy: 'attribute',
            update: 'attribute'
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