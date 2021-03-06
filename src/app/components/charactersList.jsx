import React from "react";

import CharacterCard from "./characterCard";
import SelectedCharacterCard from "./selectedCharacterCard";

const CharactersList = ({
  characters,
  selectedCharacter,
  onClick,
  onClose,
}) => {
  // отображаем список персонажей и, если есть, выбранного персонажа
  return (
    <>
      {characters.length > 0 &&
        characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={onClick}
            />
          );
        })}
      {selectedCharacter && (
        <SelectedCharacterCard
          character={selectedCharacter}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default CharactersList;
