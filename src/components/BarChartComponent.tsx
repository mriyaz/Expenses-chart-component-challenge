// Import React, useState, useEffect from React, and necessary components from Recharts
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SpendingDataType, BarChartProps } from '../types';



// Function to determine the current day to highlight the corresponding bar
const getCurrentDay = () => {
    // Logic to determine current day
    return new Date().toLocaleDateString('en-us', { weekday: 'short' }).toLowerCase();
};

interface CustomObject {
    active: boolean,
    payload: any
}

const CustomTooltip: React.FC<CustomObject> = ({ active, payload }) => {
    // Check if a bar is hovered
    if (!active || !payload) return null;
 
    // Access desired data from payload
    const data1 = payload[0].payload.amount; // Access data1 from your data object   

    return (
        <div className="px-2 py-1 bg-black text-white rounded-lg">
            <p>${data1}</p>          
        </div>
    );
};

// Define the BarChartComponent functional component with its props
const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState('');

    const handleMouseEnter = (index: string) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex('');
    };

    const currentDay = getCurrentDay();

    // Render the bar chart using the ResponsiveContainer for responsiveness
    return (
        // Tailwind CSS can be used within the className attribute for styling

        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis tickLine={false} dataKey="day" />
                <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip active={hoveredIndex !== null} payload={data} />} />
                {/* Map over your data to create individual bars */}
                <Bar dataKey="amount" radius={[5, 5, 0, 0]} barSize={40} style={{ cursor: 'pointer' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
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
