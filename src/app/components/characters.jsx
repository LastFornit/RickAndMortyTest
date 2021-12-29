import React from "react";
import { useParams } from "react-router-dom";
import CharacterListPage from "./pages/characterListPage/characterListPage";
import CharacterPage from "./pages/characterPage/characterPage";
import Header from "./header";

const Characters = () => {
  const params = useParams();

  const { characterId, page } = params;

  return (
    <>
      <div className="d-flex column">
        <Header />
        {characterId ? (
          <CharacterPage characterId={characterId} />
        ) : (
          <CharacterListPage />
        )}
      </div>
    </>
  );
};

export default Characters;
