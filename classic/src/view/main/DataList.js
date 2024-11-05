// File: app/view/main/DataList.js
Ext.define('MyApp.view.main.DataList', {
    extend: 'Ext.grid.Panel',
    xtype: 'datalist',
    title: 'API Data',

    store: {
        type: 'person' // This should match the alias defined in the Personnel store
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'DOB', dataIndex: 'dob', flex: 1 },
        { text: 'Mobile', dataIndex: 'mobile', flex: 1 },
        { text: 'Address', dataIndex: 'address', flex: 1 }
        // Add more columns based on your data fields
    ],

    height: 400,
    width: 600
});
