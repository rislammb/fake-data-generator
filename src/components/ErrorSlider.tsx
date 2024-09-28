import React, { useState } from "react";

interface ErrorSliderProps {
  errorCount: number;
  onChange: (value: number) => void;
}

export default function ErrorSlider({
  errorCount,
  onChange,
}: ErrorSliderProps) {
  const [inputValue, setInputValue] = useState(errorCount);

  // Handler for slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
    onChange(value);
  };

  // Handler for number input field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 1000); // Enforce limit between 0 and 1000
    setInputValue(value);
    onChange(value);
  };

  return (
    <div>
      <label htmlFor="error-slider">Errors per Record: </label>
      <input
        id="error-slider"
        type="range"
        min={0}
        max={10}
        step={0.1}
        value={inputValue}
        onChange={handleSliderChange}
      />{" "}
      <input
        id="error-number"
        type="number"
        min={0}
        max={1000}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
