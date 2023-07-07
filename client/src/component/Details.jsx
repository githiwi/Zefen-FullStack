import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./userContext/UserContext";

import axios from "../util/axiosInstance";

const BACKEND_URL ="https://zefenmusicapp.onrender.com/";
// const BACKEND_URL=http://localhost:4000/

const Details = () => {
  const { user } = useContext(UserContext);

  const userId = user && user["user"] ? user["user"].userId : null;
  const [favoritedSongs, setFavoritedSongs] = useState(new Set());

  let { genreId } = useParams();

  useEffect(() => {
    fetchSongsByGener(genreId);
  }, [genreId]);

  useEffect(() => {
    if (userId) {
      fetchFavoriteSongs(userId);
    }
  }, [userId]);

  const fetchFavoriteSongs = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}/favorites/songs`);
      
      setFavoritedSongs(new Set(response.data.favoriteSongs.map(song => song._id)));
      console.log("after FIRST fetch from db=>", response.data.favoriteSongs.map(song => song._id));
    } catch (error) {
      console.error("Failed to fetch favorite songs", error);
    }
  };

  const [songs, setSongs] = useState(null);

  useEffect(() => {
    fetchSongsByGener(genreId);
  }, [genreId]);

  const [artist, setArtist] = useState([]);

  const fetchSongsByGener = async (genreId) => {
    try {
      const response = await axios.get(`/api/song/byGener/${genreId}`);
      
      setSongs(response.data);
      console.log("category fetchCategory", JSON.stringify(songs));
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

  const handleToggleSongInFavorites = async (songId) => {
    try {
      if (favoritedSongs.has(songId)) {
        // If the song is already favorited, remove it from favorites.
        const response = await axios.delete(`/api/users/${userId}/favorites/songs/${songId}`);
        console.log("after DELETE to favorites=>", response.data.favoriteSongs);
        const afterRemoveFavoriteSongs = response.data.favoriteSongs.map(song => song._id);
        setFavoritedSongs(prevState => new Set([...prevState].filter(id => id !== songId)));
      } else {
        // If the song is not favorited, add it to favorites.
        const response = await axios.post(`/api/users/${userId}/favorites/songs/${songId}`);
        console.log("after ADD to favorites=>", response.data.favoriteSongs);
        const afterAddFavoriteSongs = response.data.favoriteSongs.map(song => song._id);
        setFavoritedSongs(prevState => new Set([...prevState, songId]));
      }
    } catch (error) {
      console.error("Failed to toggle song in favorites", error);
    }
  };  
  

  const handleAddArtistToFavorites = async (artistId) => {
    try {
      const response = await axios.post(
        `/users/${userId}/favorites/artists/${artistId}`
      );
      // updateUser state after adding artist to favorites
    } catch (error) {
      console.error("Failed to add artist to favorites", error);
    }
  };

  if (!songs) {
    return <div>Loading...</div>;
  }

  return (

    <div className="container">

    <h2>Songs:</h2>
    <div className="row">
      {songs?.map((song) => ( 
        <div className="col-md-4" key={song._id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{song.title}</h5>
              <p className="card-text">{song.artist}</p>
              <audio controls className="mt-2">
              <source src={BACKEND_URL + song.musicUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>

              <button 
                className="btn btn-outline-primary" 
                onClick={() => handleToggleSongInFavorites(song._id)}
              >
                <i className={`${favoritedSongs.has(song._id) ? 'fas' : 'far'} fa-heart`}></i>
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