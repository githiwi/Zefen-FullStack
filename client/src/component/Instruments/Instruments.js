import React from "react";
import "./Instruments.css";
import kebero from "../../images/kebero.jpeg";
import mesenko from "../../images/mesenko.jpeg";
import kirar from "../../images/kirar.jpeg";

export default function Instruments() {
  return (
    <div className="innstrumets1">
    <div className="innstrumets">
      <div>
        <img src={mesenko} alt="" />
        <h2>This is masinqo</h2>
        <p>
          A late twentieth century single stringed horsehair fiddle and bow of
          the type known as a Masenqo from Ethiopia. The goat skin covered
          lozenge shaped soundbox is bisected by a wooden neck and peg and a
          single horse hair string. It is tuned by means of a large tuning peg
          at the top of the neck. The instrument is used by Ethiopian minstrels,
          or azmaris ("singer" in Amharic) and requires considerable virtuosity.
        </p>
      </div>
      <div>
        <img src={kebero} alt="" />
        <h2>This is Kebero</h2>
        <p style={{marginTop:"8rem"}}>
          A Kebero (Amharic: ከበሮ) is a double-headed, conicdal hand drum used in
          the traditional music of Eritrea, Sudan and Ethiopia. A piece of
          animal hide is stretched over each end of the instrument, thus forming
          a membranophone. A large version of the kebero is also used in
          Ethiopian and Eritrean Orthodox Christian liturgical music, while
          smaller versions are used in secular celebrations.
        </p>
      </div>
      <div>
        <img src={kirar} alt="" />
        <h2>This is Kerar</h2>
        <p>
          Krar is a five-or-six stringed bowl-shaped lyre from Ethiopia and
          Eritrea. It is tuned to a pentatonic scale. A modern Krar may be
          amplified, much in the same way as an electric guitar or violin. The
          Krar, along with Masenqo and the Washint, is one of the most
          widespread musical instruments of the Amhara ethnic group
        </p>
      </div>
    </div>
    </div>
  );
}
