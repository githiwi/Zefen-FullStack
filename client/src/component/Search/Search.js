import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

export default function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredArtist = details?.filter((artist) => {
    return (
      artist.first_name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      artist.last_name
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
