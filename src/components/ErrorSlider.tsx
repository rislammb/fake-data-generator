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

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
    onChange(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 1000);
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="error-number">Errors:</label>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        value={inputValue}
        onChange={handleSliderChange}
        className="range range-xs"
      />
      <input
        id="error-number"
        type="number"
        min={0}
        max={1000}
        step={0.1}
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered w-[72px]"
      />
    </div>
  );
}
