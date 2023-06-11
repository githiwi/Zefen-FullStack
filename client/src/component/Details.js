
//import musicalGenre from "./Data";
//import "../component/Details.css";

// export default function Details() {

//   const [selectedGenre, setSelectedGenre] = useState({});

//   let { genrename } = useParams();

//   useEffect(() => {
//     setSelectedGenre(musicalGenre[genrename]);
//   }, [genrename]);

//   return (
//     <div className="detailrelative">
//       <div className="detail">
//         <h2>{selectedGenre.title}</h2>

//         <p>{selectedGenre.description}</p>
//         <ul>
//           {selectedGenre.songs &&
//             selectedGenre.songs.map((song, index) => (
//               <li key={index}>
//                 {song.title} - {song.artist}
//                 <div className="artiImage">
//                   <img src={song.image} />
//                   <audio controls>
//                     <source src={song.music} type="audio/mpeg"></source>
//                   </audio>
//                 </div>
//               </li>
//             ))}
//         </ul>

//       </div>
//     </div>
//   );
// }
//-------------------------------------------------------------------------

//import axios from "../util/axiosInstance";

// const Details = () => {
//   const [category, setCategory] = useState(null);

//   let { genrename } = useParams();

//   useEffect(() => {
//     console.log("musicalGenre", genrename);
//     fetchCategory(genrename);
//     // setCategory(musicalGenre[genrename]);
//   }, [genrename]);


//   const [artst, SetArtist] = useState([]);
//   const fetchCategory = async (categoryId) => {
//     try {
//       const response = await axios.get(`/api/song/byGener/${categoryId}`);
//       setCategory(response.data);
//       const resArrayArtist = response.data
//         .map((element) => element.artists)
//         .filter((element) => element !== null).filter((value, index, self) =>
//         index === self.findIndex((t) => (
//           t._id === value._id 
//         )));
//       SetArtist(resArrayArtist);
//       console.log(resArrayArtist);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!category) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* <h1>{category.name}</h1>
//       <p>{category.description}</p> */}
//       <h2>Artists:</h2>
//       <ul>
//         {artst?.map((artist) => (
//           <li key={artist._id}>
//             --{artist.firstName}--{artist.artistImage}
//           </li>
//         ))}
//       </ul>
//       <h2>Songs:</h2>
//       <ul>
//         {category?.map((song) => (
//           <li key={song._id}>
//             {song.title}-{song.artist}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Details;
//--------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../util/axiosInstance";
import "./Details.css";

const Details = () => {
  const [category, setCategory] = useState(null);

  let { genrename } = useParams();

  useEffect(() => {
    console.log("musicalGenre", genrename);
    fetchCategory(genrename);
  }, [genrename]);

  const [artst, SetArtist] = useState([]);

  const fetchCategory = async (categoryId) => {
    try {
      const response = await axios.get(`/api/song/byGener/${categoryId}`);
      setCategory(response.data);
      const resArrayArtist = response.data
        .map((element) => element.artists)
        .filter((element) => element !== null)
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex((t) => t._id === value._id)
        );
      SetArtist(resArrayArtist);
    } catch (error) {
      console.error(error);
    }
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">{category.name}</h2>
      <p className="mb-4">{category.description}</p>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="mb-3">Artists:</h3>
          <ul className="list-group">
            {artst.map((artist) => (
              <li key={artist._id} className="list-group-item">
                {artist.firstName}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-6">
          <h3 className="mb-3">Songs:</h3>
          <ul className="list-group">
            {category.map((song) => (
              <li key={song._id} className="list-group-item">
                <h5 className="mb-1">{song.title}</h5>
                <p className="mb-0">{song.artists}</p>
                <audio controls className="mt-2">
                  <source src={song.musicUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;