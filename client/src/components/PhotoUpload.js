import React, { useState } from "react";
import axios from "axios";

const PhotoUpload = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/api/upload", formData);
      alert("Photo uploaded successfully");
    } catch (error) {
      console.error("There was an error uploading the photo!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Photo Title"
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload Photo</button>
    </form>
  );
};

export default PhotoUpload;
