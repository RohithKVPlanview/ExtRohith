// File: app/view/GanttChart.js
/* jshint esversion: 6 */
Ext.define('MyApp.view.GanttChart', {
    extend: 'Ext.grid.Panel',
    xtype: 'ganttchart',

    title: 'Simple Gantt Chart',

    store: {
        type: 'taskstore' // Ensure TaskStore is defined and available
    },

    // Custom renderer function for the Gantt bars within each quarter column
    ganttRenderer: function(startDate, endDate, quarterStart, quarterEnd) {
        const quarterWidth = 125; // Width of each quarter column in pixels

        // Check if task starts in this quarter
        if (startDate >= quarterEnd || endDate < quarterStart) {
            return ''; // No bar if task is outside this quarter
        }

        const startOffset = startDate > quarterStart ? (startDate - quarterStart) / (quarterEnd - quarterStart) * quarterWidth : 0;
        const duration = (Math.min(endDate, quarterEnd) - Math.max(startDate, quarterStart)) / (quarterEnd - quarterStart) * quarterWidth;

        // Render bar within the quarter cell
        return `<div style="position: relative; height: 20px;">
                    <div style="position: absolute; left: ${startOffset}px; width: ${duration}px;
                                background-color: #4CAF50; height: 20px;">
                    </div>
                </div>`;
    },

    columns: [
        { text: 'Task Name', dataIndex: 'name', width: 100, locked: true },
        { text: 'Start Date', dataIndex: 'startDate', width: 100, locked: true },
        { text: 'End Date', dataIndex: 'endDate', width: 100, locked: true },

        {
            text: 'Timeline',
            flex: 3,
            columns: [
                {
                    text: '2024',
                    columns: [
                        {
                            text: 'Q1',
                            width: 125,
                            renderer: function(value, metaData, record) {
                                const startDate = new Date(record.get('startDate'));
                                const endDate = new Date(record.get('endDate'));
                                const quarterStart = new Date(2024, 0, 1); // Jan 1, 2024
                                const quarterEnd = new Date(2024, 3, 1);  // Apr 1, 2024
                                return this.up('ganttchart').ganttRenderer(startDate, endDate, quarterStart, quarterEnd);
                            }
                        },
                        {
                            text: 'Q2',
                            width: 125,
                            renderer: function(value, metaData, record) {
                                const startDate = new Date(record.get('startDate'));
                                const endDate = new Date(record.get('endDate'));
                                const quarterStart = new Date(2024, 3, 1); // Apr 1, 2024
                                const quarterEnd = new Date(2024, 6, 1);  // Jul 1, 2024
                                return this.up('ganttchart').ganttRenderer(startDate, endDate, quarterStart, quarterEnd);
                            }
                        },
                        {
                            text: 'Q3',
                            width: 125,
                            renderer: function(value, metaData, record) {
                                const startDate = new Date(record.get('startDate'));
                                const endDate = new Date(record.get('endDate'));
                                const quarterStart = new Date(2024, 6, 1); // Jul 1, 2024
                                const quarterEnd = new Date(2024, 9, 1);  // Oct 1, 2024
                                return this.up('ganttchart').ganttRenderer(startDate, endDate, quarterStart, quarterEnd);
                            }
                        },
                        {
                            text: 'Q4',
                            width: 125,
                            renderer: function(value, metaData, record) {
                                const startDate = new Date(record.get('startDate'));
                                const endDate = new Date(record.get('endDate'));
                                const quarterStart = new Date(2024, 9, 1); // Oct 1, 2024
                                const quarterEnd = new Date(2025, 0, 1);  // Jan 1, 2025
                                return this.up('ganttchart').ganttRenderer(startDate, endDate, quarterStart, quarterEnd);
                            }
                        }
                    ]
                },
                // Repeat for 2025
                {
                    text: '2025',
                    columns: [
                        {
                            text: 'Q1',
                            width: 125,
                            renderer: function(value, metaData, record) {
                                const startDate = new Date(record.get('startDate'));
                                const endDate = new Date(record.get('endDate'));
                                const quarterStart = new Date(2025, 0, 1); // Jan 1, 2025
                                const quarterEnd = new Date(2025, 3, 1);  // Apr 1, 2025
                                return this.up('ganttchart').ganttRenderer(startDate, endDate, quarterStart, quarterEnd);
                            }
                        },
                        // Continue for Q2, Q3, Q4 of 2025 similarly
                    ]
                }
            ]
        }
    ],

    viewConfig: {
        enableTextSelection: true,
        preserveScrollOnRefresh: true,
        scrollable: {
            x: true,
            y: false
        }
    }
});
