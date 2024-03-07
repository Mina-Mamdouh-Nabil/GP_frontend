import React from 'react';
import './MonumentCard.css';

const MonumentCard = ({ monument }) => {
  return (
    <div className="monument-card">
      <h2>{monument.name}</h2>
      <p>Description: {monument.description}</p>
    </div>
  );
};

export default MonumentCard;