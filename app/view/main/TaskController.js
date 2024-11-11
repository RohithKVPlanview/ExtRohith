/* jshint esversion: 6 */
Ext.define('MyApp.view.main.TaskController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.task',



    onFormSubmit: function(button){
        const form = button.up('form');  // Reference to the form
        const values = form.getValues(); // Get field values as an object


        const projectStartDate = new Date('2024-11-01');
        if (form.isValid()) {
            // Add the new task object to the existing array
            const newTask = {
                name: values.taskName,
                startDate: values.startdate,
                endDate: values.enddate
            };
            const start = new Date(newTask.startDate);
            const end = new Date(newTask.endDate);

            newTask.duration = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Duration in days
            newTask.offset = Math.round((start - projectStartDate) / (1000 * 60 * 60 * 24)); // Offset from project start

            //taskData.push(newTask);
            // console.log(store);
           //let store= Ext.getStore('taskstore');
            const store = Ext.getStore('taskstores');  // Ensure taskstore is globally accessible
            store.add(newTask);


            // Display a success message and reset the form
            Ext.Msg.alert('Success', 'Task added successfully!');
            form.reset();

            // Optional: Log the updated array to verify
            console.log('Updated tasks array:', form.tasksArray);
        } else {
            Ext.Msg.alert('Invalid Data', 'Please fill all required fields.');
        }
    }


});