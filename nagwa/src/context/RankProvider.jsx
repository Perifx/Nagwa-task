import axios from "axios";
import React from "react";
import { useState } from "react";
import { RankContext } from "./RankContext";

export default function RankProvider(props) {
  let [finalRank, setFinalRank] = useState();

  const rankCalc = async (finalScore) => {
    let score = (finalScore / 10) * 100;
    try {
      const res = await axios.post("http://localhost:3030/rank/rankCalc", {
        score: score,
      });
      setFinalRank(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  let myValue = {
    rankCalc,
    finalRank,
  };
  return (
    <RankContext.Provider value={myValue}>
      {props.children}
    </RankContext.Provider>
  );
}
