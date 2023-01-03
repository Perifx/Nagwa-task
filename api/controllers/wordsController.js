const dotenv = require("dotenv");
const fs = require("fs");

const hasOrNot = (pos, arr) => {
  return arr.some((obj) => obj.pos === pos);
};

const getRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

const validtyHandler = (arr) => {
  let isValid = false;
  let newArr = [];
  do {
    newArr = getRandom(arr, 10);
    if (
      hasOrNot("noun", arr) &&
      hasOrNot("verb", arr) &&
      hasOrNot("adverb", arr) &&
      hasOrNot("adjective", arr)
    ) {
      isValid = true;
      return newArr;
    }
  } while (isValid);
};

exports.wordsList = (req, res) => {
  const filePath = process.env.FILE_PATH;
  const readedData = fs.readFileSync(filePath, "utf-8");
  const { wordList } = JSON.parse(readedData);
  res.json(validtyHandler(wordList));
};
