import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import {HangmanWord,HangmanDrawing,Keyboard } from './components'
function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setguessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: " 800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
