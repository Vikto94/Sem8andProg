Ext.define('CarCatalog.model.RelationshipUserModel', {
    extend: 'Ext.data.Model',
    fields: ['attrfirst', 'type'],
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
            writeAllFields: true,
            writeRecordId: false
        }

    }
});