import { useState } from "react";
import Word from "./components/Word/Word.jsx";
import "./App.css";
import Timer from "./components/Timer/Timer.jsx";

export default function App() {
  const word =
    "The quick brown fox jumped over the lazy dog's back near the old barn while the happy cows mooed loudly in the green pasture on a warm sunny spring day as the cool breeze blew through the tall trees.".split(
      " "
    );
  const [correct, setCorrect] = useState(Array(word.length).fill(false));
  const [activeWord, setActiveWord] = useState(0);
  const [userInpt, setUserInpt] = useState("");
  const [startTime, setStartTimer] = useState(false);

  function handleSpaceKeyPress(val) {
    setUserInpt(val);
    if (!startTime) {
      setStartTimer(true);
    }
    const newCorrectArray = [...correct];
    if (val.endsWith(" ")) {
      word.forEach((w, i) => {
        if (val.trim() === w && i === activeWord) {
          setActiveWord((pre) => pre + 1);
          setUserInpt("");
          newCorrectArray[i] = true;
          if (activeWord === word.length - 1) {
            setStartTimer(false);
            setUserInpt("completed");
            return;
          }
        } else if (val.trim() !== w && i === activeWord) {
          setActiveWord((pre) => pre + 1);
          setUserInpt("");
          newCorrectArray[i] = false;
          if (activeWord === word.length - 1) {
            setStartTimer(false);
            setUserInpt("completed");
            return;
          }
        }
      });
      setCorrect(newCorrectArray);
    }
  }

  return (
    <div className="container">
      <Timer
        startTimer={startTime}
        correctWord={correct.filter(Boolean).length}
      />
      <div className="word-container">
        {word.map((wrd, key) => {
          return (
            <Word
              word={wrd}
              correct={correct[key]}
              active={activeWord}
              key={key}
              keyId={key}
            />
          );
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInpt}
          onChange={(e) => handleSpaceKeyPress(e.target.value)}
        />
        <button onClick={() => window.location.reload()}>reset</button>
      </div>
    </div>
  );
}
