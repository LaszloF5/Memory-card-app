import React from "react";
import "./CreateCard.css";
import Card from "./Card";

export default function CreateCard() {
  const [tempFrontValue, setTempFrontValue] = React.useState("");
  const [tempBackValue, setTempBackValue] = React.useState("");
  const [values, setValues] = React.useState([]);

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
    if (tempFrontValue === "" || tempBackValue === "") {
      alert("Please fill both fields");
      return;
    }
    const newCard = {
      frontValue: tempFrontValue,
      backValue: tempBackValue,
      isFlipped: false,
    };
    if (values.includes(tempFrontValue)) {
      alert("This frontside value already exists. Please add a new value.");
      return;
    }
    setValues([...values, tempFrontValue]);
    setCards([...cards, newCard]);

    setTempFrontValue("");
    setTempBackValue("");
  };

  const handleDelete = (index) => {
    let deleteValue = cards[index].frontValue;
    setValues(values.filter((value) => value !== deleteValue));
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleFlip = (index) => {
    setCards(
      cards.map((card, i) => {
        if (i === index) {
          return { ...card, isFlipped: !card.isFlipped };
        } else {
          return card;
        }
      })
    );
  };

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
          <Card
            handleDelete={handleDelete}
            handleFlip={handleFlip}
            isFlipped={card.isFlipped}
            key={index}
            frontValue={card.frontValue}
            backValue={card.backValue}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
