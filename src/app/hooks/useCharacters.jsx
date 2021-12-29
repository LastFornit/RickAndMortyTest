import React, { useContext, useEffect, useState } from "react";
import charactersService from "../characters.service";
import { toast } from "react-toastify";

const CharacterContext = React.createContext();

export const useCharacter = () => {
  return useContext(CharacterContext);
};

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCharacters();
  }, []);
  async function getCharacters() {
    try {
      const { content } = await charactersService.get();
      setCharacters(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  function errorCatcher(error) {
    const { message } = error.response.data;

    setError(message);
  }
  return (
    <CharacterContext.Provider value={{ characters }}>
      {!isLoading ? children : "Loading...."}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
