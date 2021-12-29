import React from "react";
import ContentStatus from "./contentStatus";
import ContentName from "./contentName";
import ContentLocation from "./contentLocation";
import ContentEpisode from "./contentEpisode";

const CardContent = ({ name, status, species, locationName, episode }) => {
  return (
    <div className="col-md-8 ">
      <div className="card-body row">
        <ContentName name={name} />
        <ContentStatus status={status} species={species} />
        <ContentLocation name={locationName} />
        <ContentEpisode episode={episode} />
      </div>
    </div>
  );
};

export default CardContent;
