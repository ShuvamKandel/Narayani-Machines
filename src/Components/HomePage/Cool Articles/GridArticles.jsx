import React from 'react';
import './gridArticles.scss';

const GridComponent = () => {
  return (
    <div className="grid">
      <div className="grid__item grid__item--top-left">
        <img src="ExcavatorGrid1.jpg" alt="Image 1" />
      </div>
      <div className="grid__item grid__item--top-right">
        <div className="grid__text-box">
          <h2 className="grid__title">30 Years of Narayani Machines</h2>
          <div className="grid__separator"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
      <div className="grid__item grid__item--bottom-left">
        <div className="grid__text-box">
          <h2 className="grid__title">Connecting people to places</h2>
          <div className="grid__separator"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.         
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
      <div className="grid__item grid__item--bottom-right">
        <img src="ExcavatorGrid2.jpg" alt="Image 2" />
      </div>
    </div>
  );
};

export default GridComponent;
