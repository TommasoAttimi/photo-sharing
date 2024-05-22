import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("http://localhost:3000/api/photos");
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <div className="photo" key={photo._id}>
          <h2>{photo.title}</h2>
          <img
            src={`http://localhost:3000${photo.imageUrl}`}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
