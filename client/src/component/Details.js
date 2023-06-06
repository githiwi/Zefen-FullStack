
import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

import axios from "../util/axiosInstance";

const Details = () => {
  const [category, setCategory] = useState(null);

   let { genrename } = useParams();

  useEffect(() => {
    console.log("musicalGenre",genrename)
    fetchCategory(genrename)
    // setCategory(musicalGenre[genrename]);
  }, [genrename]);
  
  // useEffect(() => {
  //   console.log("why",match.params.id)
  //   const categoryId = match.params.id;
  //   fetchCategory(categoryId);
  // }, [match.params.id]);

  const fetchCategory = async (categoryId) => {
    try {
      const response = await axios.get(`/api/song/byGener/${categoryId}`);
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>{category.name}</h1>
      <p>{category.description}</p> */}
      <h2>Artists:</h2>
      <ul>
        {category.artists?.map((artist) => (
          <li key={artist._id}>{artist.name}</li>
        ))}
      </ul>
      <h2>Songs:</h2>
      <ul>
        {category?.map((song) => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
