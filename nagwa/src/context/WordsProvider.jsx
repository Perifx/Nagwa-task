import React from "react";
import { WordsContext } from "./WordsContext";
import axios from "axios";
import { useState } from "react";

export default function WordsProvider(props) {
  let [words, setWords] = useState();
  let [finalScore, setFinalScore] = useState();

  const finalScoreHandler = (score) => {
    setFinalScore(score);
  };

  const getWordsList = async () => {
    try {
      const res = await axios.get("http://localhost:3030/words/wordsList");
      setWords(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const myValue = {
    words,
    getWordsList,
    finalScoreHandler,
    finalScore,
  };
  return (
    <WordsContext.Provider value={myValue}>
      {props.children}
    </WordsContext.Provider>
  );
}
