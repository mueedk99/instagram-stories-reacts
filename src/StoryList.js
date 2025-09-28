import React from "react";
import StoryThumbnail from "./StoryThumbnail";

const StoryList = ({ stories, onStorySelect }) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <StoryThumbnail key={story.id} story={story} onClick={onStorySelect} />
      ))}
    </div>
  );
};

export default StoryList;
