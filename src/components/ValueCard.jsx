import React, { useState, useEffect } from 'react';

export default function ValueCard({ label, value, setvalue }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setvalue(inputValue);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='grid grid-cols-2 place-items-center text-sm bg-gray-50 dark:bg-dark-gray-600 p-2 rounded-md'>
      <span className='p-1'>{label}</span>
      <div className='flex'>
        <input
          placeholder='10'
          type='number'
          className='w-20 p-1 rounded border'
          value={inputValue}
          onChange={handleInputChange}
        />
        <span className='p-1'>px</span>
      </div>
    </div>
  );
}
