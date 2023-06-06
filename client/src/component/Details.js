
import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import musicalGenre from "./Data";
import "../component/Details.css";

export default function Details() {
  
  const [selectedGenre, setSelectedGenre] = useState({});


  let { genrename } = useParams();

  useEffect(() => {
    setSelectedGenre(musicalGenre[genrename]);
  }, [genrename]);
  
  return (
    <div className="detailrelative">
      <div className="detail">
        <h2>{selectedGenre.title}</h2>

        <p>{selectedGenre.description}</p>
        <ul>
          {selectedGenre.songs &&
            selectedGenre.songs.map((song, index) => (
              <li key={index}>
                {song.title} - {song.artist}
                <div className="artiImage">
                  <img src={song.image} />
                  <audio controls>
                    <source src={song.music} type="audio/mpeg"></source>
                  </audio>
                </div>
              </li>
            ))}
        </ul>
       
      </div>
    </div>
  );
}
//-------------------------------------------------------------------------
// export default function Details({selectedGenre}){
//   return (
//     <>
//     <div className="card" style="width: 18rem;">
//   <img src="..." className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">An item</li>
//     <li className="list-group-item">A second item</li>
//     <li className="list-group-item">A third item</li>
//   </ul>
//   <div className="card-body">
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div>
//     </>
//   )
// }