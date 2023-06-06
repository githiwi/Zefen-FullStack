import React, { useEffect, useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import axios from "axios";
export default function Search() {
  const [searchField, setSearchField] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      console.log("get songs");
      const response = await axios.get("http://localhost:4000/api/artist/allArtist");
      setArtists(response.data);
      console.log("artists", artists);
    } catch (error) {
      console.error("error", error);
    }
  };

  const filteredArtist = artists?.filter((artist) => {
    return (
      artist.firstName
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      artist.lastName
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase())
      
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredArtist={filteredArtist} />
      </Scroll>
    );
  }
  return (
    <section className="garamond">
      <div className="purple georgia ma0 grow">
        <h2 className="f2">Search Artist</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search an artist"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}
