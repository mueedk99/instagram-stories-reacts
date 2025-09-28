import React, { useEffect, useRef } from "react";
import StoryImage from "./StoryImage";

const StoryViewer = ({ stories, index, onClose, onNav }) => {
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => onNav(index + 1), 5000);
    return () => clearTimeout(timerRef.current);
  }, [index, onNav]);

  return (
    <div
      className="story-viewer-backdrop"
      onClick={(e) =>
        e.clientX < window.innerWidth / 2 ? onNav(index - 1) : onNav(index + 1)
      }
    >
      <div className="story-viewer">
        <StoryImage src={stories[index]?.src} alt={stories[index]?.alt} />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
