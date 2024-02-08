import { useState } from "react";
import "@picocss/pico";
import "./App.css";
import MemoryGame from "./components/MemoryGame";
import MemoryGameContainer from "./components/MemoryGame.container";

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateClickCount = (newCount: number) => {
    setClickCount(newCount);

    if (newCount > bestScore) {
      setBestScore(newCount);
    }
  };

  return (
    <>
      <div className="gameContainer">
        <h1 className="heading">Memory-Game</h1>
        <div className="game">
          <MemoryGameContainer onCounterUpdate={updateClickCount} />
        </div>
      </div>
    </>
  );
}

export default App;
