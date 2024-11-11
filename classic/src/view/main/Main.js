/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
/* jshint esversion: 6 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Hello',
        iconCls: 'fa-cog',
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
        },{
            title : 'Counter',
            iconCls: 'x-fa fa-cog',
            layout: 'vbox',
            items: [
                {
                    xtype: 'displayfield',
                    itemId: 'timeDisplay',
                    bind: '{counter}', // Bind to ViewModel's Counter
                    fieldStyle: 'font-size: 24px; text-align: center;',
                    margin: 10
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            text: '+',
                            handler: 'onAddOne',  // Event handler in the Controller
                            margin: '0 10 0 0'
                        },
                        {
                            xtype: 'button',
                            text: '-',
                            handler: 'onReduceOne',
                            margin: '0 10 0 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Reset',
                            handler: 'onResetCounter'
                        }
                    ]
                }
            ]
        },{
            title: 'API Data',
            xtype: 'datalist' // Use the DataList view defined earlier
        },
        {
         title: 'GantChart',
         xtype: 'ganttchart',
        },
        {
            title: 'addTask',
            xtype: 'addtaskform',
        },
        {
            title: 'Graph',
            xtype: 'graph1'
        }],

    listeners: {
        afterrender: function() {
            // Check if the login has already been shown
            const isFirstVisit = localStorage.getItem('isFirstVisit');

            // Show the login window only if it's the first visit
            if (!isFirstVisit) {
                const loginWindow = Ext.create('MyApp.view.main.Login');
                loginWindow.show();

                // Mark as visited so it doesn’t show again
                localStorage.setItem('isFirstVisit', 'true');
            }
        }
    }

});