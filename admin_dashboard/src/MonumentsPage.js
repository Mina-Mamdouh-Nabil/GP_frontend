import React, { useState } from "react";
import "./MonumentsPage.css";

const MonumentsPage = ({ monuments }) => {
  const [currentMonumentIndex, setCurrentMonumentIndex] = useState(0);

  const handleSliderChange = (event) => {
    setCurrentMonumentIndex(parseInt(event.target.value, 10));
  };

  return (
    <div className="monuments-page">
      <h1>Monuments</h1>
      <div className="slider-container">
        <input
          type="range"
          min={0}
          max={monuments.length - 1}
          value={currentMonumentIndex}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
      {monuments.length > 0 && (
        <div className="monument-card">
          <h2>{monuments[currentMonumentIndex].name}</h2>
          <p>{monuments[currentMonumentIndex].description}</p>
          <p>Location: {monuments[currentMonumentIndex].location}</p>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < monuments[currentMonumentIndex].rating ? "filled" : ""
                }
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonumentsPage;