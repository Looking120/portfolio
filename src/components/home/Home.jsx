import React from 'react';
import './home.css';
import SocialSection from './SocialSection';
import HomeUs from './HomeUs';

const Home = () => {
    return (
        <section className="home section">
            <div className="home-container container gap">
                <div className="home-contain grid">
                    <SocialSection />

                    <div className="img-home"></div>
                    <HomeUs />
                </div>
            </div>
        </section>
    );
}

export default Home;