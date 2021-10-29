import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const YesNoVote = () => {
  // use state hook to store the index of the star clicked
  //? is setRating function just useState ?
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      <button
        type="button"
        key="{index}"
        // if index <= rating, "on" else "off"
        className={index <= (hover || rating) ? "on" : "off"}
        // clicking a star calls setRating for that star
        onClick={() => setRating(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(rating)}
      >
        <span className="star">&#9733;</span>
      </button>
      <button
        type="button"
        key="{index}"
        // if index <= rating, "on" else "off"
        className={index <= (hover || rating) ? "on" : "off"}
        // clicking a star calls setRating for that star
        onClick={() => setRating(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(rating)}
      >
        <span className="star">&#9733;</span>
      </button>
      ); })}
    </div>
  );
};

export default YesNoVote;
