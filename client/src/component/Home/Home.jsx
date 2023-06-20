import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import kerar from "../../images/kerar.jpg";
import recoImage from '../../images/paintb11.webp'
import recoImage2 from '../../images/shema.jpg'
import recoImage3 from '../../images/mulatu.jpeg'
import laterst1 from '../../images/abelcover.jpeg'
import laterst2 from '../../images/astercover.jpeg'
import laterst3 from '../../images/ggcover.jpeg'

import cover1b from '../../images/baticover.jpg'
import cover2an from '../../images/masinkoplaying.jpg'
import cover3t from '../../images/mehamud.jpeg'
import cover4am from '../../images/Maritu-Legesse.jpg'
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        {/* <h1 className="app-title">EthioTunes</h1> */}
        {/* <p className="tagline">Discover the soul of Ethiopian music</p> */}
        {/* <Link to="/signup" className="cta-button">Get Started</Link> */}
      </div>

      {/* <section className="featured-section">
        <h2>Featured Artists</h2>
     
      </section> */}

      <section className="genres-section">
        <h2>Explore Genres</h2>
        <div className="card-container">
          <div className="card">
            <img src={cover1b} className="card-image" alt="Genre 1" />
            <div className="card-body">
              <h5 className="card-title">Bati</h5>
              {/* <p className="card-text">Description of Genre 1.</p> */}
            </div>
          </div>
          <div className="card">
            <img src={cover2an} className="card-image" alt="Genre 1" />
            <div className="card-body">
              <h5 className="card-title">Anchihoye</h5>
              {/* <p className="card-text">Description of Genre 1.</p> */}
            </div>
          </div>
          <div className="card">
            <img src={cover3t} className="card-image" alt="Genre 2" />
            <div className="card-body">
              <h5 className="card-title">Tizita</h5>
              {/* <p className="card-text">Description of Genre 2.</p> */}
            </div>
          </div>
          <div className="card">
            <img src={cover4am} className="card-image" alt="Genre 3" />
            <div className="card-body">
              <h5 className="card-title">Ambase</h5>
              {/* <p className="card-text">Description of Genre 3.</p> */}
            </div>
            
          </div>
        </div>
      </section>

      <section className="latest-section">
        <h2>Latest Releases</h2>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={laterst1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={laterst2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={laterst3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </section>

      {/* <section className="playlists-section">
        <h2>Curated Playlists</h2>
    
      </section> */}

      <section className="recommendations-section">
        <h2>Personalized Recommendations</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                src={recoImage2}
                className="card-image"
                alt="Recommendation 1"
              />
              <div className="card-body">
                <h5 className="card-title">Recommendation 1</h5>
                <p className="card-text">Description of recommendation 1.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src={recoImage}
                className="card-image"
                alt="Recommendation 2"
              />
              <div className="card-body">
                <h5 className="card-title">Recommendation 2</h5>
                <p className="card-text">Description of recommendation 2.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src={recoImage3}
                className="card-image" 
                alt="Recommendation 3"
              />
              <div className="card-body">
                <h5 className="card-title">Recommendation 3</h5>
                <p className="card-text">Description of recommendation 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What People Are Saying</h2>
        {/* Display testimonials or reviews */}
      </section>

    
    </div>
  );
};

export default HomePage;
