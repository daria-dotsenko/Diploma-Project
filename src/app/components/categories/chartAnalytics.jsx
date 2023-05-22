import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const expenseData = [
    { day: 'Mon', expense: 200 },
    { day: 'Tue', expense: 150 },
    { day: 'Wed', expense: 300 },
    { day: 'Thu', expense: 250 },
    { day: 'Fri', expense: 180 },
    { day: 'Sat', expense: 220 },
    { day: 'Sun', expense: 270 },
];

const CharAnalytics = () => {
    return (
        <LineChart width={500} height={300} data={expenseData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="expense" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
};

export default CharAnalytics;
