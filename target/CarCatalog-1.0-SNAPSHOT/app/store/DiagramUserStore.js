Ext.define('CarCatalog.store.DiagramUserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'CarCatalog.model.DiagramUserModel'
    ],
    model: 'CarCatalog.model.DiagramUserModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'diagram',
            read: 'diagram',
            destroy: 'diagram',
            update: 'diagram'
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