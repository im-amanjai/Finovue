import React from 'react';
import { useNavigate } from 'react-router-dom'; //import navigation hook

function Hero() {
  const navigate = useNavigate(); //initialize the hook

  const handleSignupClick = () => {
    navigate('/signup'); //redirect to signup page
  };

  return ( 
    <div className='container p-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='hero_image' className='mb-5 img-fluid' />
        <h1 className='mt-4'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button
          className='p-2 btn btn-primary fs-5'
          style={{ width: "60%", maxWidth: "300px", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
