
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../component/userContext/UserContext";
import axios from "../util/axiosInstance";
import "./Details.css";

const Details = () => {
  const { user } = useContext(UserContext);

  // const userId = user["user"].userId;
  const userId = user && user["user"] ? user["user"].userId : null;

  const [category, setCategory] = useState(null);
  const [clickedSongs, setClickedSongs] = useState([]);

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
            index === self.findIndex((t) => t._id === value._id)
        );
      setArtist(resArrayArtist);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSongToFavorites = async (songId) => {
    try {
      if (clickedSongs.includes(songId)) {
        // If the song is already in favorites, remove it from the clickedSongs state
        setClickedSongs((prevState) => prevState.filter((id) => id !== songId));
      } else {
        // If the song is not in favorites, add it to the clickedSongs state
        setClickedSongs((prevState) => [...prevState, songId]);
      }
  
      // Send the request to add/remove the song from favorites
      const response = await axios.post(
        `/api/users/${userId}/favorites/songs/${songId}`
      );
      console.log("Added/Removed Song to Favorites", response);
    } catch (error) {
      console.error("Failed to add/remove song to favorites", error);
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
    <div className="container">
      <h2>Artists:</h2>
      <div className="row">
        {artist?.map((artist) => (
          <div className="col-md-4" key={artist._id}>
            <div className="card">
              <img
                src={artist.artistImage}
                alt={artist.firstName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{artist.firstName}</h5>
                <button 
                  className={`favorite-button ${
                    clickedSongs.includes(artist._id) ? "clicked" : ""
                  }`}
                  onClick={() => handleAddArtistToFavorites(artist._id)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Songs:</h2>
      <div className="row">
        {category?.map((song) => (
          <div className="col-md-4" key={song._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text">{song.artist}</p>
                <audio controls className="mt-2">
                  <source src={process.env.REACT_APP_BACKEND_URL + song.musicUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <button
                  className={`favorite-button ${
                    clickedSongs.includes(song._id) ? "clicked" : ""
                  }`}
                  onClick={() => handleAddSongToFavorites(song._id)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
