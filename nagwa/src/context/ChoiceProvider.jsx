import React from "react";
import { useState } from "react";
import { ChoiceContext } from "./ChoiceContexr";

const choices = [
  { id: 1, choice: "noun" },
  { id: 2, choice: "verb" },
  { id: 3, choice: "adverb" },
  { id: 4, choice: "adjective" },
];

export default function ChoiceProvider(props) {
  let [choice, setChoice] = useState("");

  const clickHandler = (choice) => {
    setChoice(choice);
  };

  let myValue = {
    choices,
    choice,
    clickHandler,
  };
  return (
    <ChoiceContext.Provider value={myValue}>
      {props.children}
    </ChoiceContext.Provider>
  );
}
