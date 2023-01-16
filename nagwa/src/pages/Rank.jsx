import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RankContext } from "../context/RankContext";
import { WordsContext } from "../context/WordsContext";

const Rank = () => {
  let { finalScore } = useContext(WordsContext);
  let { rankCalc, finalRank } = useContext(RankContext);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  useEffect(() => {
    rankCalc(finalScore);
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column mt-5 pt-5">
      <h3>Your Rank</h3>
      <h1>{finalRank}</h1>
      <Button className="mt-4" onClick={clickHandler}>
        Try Again
      </Button>
    </div>
  );
};

export default Rank;
