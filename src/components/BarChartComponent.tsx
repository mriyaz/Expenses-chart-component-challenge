// Import React, useState, useEffect from React, and necessary components from Recharts
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BarChartProps } from '../types';


// Function to determine the current day to highlight the corresponding bar
const getCurrentDay = () => {
    // Logic to determine current day
    return new Date().toLocaleDateString('en-us', { weekday: 'short' }).toLowerCase();
};

// Define the BarChartComponent functional component with its props
const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {

    const currentDay = getCurrentDay();

    // Render the bar chart using the ResponsiveContainer for responsiveness
    return (
        // Tailwind CSS can be used within the className attribute for styling

        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis tickLine={false} dataKey="day" />
                <Tooltip cursor={{ fill: 'transparent' }} />
                {/* Map over your data to create individual bars */}
                <Bar dataKey="amount" radius={[5, 5, 0, 0]} barSize={40}>
                    {
                        data.map((entry, index) => {
                            const color = entry.day === currentDay ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
                            return <Cell fill={color} />;
                        })
                    }
                </Bar>
             
            </BarChart>
           
        </ResponsiveContainer>

    );
};

// Export your component
export default BarChartComponent;
