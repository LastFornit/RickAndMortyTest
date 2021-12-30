import React from "react";
import CardBtnClose from "./cardBtnClose";
import CardContent from "./cardContent";
import CardImage from "./cardImage";

const SelectedCharacterCard = ({ character, onClose }) => {
  // карточка выбранного персонажа.
  //CardImage и CardContent используются теже, что и в основном списке персонажей, но немного с другими параметрами
  return (
    <>
      <div className="character-card-wrapper-modal card mb-3 rounded-3 modal">
        <div
          className="row g-0 modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <CardImage
            imageUrl={character.image}
            altName={character.name}
            classType="vertical"
          />
          <CardContent
            name={character.name}
            status={character.status}
            species={character.species}
            locationName={character.location.name}
            episode={character.episode}
          />
          <CardBtnClose onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default SelectedCharacterCard;
<></>;
