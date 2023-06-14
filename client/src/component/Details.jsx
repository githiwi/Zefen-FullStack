

import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../component/userContext/UserContext";
import axios from "../util/axiosInstance";
import "./Details.css";

const Details = () => {
  const { user } = useContext(UserContext);

  const userId = user["user"].userId;

  const [category, setCategory] = useState(null);

  let { genrename } = useParams();

  useEffect(() => {
    console.log("musicalGenre", genrename);
    fetchCategory(genrename);
  }, [genrename]);

  const [artist, setArtist] = useState([]);

  const fetchCategory = async (categoryId) => {
    try {
      const response = await axios.get(`/api/song/byGener/${categoryId}`);
      setCategory(response.data);
      const resArrayArtist = response.data
        .map((element) => element.artists)
        .filter((element) => element !== null)
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex((t) => t._id === value._id)
        );
      setArtist(resArrayArtist);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSongToFavorites = async (songId) => {
    try {
      //const res = await axios.post("/api/users/signin", data);
      const response = await axios.post(`/api/users/${userId}/favorites/songs/${songId}`
      );
      console.log("added Song to Favorites", response);
      // updateUser state after adding song to favorites
    } catch (error) {
      console.error("Failed to add song to favorites", error);
    }
  };

  const handleAddArtistToFavorites = async (artistId) => {
    try {
      const response = await axios.post(
        `/api/users/${userId}/favorites/artists/${artistId}`
      );
      // updateUser state after adding artist to favorites
    } catch (error) {
      console.error("Failed to add artist to favorites", error);
    }
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
<div>
      <h2>Artists:</h2>
      <ul>
        {artist?.map((artist) => (
          <li key={artist._id}>
            --{artist.firstName}--{artist.artistImage}
            <button onClick={() => handleAddArtistToFavorites(artist._id)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
      <h2>Songs:</h2>
      <ul>
        {category?.map((song) => (
          <li key={song._id}>
            {song.title}-{song.artist}
              <audio controls className="mt-2">
                <source src={song.musicUrl} type="audio/mp3" />
                 Your browser does not support the audio element.
               </audio>
            <button onClick={() => handleAddSongToFavorites(song._id)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>

    // <div className="container">
    //   <h2 className="mt-4 mb-3">{category.name}</h2>
    //   <p className="mb-4">{category.description}</p>

    //   <div className="row">
    //     <div className="col-lg-6">
    //       <h3 className="mb-3">Artists:</h3>
    //       <ul className="list-group">
    //         {artst.map((artist) => (
    //           <li key={artist._id} className="list-group-item">
    //             {artist.firstName}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <div className="col-lg-6">
    //       <h3 className="mb-3">Songs:</h3>
    //       <ul className="list-group">
    //         {category.map((song) => (
    //           <li key={song._id} className="list-group-item">
    //             <h5 className="mb-1">{song.title}</h5>
    //             <p className="mb-0">{song.artists}</p>
    //             <audio controls className="mt-2">
    //               <source src={song.musicUrl} type="audio/mp3" />
    //               Your browser does not support the audio element.
    //             </audio>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Details;