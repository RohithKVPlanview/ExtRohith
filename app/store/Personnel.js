Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: 'Rohith', email: "rohith.kv@planview.com", phone: "9611141662" },
        { name: 'Divyansh',     email: "worf.moghsson@enterprise.com",  phone: "9876543210" },
        { name: 'Sudhanva',   email: "deanna.troi@enterprise.com",    phone: "8907654325" },
        { name: 'Ranjith',     email: "mr.data@enterprise.com",        phone: "7849300390" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
