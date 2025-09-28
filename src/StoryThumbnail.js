import React from "react";

const StoryThumbnail = ({ story, onClick }) => {
  return (
    <img
      src={story.src}
      alt={story.alt}
      className="story-thumbnail"
      onClick={() => onClick(story.id)}
    />
  );
};

export default StoryThumbnail;
