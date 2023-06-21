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



      <section className="genres-section">
        <h2>Explore Genres</h2>
        <div className="card-container">
          <div className="card">
             <Link to={`/details/647af85db1187698767f514b`}>
                <img className="card-img-top" src={cover1b} alt="" />
              </Link>
          
            <div className="card-body">
              <h5 className="card-title">Bati</h5>
             
            </div>
          </div>
          <div className="card">
          <Link to={`/details/64807784ca04b8f8b8df39e8`}>
                <img className="card-img-top" src={cover2an} alt="" />
              </Link>
          
            <div className="card-body">
              <h5 className="card-title">Anchihoye</h5>
           
            </div>
          </div>
          <div className="card">
            {/* <img src={cover3t} className="card-image" alt="Genre 2" /> */}
            <Link to={`/details/647c5048d30942cc59c5cf06`}>
                <img className="card-img-top" src={cover3t} alt="" />
              </Link>
            <div className="card-body">
              <h5 className="card-title">Tizita</h5>
            
            </div>
          </div>
          <div className="card">
          <Link to={`/details/647c4dd0d30942cc59c5cf04`}>
                <img className="card-img-top" src={cover4am} alt="" />
              </Link>
         
            <div className="card-body">
              <h5 className="card-title">Ambase</h5>
           
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



      <section className="recommendations-section">
        <h2>Recommendations</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                src={recoImage2}
                className="card-image"
                alt="Recommendation 1"
              />
              <div className="card-body">
                <h5 className="card-title">Azmari -አዝማሪ </h5>
                <p className="card-text">Azmari comparable to medieval European minstrels or bard </p>
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
                <h5 className="card-title">Krar - ክራር </h5>
                <p className="card-text"> Ethipian traditional musics </p>
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
                <h5 className="card-title">Mulatu Astatke</h5>
                <p className="card-text">The man who created 'Ethio jazz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  

    
    </div>
  );
};

export default HomePage;

