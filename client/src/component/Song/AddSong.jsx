import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance.js';
import './AddSong.css'
const AddSong = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [gener, setGener] = useState("");

  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState(["Bati", "Ambasel", "Anchihoye", "Tizita"]);

  useEffect(() => {
    // Load artists from your API when the component mounts
    axios.get('/api/artist/allArtist')
      .then(res => setArtists(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const songData = new FormData(e.target);
    songData.append('title', title);
    songData.append('artists', artist);
    //songData.append('musicUrl', musicUrl);
    songData.append('gener', gener);
    console.log("why",songData)
    axios.post('/api/song/addSong', songData).then(res => {
      console.log("Song created successfully", res.data);
    }).catch(err => {
      console.error(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <select value={artist} onChange={(e) => setArtist(e.target.value)}>
          {artists.map(a => <option key={a._id} value={a._id}>{`${a.firstName} ${a.lastName}`}</option>)}
        </select>
      </label>
      <label>
        Music URL:
        <input type="file" name="audio" onChange={(e) => setMusicUrl(e.target.files[0])} />
      </label>
      <label>
        Genre:
        <select value={gener} onChange={(e) => setGener(e.target.value)}>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </label>
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default AddSong;