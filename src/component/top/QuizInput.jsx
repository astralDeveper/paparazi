import React from 'react';

const QuizInput = ({ option, selectedOption, onOptionChange }) => {
  const isChecked = selectedOption === option;
  const optionText = option.split(':')[0]; // "Option A", "Option B", etc.
  const answerText = option.split(':')[1].trim(); // The actual answer text

  const handleChange = () => {
    onOptionChange(option);
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className={`[&_input]:border-2 checked:[&_input]:border-[9px] [&_input]:border-[#D2940A] [&_input]:appearance-none [&_input]:size-8 [&_input]:rounded-full [&_input]:cursor-pointer flex items-center justify-between gap-4 bg-white text-[#757575] transition-all text-2xl w-[800px] p-6 rounded-xl shadow-lg ${isChecked ? 'border-l-[28px] border-[#D2940A] max-sm:border-l-[10px]' : ''}`}>
          <label htmlFor={option} className='flex items-center cursor-pointer'>
            <div className='flex max-sm:flex-col'>
              <span className='transition-all mr-2 max-sm:text-sm'>{optionText}:</span>
              <span className={`transition-all max-sm:text-sm ${isChecked ? 'text-black' : ''}`}>{answerText}</span>
            </div>
          </label>
          <input
            className='transition-all shrink-0'
            type="radio"
            id={option}
            name="fav_language"
            value={option}
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default QuizInput;
