const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

// Helper functions
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const formatTimestamp = (date) => {
    const options = {
        timeZone: 'Asia/Karachi', // GMT+5
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    let formatter = new Intl.DateTimeFormat('en-US', options);
    let parts = formatter.formatToParts(date);
    return `${parts[4].value}/${parts[0].value}/${parts[2].value} ${parts[6].value}:${parts[8].value}:${parts[10].value} ${parts[12].value} GMT+5`;
};

const generateTimestamp = (start, end) => {
    const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return formatTimestamp(randomTime);
};

// General function to generate CSV data
const generateCSV = ({ filePath, headers, dataSources, recordCount }) => {
    const csvWriter = createObjectCsvWriter({
        path: filePath,
        header: headers.map((col) => ({ id: col.id, title: col.title })),
    });

    const records = Array.from({ length: recordCount }, () => {
        let record = {};
        headers.forEach(({ id }, index) => {
            record[id] = id === 'timestamp'
                ? generateTimestamp(new Date(2024, 11, 14, 19, 45, 39), new Date(2025, 1, 4, 19, 0, 0))
                : getRandomElement(dataSources[index] || []);
        });
        return record;
    });

    csvWriter
        .writeRecords(records)
        .then(() => console.log(`CSV file "${filePath}" written successfully.`))
        .catch((error) => console.error('Error writing CSV file:', error));
};

// Example Usage
generateCSV({
    filePath: 'random_records_values.csv',
    headers: [
        { id: 'timestamp', title: 'Timestamp' },
        { id: 'age', title: 'Age' },
        { id: 'gender', title: 'Gender' },
        { id: 'education', title: 'Education' },
        { id: 'employment', title: 'Employment' },
        ...Array.from({ length: 24 }, (_, i) => ({ id: `response${i + 1}`, title: `Response${i + 1}` }))
    ],
    dataSources: [
        [], // Timestamp
        ['18-24', '25-34', '35-44', '45 and above'],
        ['Male', 'Female'],
        ['Undergraduate', 'Graduate', 'Intermediate', 'Doctorate'],
        ['Student', 'Employed Full Time', 'Employed Part-Time'],
        ...Array(24).fill([1, 2, 3, 4, 5])
    ],
    recordCount: 500,
});
