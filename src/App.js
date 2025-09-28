import React, { useState } from "react";
import { stories } from "./stories";
import StoryList from "./StoryList";
import StoryViewer from "./StoryViewer";
import "./App.css";

const App = () => {
  const [storyIndex, setStoryIndex] = useState(null);

  const openStory = (id) =>
    setStoryIndex(stories.findIndex((s) => s.id === id));
  const closeViewer = () => setStoryIndex(null);
  const navStory = (idx) => {
    if (idx < 0 || idx >= stories.length) closeViewer();
    else setStoryIndex(idx);
  };

  return (
    <div className="container">
      <h3 className="header">Stories</h3>
      <StoryList stories={stories} onStorySelect={openStory} />
      {storyIndex !== null && (
        <StoryViewer
          stories={stories}
          index={storyIndex}
          onClose={closeViewer}
          onNav={navStory}
        />
      )}
      <div className="instructions">
        Tap image to view. Tap left/right side of viewer for previous/next.
      </div>
    </div>
  );
};

export default App;
