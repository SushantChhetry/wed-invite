import React from "react";

const Story = () => {
  const storyBlock = { justifyContent: "center", padding: "10%" };
  const storyStyle = {};
  return (
    <div className="Story" style={storyBlock}>
      <h1>Our Story</h1>
      <p className="Story" style={storyStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default Story;
