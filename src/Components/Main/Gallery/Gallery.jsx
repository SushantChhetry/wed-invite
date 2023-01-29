import React from "react";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import Story from "../Story/Story";

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
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    background: "#DDDED9",
    alignItem: "center",
    justifyContent: "center",
  };
  const storyBlock = {
    flex: 3,
    justifyContent: "center",

    padding: "2%",
  };
  const imgBlock = {
    flex: 1,
    justifyContent: "center",
    flexWidth: "20px",
  };

  const headingStyle = {
    alignItem: "center",
  };

  return (
    <div>
      <div style={containerStyle}>
        <ImageGallery items={images} style={imgBlock} autoPlay={true} />
        <span style={storyBlock}>
          <Story />
        </span>
      </div>
    </div>
  );
};

export default Gallery;
