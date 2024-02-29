
import React, { useState, useEffect } from 'react';
import { SpendingDataType } from './types';
import data from './data.json';
import BarChartComponent from './components/BarChartComponent';
import logo from './images/logo.svg';


function App() {
  const [spendingData, setSpendingData] = useState<SpendingDataType[]>([]);
  // Use the useEffect hook to fetch the data from the local JSON file when the component mounts
  useEffect(() => {
    // Fetch and set data here
    setSpendingData(data)
  }, []);

  return (
    <div className="container bg-custom-cream  ">

      <div className=' w-full px-5 min-h-screen py-10 mx-auto md:w-[40%] md:pt-24'>
        {/* Show the balance at the top */}
        <div className=" p-5  bg-custom-soft-red rounded-lg shadow 
      flex justify-between items-center text-gray-100 my-5">

          <div>
            <p>My balance</p>
            <h1 className='text-2xl font-semibold'>$921.48</h1>
          </div>

          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="p-4 bg-white rounded shadow space-y-5">

          <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>

          <BarChartComponent data={spendingData} />

          <hr className='bg-gray-400' />

          {/* Total this month. */}
          <div>
            <p className='text-gray-400  font-semibold'>Total this month</p>
            <div className="flex justify-between items-center">
              <h1 className='text-3xl font-bold text-gray-600'>$478.33</h1>
              <div className='flex flex-col items-end'>
                <p className='font-bold text-gray-600'>+2.4%</p>
                <p className='text-gray-400  font-semibold'>from last month</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
