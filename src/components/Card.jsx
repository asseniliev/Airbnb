import React from 'react';

export default function Card() {
  return (
    <div className="card-container">
      <img src="../src/assets/images/katie-zaferes.png" className="card-image" />
      <div className="card-stats">
        <img src="../src/assets/images/star.png" className="card-starimg" />
        <span className="card-blacktext">5.0</span>
        <span className="card-graytext">(6)</span>
        <span className="card-graytext">&#183;</span>
        <span className="card-graytext">USA</span>
      </div>
      <p className="card-blacktext card-description">Life lessons with Katie Zaferes</p>

    </div>
  )
}