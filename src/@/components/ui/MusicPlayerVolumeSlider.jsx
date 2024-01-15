import React, { useState } from 'react';

const MusicPlayerVolumeSlider = ({ value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <div className='volumeslider absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 bg-[#262626] h-28 w-8 mb-1.5 rounded pt-1.5 pb-1.5 border border-bordercolor'> 
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
        style={{
          WebkitAppearance: 'slider-vertical',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      />
    </div>
  );
};

export default MusicPlayerVolumeSlider;
