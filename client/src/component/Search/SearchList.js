import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function SearchList() {
  
  const [artist, setArtist] = useState("");

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      console.log("get songs");
      const response = await axios.get("http://localhost:4000/api/song/list");
      setArtist(response.data);
      console.log("artists", artist);
    } catch (error) {
      console.error("error", error);
    }
  };
  // const filtered = filteredArtist?.map(artist=> <Card key={artist.id} artist={artist}/>);

  return <div>{/* {filtered} */}</div>;
}
