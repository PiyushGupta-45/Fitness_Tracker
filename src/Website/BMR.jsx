import React from 'react'
import { useState } from 'react';
const BMR = () => {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Age, setAge] = useState("");
  const handleWeightChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setWeight(value);
  };
  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setHeight(value);
  };
  const handleAgeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAge(value);
  };
  return (
    <>
    <p className='text-center py-3 my-5 bg-emerald-200 dark:bg-gray-800 font-medium text-2xl'>Here you can Calculate the BMR of your body</p>
    <div className='text-center '>
      For Men: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) + 5. 
      <br/>
      For Women:BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) - 161.
    </div>
    <div className='flex flex-col items-center '>
      <p className='text-[20px] font-medium'>BMR CALCULATOR</p>
      <div className='border border-emerald-600 my-5 px-5 py-5'>
      <div className='pb-1'>
          <label htmlFor="Weight" className='text-[18px]'>Enter Your weight number Here (in KG): </label>
          <input
            className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center dark:duration-500'
            id='Weight'
            type="text"
            inputMode='numeric'
            value={Weight}
            onChange={handleWeightChange}
            placeholder="Enter Here"
          />
        </div>
      <div className='pt-2 py-1'>
          <label htmlFor="Height" className='text-[18px]'>Enter Your height number Here (in KG): </label>
          <input
            className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center dark:duration-500'
            id='Height'
            type="text"
            inputMode='numeric'
            value={Height}
            onChange={handleHeightChange}
            placeholder="Enter Here"
          />
        </div>
      <div className='pt-2 py-1'>
          <label htmlFor="age" className='text-[18px]'>Enter Your age number Here (in years): </label>
          <input
            className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center dark:duration-500'
            id='age'
            type="text"
            inputMode='numeric'
            value={Age}
            onChange={handleAgeChange}
            placeholder="Enter Here"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default BMR