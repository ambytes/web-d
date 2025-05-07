import { useState } from "react";
import React from "react";

const Play = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();


  const genRandomNo = () => {
    if (selectedNumber) {
      const generatedNo = Math.ceil(Math.random() * 6);
      console.log(generatedNo);
      setDice(generatedNo);

      if (selectedNumber === generatedNo) {
        setScore((prev) => prev + generatedNo);
      }else{setScore((prev) => prev - 2);}
    } else { setError("Please select a number"); }
  }

  const [dice, setDice] = useState(1);

  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const [error, setError] = useState(null);

  const [score, setScore] = useState(0);

  return (
    <>
      <div className="flex-row justify-items-center items-center h-screen">
        <h1
          className={`text-5xl font-bold pt-2 ${
            error ? "text-red-600" : "text-black"
          }`}
        >
          {error ? error : "Select Number"}
        </h1>
        <button  className={`flex my-2 p-2 absolute top-0 right-1 border rounded-lg bg-gray-500 text-white hover:bg-blue-500`}>
          Home
        </button>
        <div className="flex mb-4">
          {numbers.map((value) => (
            <div
              onClick={() => {
                onNumberClicked(value);
              }}
              className={`key-{value} flex m-6 justify-center rounded-md items-center w-[50px] h-[50px] bg-black ${
                selectedNumber === value ? "bg-green-500" : "bg-black"
              } text-white text-2xl`}
            >
              {value}
            </div>
          ))}
        </div>
        <img
          src={`/dice/dice${dice}.png`}
          alt=""
          className="w-30"
          onClick={genRandomNo}
        />
        <p className="text-gray-400 mb-6">Click on the dice to roll</p>
        <h2
          className={`text-8xl font-bold ${
            score < 0 ? "text-red-600" : "text-green-400"
          } mb-6`}
        >
          {score}
        </h2>
        <h2 className="text-4xl font-bold mb-1">Total Score</h2>
        <button
          onClick={() => {
            setScore(0);
            onNumberClicked();
          }}
          className="my-2 p-2 border rounded-lg bg-gray-500 text-white hover:bg-red-600"
        >
          Reset Score
        </button>
      </div>
    </>
  );
};

export default Play;
