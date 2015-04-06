Ext.define('CarCatalog.model.DiagramUserModel', {
    extend: 'Ext.data.Model',
    fields: ['name'],
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
            writeAllFields: true,
            writeRecordId: false
        }

    }
});