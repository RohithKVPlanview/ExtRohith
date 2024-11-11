Ext.define('MyApp.store.ChartStore', {
    extend: 'Ext.data.Store',
    alias: 'store.chartstore',

    fields: ['name', 'data1'],
    data: [
        { name: 'Item 1', data1: 10 },
        { name: 'Item 2', data1: 7 },
        { name: 'Item 3', data1: 5 },
        { name: 'Item 4', data1: 2 },
        { name: 'Item 5', data1: 27 }
    ]
});
