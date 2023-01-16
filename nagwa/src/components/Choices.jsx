import React from "react";
import { useContext } from "react";
import { ChoiceContext } from "../context/ChoiceContexr";
import "./Choices.css";

const Choices = () => {
  let { choices, clickHandler } = useContext(ChoiceContext);
  return choices.map((choice) => (
    <div className="radiobtn" key={choice.id}>
      <input
        type="radio"
        id={choice.id}
        name="choices"
        value={choice.choice}
        onClick={() => clickHandler(choice.choice)}
      />
      <label htmlFor={choice.id}>{choice.choice}</label>
    </div>
  ));
};

export default Choices;
