import Projcard from "./projectcard.js";
import Data from "./Data.js";
function Hero() {
  const cards = Data.map((obj) => {
    return <Projcard key={obj.id} obj={obj} />;
  });

  return (
    <div className='hero-container'>
      <div className='photo-grid-container'>
        <div className='column'>
          <img src='/images/img1.jpg' className='img-photo-grid' />
        </div>
        <div className='column'>
          <img src='/images/img2.jpg' className='img-photo-grid' />
          <img src='/images/img3.jpg' className='img-photo-grid' />
        </div>
        <div className='column'>
          <img src='/images/img4.jpg' className='img-photo-grid' />
          <img src='/images/img5.jpg' className='img-photo-grid' />
        </div>
      </div>
      <div className='line'>
        <hr />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Airbnb is different from most brands. We're a community of individuals,
        and yet there's a consistency holding us together through the values we
        share. We have a common belief in belonging, but everyone's expression
        of it will naturally always be a little different.
      </p>
      <div className='project-card-container'>{cards}</div>
    </div>
  );
}

export default Hero;
