
Ext.define('MyApp.view.main.Task',{
    extend: 'Ext.form.Panel',
    xtype: 'addtaskform',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.TaskController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'task',


    title: 'Add Task',
    bodyPadding: 10,

    items: [
        {
            xtype: 'textfield',
            name: 'taskName',
            fieldLabel: 'Task Name',
            allowBlank: false
        },
        {
            xtype: 'datefield',
            name: 'startdate',
            fieldLabel: 'startDate',
            allowBlank: false

        },
        {
            xtype: 'datefield',
            name: 'enddate',
            fieldLabel: 'endDate',
            allowBlank: false

        }
    ],

    buttons: [
        {
            text: 'Submit',
            formBind: true,
            handler: 'onFormSubmit'  // Reference to controller's function
        }
    ]
});