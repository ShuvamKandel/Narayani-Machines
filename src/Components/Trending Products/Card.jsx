import React from 'react';
import './Card.scss';

const Card = ({ imageSrc, title, bodyText }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card image" className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{bodyText}</p>
      </div>
    </div>
  );
};

export default Card;
