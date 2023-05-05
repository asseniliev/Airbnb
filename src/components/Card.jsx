import React from 'react';

export default function Card(props) {

  let badgeText = null;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  console.log(props);

  return (
    <div className="card-container">
      {badgeText && < div className="card-lable">{badgeText}</div>}
      <img src={"../images/" + props.coverImg} className="card-image" />
      <div className="card-stats">
        <img src="../images/star.png" className="card-starimg" />
        <span className="card-blacktext">{props.stats.rating}</span>
        <span className="card-graytext">({props.stats.reviewCount})</span>
        <span className="card-graytext">•</span>
        <span className="card-graytext">{props.location}</span>
      </div>
      <p className="card-blacktext card-description">{props.title}</p>
      <p className="card-description">
        <span className="card-bold">
          {"From $" + props.price + " "}
        </span>
        <span className="card-graytext">
          / person
        </span>
      </p>
    </div >
  )
}