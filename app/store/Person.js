// File: app/store/Personnel.js
Ext.define('MyApp.store.Person', {
    extend: 'Ext.data.Store',
    alias: 'store.person',
    model: 'MyApp.model.Person',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/data', // Replace with your API endpoint
        reader: {
            type: 'json',
            rootProperty: ' ' // Adjust based on your API response structure
        }
    },
    autoLoad: true // Automatically load data when the store is instantiated
});
