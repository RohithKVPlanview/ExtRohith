Ext.define('MyApp.view.main.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-window',

    title: 'Login',
    modal: true,
    closable: false, // Prevents closing the window without logging in
    width: 300,
    layout: 'fit',

    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [
            {
                fieldLabel: 'Username',
                name: 'username',
                allowBlank: false
            },
            {
                fieldLabel: 'Password',
                name: 'password',
                inputType: 'password',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                handler: 'onLogin' // Define the handler in the MainController
            }
        ]
    }]
});
