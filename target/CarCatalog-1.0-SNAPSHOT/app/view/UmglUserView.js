Ext.define('CarCatalog.view.UmglUserView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.umglUserView',
    layout: 'border',
    items: [
        {
            xtype: 'attributesUserView',
            title: 'user attributes',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Universal Modeling Graphic Language</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'relationshipsUserView',
            title: 'user relationships',
            region: 'east',
            width: 500
        },
        {
            xtype: 'diagramsUserView',
            title: 'user diagrams',
            region: 'west',
            width: 250,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});