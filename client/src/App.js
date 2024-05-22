import React from "react";
import PhotoUpload from "./components/PhotoUpload";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="App">
      <h1>Photo Sharing App</h1>
      <PhotoUpload />
      <PhotoList />
    </div>
  );
}

export default App;
