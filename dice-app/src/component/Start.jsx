import React from "react";
import { useState } from "react";
import Play from "./Play";

const Start = () => {

  const [gameStarted, setGameStarted] = useState();

  const startGameHandler = () => {
    setGameStarted(true)
  }

  return (
    <>
      {gameStarted ? <Play/> : (<div className="flex justify-center items-center mx-auto">
        <img src="/dices.png" alt="" className="w-[50%]" />
        <div className="flex-column">
          <h1 className="text-6xl">The Dice Game</h1>
          <button onClick={startGameHandler} className="flex justify-self-end my-2 p-2 border rounded-lg bg-black text-white hover:bg-emerald-500">Start Game</button>
        </div>
      </div> )}
      
    </>
  );
};

export default Start;
