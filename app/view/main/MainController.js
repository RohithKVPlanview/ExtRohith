/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
/* jshint esversion: 6 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    intervalId: null,
    onLogin: function(button) {
        const form = button.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:3001/login', // Backend authentication endpoint
                method: 'POST',
                success: (form, action) => {
                    Ext.Msg.alert('Success', 'Login successful!');
                    button.up('window').close(); // Close login window on success
                },
                failure: (form, action) => {
                    Ext.Msg.alert('Failed', 'Invalid username or password.');
                }
            });
        }
    },
    onStartStopwatch: function() {
        // Prevent multiple intervals from running
        if (this.intervalId){ return; }

        // Start the stopwatch, update elapsed time every second
        this.intervalId = setInterval(() => {
            let viewModel = this.getViewModel();
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

    onAddOne: function(){
        let viewModel = this.getViewModel();
        viewModel.set('counter',viewModel.get('counter')+1);
    },
    onReduceOne: function() {
        let viewModel = this.getViewModel();
        viewModel.set('counter',viewModel.get('counter')-1);
    },

    onResetCounter: function() {
        let viewModel = this.getViewModel();
        viewModel.set('counter',0);
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