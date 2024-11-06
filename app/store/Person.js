// File: app/store/Personnel.js
Ext.define('MyApp.store.Person', {
    extend: 'Ext.data.Store',
    alias: 'store.person',
    model: 'MyApp.model.Person',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/data',
        reader: {
            type: 'json',
            rootProperty: ' '
        }
    },
    autoLoad: true // Automatically load data when the store is instantiated
});
