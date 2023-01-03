const dotenv = require("dotenv");
const fs = require("fs");

exports.rankCalc = (req, res) => {
  const { score } = req.body;
  const filePath = process.env.FILE_PATH;
  const readedData = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(readedData);
  const totalScores = parsedData.scoresList.length;
  const filteredScors = parsedData.scoresList.filter(
    (item) => item < score
  ).length;
  res.json(Math.round(100 * (filteredScors / totalScores) * 100) / 100);
};
