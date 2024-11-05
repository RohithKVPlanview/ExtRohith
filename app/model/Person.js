// File: app/model/Personnel.js
Ext.define('MyApp.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'email', type: 'string' },
        {name: 'dob' , type : 'string'},
        {name: 'mobile', type: 'string'},
        {name: 'address', type:'string'}
        // Add more fields as needed
    ]
});
