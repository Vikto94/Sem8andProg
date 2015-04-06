Ext.define('CarCatalog.model.AttributeUserModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'type'],
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
            writeAllFields: true,
            writeRecordId: false
        }

    }
});