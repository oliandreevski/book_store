import React from "react";
import "./book.css";
import defImage from "../assets/default_image.jpg";

const Book = ({ item }) => {
  const image = item.image ? item.image : defImage;
  return (
    <div className="card">
      <div className="card__genre">
        <span className="card__span">{item.genre}</span>
      </div>
      <div className="card__cover">
        <img className="card__img" src={image} alt={item.title} />
      </div>
      <div className="card__description">
        <p className="card__author">{item.author}</p>
        <p className="card__title">{item.title}</p>
      </div>
    </div>
  );
};

export default Book;
