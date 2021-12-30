import React from "react";

import CharacterListPage from "./pages/characterListPage/characterListPage";

import Header from "./header";

const Characters = () => {
  // разделяем заголовок и контент
  return (
    <>
      <div className="d-flex column">
        <Header />
        <CharacterListPage />
      </div>
    </>
  );
};

export default Characters;
