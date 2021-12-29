import React from "react";
import CardContent from "./cardContent";
import CardImage from "./cardImage";

const CharacterCard = ({ character, onClick }) => {
  return (
    <>
      {character && (
        <div
          className="character-card-wrapper card mb-3  rounded-3 "
          onClick={
            onClick
              ? () => {
                  onClick(character);
                }
              : () => {}
          }
        >
          <div className="row g-0 ">
            <CardImage imageUrl={character.image} altName={character.name} />
            <CardContent
              name={character.name}
              status={character.status}
              species={character.species}
              locationName={character.location.name}
              episode={character.episode[0] ? character.episode[0].name : ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterCard;
