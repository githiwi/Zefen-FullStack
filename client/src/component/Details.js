
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
