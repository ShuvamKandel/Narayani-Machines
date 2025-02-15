import './imageSection.scss';

function ImageSection() {
  return (
    <div className='imageSection'>
      <img src='ExcavatorImage.jpg' alt="Excavator" />
      <div className="overlay-box">
        <h1>Excavating Dreams</h1>
        <p>Road, Load, Excavate</p>
      </div>
    </div>
  );
}

export default ImageSection;
