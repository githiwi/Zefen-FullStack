

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import axiosApiInstance from "../../util/axiosInstance";

import ImageBati from '../../images/bati_2.jpg'
import ImageAbasel from '../../images/Ambassel_scale.gif'
import ImageAnchihoye from '../../images/Anchihoye_2.png'
import ImageTizita from '../../images/tizitaminor_2.png'


const CategoriesPage = () => {
useEffect(()=>{
  fetchGeners()
},[])

  const [geners,setGeners]= useState([])
  const fetchGeners = async () =>{
    try {
      const response = await axiosApiInstance.get("/api/zefens/geners")
      setGeners(response.data)
    } catch (error) {
      console.error("error", error);
    }
  }


  return (
    <div className="categories-page">
      <h1 className="page-title">Categories</h1>
      <div className="category-cards">
        {geners.map((gener) => (
          <div className="card" key={gener.id}>
          
            {gener.category === "Bati" && <img className="card-img-top" src={ImageBati} alt="" />}
            {gener.category === "Ambasel" && <img className="card-img-top" src={ImageAbasel} alt="" />}
            {gener.category === "Anchihoye" && <img className="card-img-top" src={ImageAnchihoye} alt="" />}
            {gener.category === "Tizita" && <img className="card-img-top" src={ImageTizita} alt="" />}
            <div className="card-body">
              <h5 className="card-title">{gener.category}</h5>
              <p className="card-text">{gener.description}</p>
              
              <Link to={`/details/${gener._id}`} className="btn btn-info">Explore</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage