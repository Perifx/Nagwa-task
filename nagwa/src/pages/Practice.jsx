import React, { useContext } from "react";
import { useEffect } from "react";
import Question from "../components/Question";
import { WordsContext } from "../context/WordsContext";

const Practice = () => {
  let { getWordsList } = useContext(WordsContext);
  useEffect(() => {
    getWordsList();
  }, []);
  return (
    <div className="container">
      <div className="text-center fs-4 my-4 fw-bold">Practice Screen</div>
      <div className="mt-5">
        <h4>Choose the Correct Answer: -</h4>
      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <Question />
      </div>
    </div>
  );
};

export default Practice;
