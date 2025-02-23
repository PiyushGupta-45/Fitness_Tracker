import React, { useState } from 'react';

const BMR = () => {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("male");
  const [BmrResult, setBmrResult] = useState(null);

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

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const calculateBMR = () => {
    if (Weight && Height && Age) {
      let bmr;
      if (Gender === 'male') {
        bmr = 10 * parseFloat(Weight) + 6.25 * parseFloat(Height) - 5 * parseFloat(Age) + 5;
      } else {
        bmr = 10 * parseFloat(Weight) + 6.25 * parseFloat(Height) - 5 * parseFloat(Age) - 161;
      }
      setBmrResult(bmr.toFixed(2));
    }
  };

  return (
    <>
      <p className='text-center py-3 my-4 bg-emerald-200 dark:bg-gray-800 font-medium text-2xl'>
        Here you can Calculate the BMR of your body
      </p>
      <div className='flex flex-col items-center'>
        <p className='text-[20px] font-medium'>BMR CALCULATOR</p>
        <div className='border border-emerald-600 my-5 px-5 py-5'>
          <div className='pb-1'>
            <label htmlFor='Gender' className='text-[18px]'>Select Gender: </label>
            <select
              className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center'
              value={Gender}
              onChange={handleGenderChange}
            >
              <option className='dark:text-black' value='male'>Male</option>
              <option className='dark:text-black' value='female'>Female</option>
            </select>
          </div>
          <div className='pb-1'>
            <label htmlFor='Weight' className='text-[18px]'>Enter Your weight (in KG): </label>
            <input
              className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center'
              id='Weight'
              type='text'
              inputMode='numeric'
              value={Weight}
              onChange={handleWeightChange}
              placeholder='Enter Here'
            />
          </div>
          <div className='pt-2 py-1'>
            <label htmlFor='Height' className='text-[18px]'>Enter Your height (in CM): </label>
            <input
              className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center'
              id='Height'
              type='text'
              inputMode='numeric'
              value={Height}
              onChange={handleHeightChange}
              placeholder='Enter Here'
            />
          </div>
          <div className='pt-2 py-1'>
            <label htmlFor='Age' className='text-[18px]'>Enter Your age (in years): </label>
            <input
              className='ml-1 text-[18px] text-black dark:text-white shadow dark:shadow-gray-900 text-center'
              id='Age'
              type='text'
              inputMode='numeric'
              value={Age}
              onChange={handleAgeChange}
              placeholder='Enter Here'
            />
          </div>
          <button
            className='mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600'
            onClick={calculateBMR}
          >
            Calculate BMR
          </button>
        </div>
        {BmrResult && (
          <div className='mt-4 text-xl font-semibold text-emerald-600'>
            Your BMR is: {BmrResult} kcal/day
          </div>
        )}
      </div>
    </>
  );
};

export default BMR;