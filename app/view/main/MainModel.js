/**
 * This class is the view model for the Main view of the application.
 */
/* jshint esversion: 6 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MyApp',

        loremIpsum: 'hello world',

        elapsedTime: 0,

        counter:0
    },


    formulas: {
        // Format the elapsed time as HH:MM:SS for display
        elapsedTimeFormatted: function(get) {
            let seconds = get('elapsedTime');
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            seconds = seconds % 60;
            return Ext.String.leftPad(hours, 2, '0') + ':' +
                Ext.String.leftPad(minutes, 2, '0') + ':' +
                Ext.String.leftPad(seconds, 2, '0');
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
