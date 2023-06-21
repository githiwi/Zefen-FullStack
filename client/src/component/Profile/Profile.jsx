

import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../userContext/UserContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState({ songs: [], artists: [] });

  useEffect(() => {
    if (user) {
      setFavorites({
        songs: user.favoriteSongs,
        artists: user.favoriteArtists,
      });
    }
  }, [user]);

  const isSongFavorite = (songId) => {
    return favorites.songs.some((song) => song.id === songId);
  };

  return (
    <div>
      <h1>{user?.username}'s Profile</h1>
      <h2>Favorite Songs</h2>
      <ul>
        {favorites.songs.map(song => (
          <li key={song.id} className={isSongFavorite(song.id) ? "favorite-song" : ""}>
            {song.title}
          </li>
        ))}
      </ul>
      {/* Rest of the code */}
    </div>
  );
};

export default Profile;
