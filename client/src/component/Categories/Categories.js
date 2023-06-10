// import "./Categories.css";
// import { Link } from "react-router-dom";
// import musicalGenre from "../Data";

// export default function Categories() {
//   return (
//     <div className="boxes">
//       {Object.keys(musicalGenre).map((key) => (
//         <button className={key}>
//           <Link to={`/details/${key}`}>{musicalGenre[key].title}</Link>
//         </button>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import axios from "axios";

const CategoriesPage = () => {
useEffect(()=>{
  fetchGeners()
},[])

  const [geners,setGeners]= useState([])
  const fetchGeners = async () =>{
    try {
      const response = await axios.get("http://localhost:4000/api/zefens/geners")
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
            <img className="card-img-top" src={gener.generImage} alt={gener.category} />
            <div className="card-body">
              <h5 className="card-title">{gener.category}</h5>
              <p className="card-text">{gener.description}</p>
              
              <Link to={`/details/${gener._id}`} className="btn btn-primary">Explore</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
