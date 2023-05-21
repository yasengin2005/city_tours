import React, { useState } from "react";
import { tourData } from "../tourData";
import Tour from "../Tour/Tour";
import "./TourList.scss";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    const sortedTour = tours.filter((tour) => tour.id !== id);
    setTours(sortedTour);
  };
  return (
    <section className="tour-list">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default TourList;
