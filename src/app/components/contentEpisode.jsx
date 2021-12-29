import React from "react";

const ContentEpisode = ({ episode }) => {
  if (!Array.isArray(episode)) {
    if (episode) {
      return (
        <div>
          <p className="text-muted mt-2 mb-0">First seen in:</p>
          <p className="card-text">{episode}</p>
        </div>
      );
    }
    return <span className="text-muted mt-2 mb-0">Episodes loading...</span>;
  }
  return (
    <div>
      <p className="text-muted mt-2 mb-0 ">Episodes:</p>
      <div className="episode-list">
        {episode.map((e) => (
          <div key={e.url} className="card-text">
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEpisode;
