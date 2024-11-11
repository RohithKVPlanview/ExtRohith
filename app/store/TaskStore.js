/* jshint esversion: 6 */
const taskData = [
    { id: 1, name: 'Planning', startDate: '2024-11-01', endDate: '2024-11-10' },
    { id: 2, name: 'Design', startDate: '2024-11-11', endDate: '2024-11-20', parentId: 1 },
    { id: 3, name: 'Development', startDate: '2024-11-21', endDate: '2024-12-10', parentId: 1 },
    { id: 4, name: 'Testing', startDate: '2024-12-11', endDate: '2024-12-20', parentId: 1 },
];

const projectStartDate = new Date('2024-11-01');

taskData.forEach(task => {
    const start = new Date(task.startDate);
    const end = new Date(task.endDate);

    task.duration = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Duration in days
    task.offset = Math.round((start - projectStartDate) / (1000 * 60 * 60 * 24)); // Offset from project start
});


Ext.define('MyApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    storeId: 'taskstores',
    fields: ['id', 'name', 'startDate', 'endDate', 'duration', 'offset'],
    data: taskData
});

