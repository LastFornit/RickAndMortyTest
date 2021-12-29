import React from "react";

const ContentLocation = ({ name }) => {
  return (
    <div>
      <p className="text-muted mt-2 mb-0">Last known location:</p>
      <p className="card-text">{name}</p>
    </div>
  );
};

export default ContentLocation;
