import React, { useState, useEffect } from "react";
import charactersService from "../../../services/characters.service";
import CharacterCard from "../../characterCard";

const CharacterPage = ({ characterId }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter();
  }, []);

  async function getCharacter() {
    try {
      const result = await charactersService.get(characterId);

      setCharacter(result);
    } catch (error) {}
  }

  if (character) {
    return <CharacterCard character={character} />;
  } else {
    return <h1>Loading character</h1>;
  }
};

export default CharacterPage;
