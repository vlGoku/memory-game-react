import { useState } from "react";
import "@picocss/pico";
import "./App.css";
import MemoryGame from "./components/MemoryGame";
import MemoryGameContainer from "./components/MemoryGame.container";

function App() {
  return (
    <>
      <h1>Memory-Game</h1>
      <div className="Game">
        {/*         <div className="score">Hier kommt der Score hin</div>
        <div className="game-board">Hier kommt das Game hin</div> */}
        <MemoryGameContainer />
      </div>
    </>
  );
}

export default App;
