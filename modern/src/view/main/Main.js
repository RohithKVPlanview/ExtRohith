/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Hello',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        },
        {
            title : 'stopwatch',
            iconCls: 'x-fa fa-cog',
            layout: 'vbox',
            items: [
                {
                    xtype: 'displayfield',
                    itemId: 'timeDisplay',
                    bind: '{elapsedTime}', // Bind to ViewModel's elapsedTime
                    fieldStyle: 'font-size: 24px; text-align: center;',
                    margin: 10
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Start',
                            handler: 'onStartStopwatch',  // Event handler in the Controller
                            margin: '0 10 0 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Stop',
                            handler: 'onStopStopwatch',
                            margin: '0 10 0 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Reset',
                            handler: 'onResetStopwatch'
                        }
                    ]
                }
            ]
        }
    ]
});
