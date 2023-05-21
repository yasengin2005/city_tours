import React, { useState } from "react";
import "./Tour.scss";

const Tour = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const { id, img, name, city, info } = props.tour;

  const toggleButton = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="tours">
      <div className="img-container">
        <img src={img} alt="cities" />
        <span
          className="close-btn"
          onClick={() => {
            props.removeTour(id);
          }}
        >
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={toggleButton}>
            <i className="fas fa-caret-square-down" />
          </span>
          {showInfo && <p>{info}</p>}
        </h5>
      </div>
    </article>
  );
};

export default Tour;
