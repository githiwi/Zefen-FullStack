import React from "react";
// if the SearchList component were used as such, it would be acquiring up space on the whole of the screen as the data increases, to oppose that, a Scroll component was created
export default function Scroll(props) {
  return (
      <div style={{ overflowY: "scroll", height: "70vh" }}>
        {props.children}
      </div>
  );
}
