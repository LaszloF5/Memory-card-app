import React from "react";
import "./CreateCard.css";
import Card from "./Card";

export default function CreateCard() {
  const [tempFrontValue, setTempFrontValue] = React.useState("");
  const [tempBackValue, setTempBackValue] = React.useState("");

//   const [frontValue, setFrontValue] = React.useState("");
//   const [backValue, setBackValue] = React.useState("");

  const [cards, setCards] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFront = (e) => {
    setTempFrontValue(e.target.value);
  };

  const handleBack = (e) => {
    setTempBackValue(e.target.value);
  };

  const handleCreate = () => {
    const newCard = {frontValue: tempFrontValue, backValue: tempBackValue};
    setCards([...cards, newCard]);
    setTempFrontValue('');
    setTempBackValue('');
  };

  const handleDelete = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  }

  return (
    <>
      <form method="GET" action="#" className="form" onSubmit={handleSubmit}>
        <label htmlFor="front-side">
          Front side:
          <input
            type="text"
            value={tempFrontValue}
            name="front-side"
            id="front-side"
            onChange={handleFront}
          />
        </label>
        <label htmlFor="back-side">
          Back side:
          <input
            type="text"
            value={tempBackValue}
            name="back-side"
            id="back-side"
            onChange={handleBack}
          />
        </label>
        <button className="btn-submit" type="button" onClick={handleCreate}>
          Create card
        </button>
      </form>
      <div className="game-container">
       {cards.map((card, index) => (
        <Card handleDelete={handleDelete} key={index} frontValue={card.frontValue} backValue={card.backValue} index={index}/>
       ))}
      </div>
    </>
  );
}
