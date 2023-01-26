import React from "react";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  const containerStyle = { display: "flex", flexDirection: "column" };
  const storyBlock = {
    flex: 3,
    justifyContent: "center",
    alignItem: "center",
    padding: "10%",
    paddingBottom: "5%",
  };
  const imgBlock = {
    flex: 1,
    justifyContent: "center",
    padding: "35%",
    flexWidth: "20px",
  };

  

  const headingStyle = {
    alignItem: "center",
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Our Story</h1>

        <p className="Story" style={storyBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>

        <ImageGallery items={images} style={imgBlock} />
      </div>
    </div>
  );
};

export default Gallery;
