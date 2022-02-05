import React from 'react';
import Navigation from '../components/Navigation';


import '../style/pages/css/home.css';

function Home() {
  return (
    <div className="home">
        <Navigation />
        <div className="home-main">
            <div className="main-content">
                <h2 className="display-6 text-white">THE LIQUIDITY PROTOCOL</h2>
                <h3 className="display-6 h3-linear-gradient">$ 14 785 874, 58</h3>
            </div>
        </div>
        
        
    </div>
  );
}

export default Home;
