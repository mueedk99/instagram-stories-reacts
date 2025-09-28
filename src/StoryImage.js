import React, { useState } from "react";

const StoryImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <span className="loading-text">Loading…</span>}
      <img
        src={src}
        alt={alt}
        className={loading ? "loading" : ""}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default StoryImage;
