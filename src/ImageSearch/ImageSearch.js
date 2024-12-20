import React, { useState } from "react";

function ImageSearch() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const searchImages = () => {
    https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo
    setImages([]);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "30%" }}>
      <h2>Tìm kiếm hình ảnh</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm hình ảnh"
      />
      <button onClick={searchImages}>Tìm</button>
      <div>
        {images.length === 0
          ? "Không tìm thấy hình ảnh."
          : images.map((img, index) => <img key={index} src={img} alt="result" />)}
      </div>
    </div>
  );
}

export default ImageSearch;

