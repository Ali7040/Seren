import React, { useState } from 'react';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);
    // Process the input here and set the output accordingly
    setOutputText(inputValue.split('').reverse().join(''));
  };

  return (
    <div className="flex items-center space-x-4">
    </div>
  );
};

export default Main;
