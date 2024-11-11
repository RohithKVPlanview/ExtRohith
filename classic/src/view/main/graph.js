Ext.define('MyApp.view.graph', {
    extend: 'Ext.panel.Panel',
    xtype: 'graph1',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],

    layout: 'fit',

    items: [{
        xtype: 'cartesian', // Defines the chart type
        store: {
            type: 'chartstore' // Uses the store defined earlier
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            title: {
                text: 'Data Value',
                fontSize: 15
            },
            fields: 'data1',
            grid: true,
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                text: 'Items',
                fontSize: 15
            },
            fields: 'name'
        }],
        series: [{
            type: 'bar',
            xField: 'name',
            yField: 'data1',
            style: {
                fill: '#a2b5ca'
            },
            label: {
                field: 'data1',
                display: 'insideEnd',
                renderer: function (value) {
                    return value + '%';
                }
            }
        }]
    }]
});
