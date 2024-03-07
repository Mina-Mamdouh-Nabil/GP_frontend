import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <input type="range" min="0" max="100" defaultValue="50" className="slider-input" />
    </div>
  );
};

export default Slider;