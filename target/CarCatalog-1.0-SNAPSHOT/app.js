Ext.application({
    name: 'CarCatalog',

    views: [
        'AddDiagramUserFormView',
        'AddAttributeUserFormView',
        'AddRelationshipUserFormView',
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView',
        'AttributesUserView',
        'RelationshipsUserView',
        'DiagramsUserView',
        'UmglUserView'
    ],

    controllers : [
        'CarCatalogController',
        'UmglUserController'
    ],

    stores : [
        'CarCatalogStore',
        'DiagramUserStore',
        'AttributeUserStore',
        'RelationshipUserStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'umglUserView'
            }
        });
    }
});