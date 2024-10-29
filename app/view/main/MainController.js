/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
/* jshint esversion: 6 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    intervalId: null,
    onStartStopwatch: function() {
        // Prevent multiple intervals from running
        if (this.intervalId){ return; }

        // Start the stopwatch, update elapsed time every second
        this.intervalId = setInterval(() => {
            var viewModel = this.getViewModel();
            viewModel.set('elapsedTime', viewModel.get('elapsedTime') + 1);
        }, 1000);
    },

    onStopStopwatch: function() {
        // Clear the interval to stop the timer
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },

    onResetStopwatch: function() {
        // Reset elapsed time and clear interval
        this.onStopStopwatch();
        this.getViewModel().set('elapsedTime', 0);
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
