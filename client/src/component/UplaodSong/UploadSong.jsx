//import "./UploadSong.css";
import React, { useState } from "react";
import axios from "../../util/axiosInstance";

// export default function UploadSong() {
//     const [uploadedImage, setUploadedImage] = useState(null)
//     const onSubmitForm = async(event) => {
//         event.preventDefault()

//         const formData = new FormData(event.target)
//         //lets make req to server
//         try {
//             const res = await axios.post('/api/files/create',formData)
//             setUploadedImage(res.data.newFile._id);
//         } catch (error) {
//             console.error(error);
//         }

//     }
//   return (
//     <>
//     <h1>UploadSong</h1>

//     {uploadedImage && <img src={`${axios.defaults.baseURL}/api/files/byid/${uploadedImage}`} />}
//     <form onSubmit={onSubmitForm}>
//     <input type="file" name="image" multiple={false}/>
//     <button>upload</button>
//     </form>

//       {/* <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             value={title}
//             onChange={handleTitleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="artist" className="form-label">
//             Artist
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="artist"
//             value={artist}
//             onChange={handleArtistChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="file" className="form-label">
//             File
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="file"
//             accept="audio/*"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Upload
//         </button>
//       </form>
//      */}
//     </>
//   )
// }

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [songData, setSongData] = useState({
    title: "",
    artists: "",
    gener: "",
  });

  const handleInputChange = (e) => {
    setSongData({ ...songData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", songData.title);
    formData.append("artists", songData.artists);
    formData.append("gener", songData.gener);

    try {
      const response = await axios.post("/api/songs/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Handle success or redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={songData.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="artists"
        value={songData.artists}
        onChange={handleInputChange}
        placeholder="Artists"
      />
      <input
        type="text"
        name="gener"
        value={songData.gener}
        onChange={handleInputChange}
        placeholder="Genre"
      />
      <input type="file" name="file" onChange={handleFileChange} />

      <button type="submit">Upload</button>
      {/* <button>Add Song</button> */}
    </form>
  );
};

export default UploadForm;
