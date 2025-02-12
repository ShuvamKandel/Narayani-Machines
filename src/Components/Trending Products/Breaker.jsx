import './breaker.scss';
import Card from './Card';

function Breaker() {
  return (
    <div className="breaker">
      <h1>
        Trending Products
        <img className="arrow" src="arrow.png" alt="arrow" />
      </h1>
      <div className="cards-container">
        <Card
          imageSrc="images/breaker2.png"
          title="BREAKER"
          bodyText="State-of-the-art breaker with a one-year warranty."
        />
        <Card
          imageSrc="images/breaker2.png"
          title="BREAKER"
          bodyText="State-of-the-art breaker with a one-year warranty."
        />
        <Card
          imageSrc="images/breaker2.png"
          title="BREAKER"
          bodyText="State-of-the-art breaker with a one-year warranty."
        />
        <Card
          imageSrc="images/breaker2.png"
          title="BREAKER"
          bodyText="State-of-the-art breaker with a one-year warranty."
        />
      </div>
    </div>
  );
}

export default Breaker;
