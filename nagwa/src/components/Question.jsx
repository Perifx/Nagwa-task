import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ChoiceContext } from "../context/ChoiceContexr";
import { WordsContext } from "../context/WordsContext";
import Choices from "./Choices";
import "./Choices.css";

const Question = () => {
  let { id } = useParams();
  let { choice } = useContext(ChoiceContext);
  let { words, finalScoreHandler } = useContext(WordsContext);
  let [neededWord, setNeededWord] = useState([]);
  let [isTrue, setIsTrue] = useState();
  let [alert, setAlert] = useState(false);
  let [counter, setCounter] = useState(parseInt(id));
  let [trueAnswers, setTrueAnswers] = useState(0);
  const navigate = useNavigate();

  const alertHandler = () => {
    setTimeout(() => {
      setAlert(false);
      navigate(`/practice/${counter}`);
    }, 3000);
  };

  useEffect(() => {
    if (words) {
      setNeededWord(
        words.filter((word, index) => index === parseInt(id) - 1)[0]
      );
    }
  }, [counter, words]);

  useEffect(() => {
    if (counter > 10) {
      setCounter(1);
      finalScoreHandler(trueAnswers);
      navigate("/rank");
    } else {
      setCounter(counter + 1);
    }
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAlert(true);
    if (neededWord.pos === choice) {
      setIsTrue(true);
      setTrueAnswers(trueAnswers + 1);
    } else {
      setIsTrue(false);
    }
    alertHandler();
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <span className="fs-5 fw-bold">{neededWord && neededWord.word}</span> is
        a/an .........
      </p>
      {alert && (
        <div className={`alert py-1 alert-${isTrue ? "success" : "danger"}`}>
          {isTrue ? "Great !!" : "Ohoh !!"}
        </div>
      )}
      <Choices />
      <Button type="submit" className="my-4" variant="success">
        Submit
      </Button>
    </form>
  );
};

export default Question;
