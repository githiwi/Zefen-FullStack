import React, { useState, useEffect } from "react";
import axios from "../../util/axiosInstance.js";
import "./AddSong.css";

const AddSong = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [gener, setGener] = useState("");

  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([
    { id: "647af85db1187698767f514b", name: "Bati" },
    { id: "647c4dd0d30942cc59c5cf04", name: "Ambasel" },
    { id: "64807784ca04b8f8b8df39e8", name: "Anchihoye" },
    { id: "647c5048d30942cc59c5cf06", name: "Tizita" },
  ]);

  useEffect(() => {
    // Load artists from your API when the component mounts
    axios
      .get("/api/artist/allArtist")
      .then((res) => setArtists(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const songData = new FormData(e.target);
    songData.append("title", title);
    songData.append("artists", artist);
    //songData.append('musicUrl', musicUrl);
    songData.append("gener", gener);
    console.log("why", songData);
    axios
      .post("/api/song/addSong", songData)
      .then((res) => {
        console.log("Song created successfully", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <select
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          >
            {artists.map((a) => (
              <option
                key={a._id}
                value={a._id}
              >{`${a.firstName} ${a.lastName}`}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="musicUrl">Music URL</label>
          <input
            type="file"
            id="musicUrl"
            name="audio"
            onChange={(e) => setMusicUrl(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            value={gener}
            onChange={(e) => setGener(e.target.value)}
          >
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input type="submit" value="Add Song" className="add-song-submit" />
        </div>
      </div>
    </form>
  );
};

export default AddSong;
