import React from "react";

const BACKEND_URL ="https://zefenmusicapp.onrender.com/";

export default function Card({ artist }) {

  return (
    <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="br-100 h3 w3 dib "
        alt={artist.firstName}
        src={BACKEND_URL + artist.artistImage}
      />
      <div style={{ color: "purple" }}>
        <h2>{artist.firstName}</h2>
        <h2>{artist.lastName}</h2>
        {/* <audio controls>
          <source src={artist.music} type="audio/mpeg"></source>
        </audio> */}
      </div>
    </div>
  );
}
