import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-overlay">
                    <h1>Cruz Detailing Services</h1>
                    <p>Premier Mobile Auto Detailing in Arizona</p>
                    <Link to="/Contact">
                        <button className='cta-button'>Request a Quote</button></Link>
                </div>
            </section>

            <section className="intro">
                <h2>Why Choose Cruz?</h2>
                <p>
                    We bring professional car care right to your doorstep. Whether you're at home or at work,
                    Cruz Detailing Services provides reliable, high-quality detailing with top-tier products and unmatched attention to detail.
                </p>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h3>Mobile Convenience</h3>
                    <p>We come to you, fully equipped for interior and exterior detailing services.</p>
                </div>
                <div className="feature-card">
                    <h3>Arizona-Tested</h3>
                    <p>Protect your ride from Arizona's heat and dust with our premium wax and sealant options.</p>
                </div>
                <div className="feature-card">
                    <h3>100% Satisfaction</h3>
                    <p>We stand behind our work with a satisfaction guarantee on all detailing services.</p>
                </div>
            </section>
            <section className="explore-services">
                <h2>Explore Our Services</h2>
                <p>See what Cruz Detailing Services can do for your vehicle.</p>
                <Link to="/services">
                    <button className="cta-button">View Services</button>
                </Link>
            </section>

        </div>

    );
};

export default Home;
