import React from "react";

const CardBtnClose = ({ onClose }) => {
  // кнопка закрыть на карточке выбранного персонажа
  return (
    <div
      className="btn-close-modal"
      onClick={() => {
        onClose();
      }}
    >
      <button
        type="button"
        className="btn btn-primary btn-close "
        aria-label="Close"
      ></button>
    </div>
  );
};

export default CardBtnClose;
