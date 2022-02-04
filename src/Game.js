import React, { useState, useEffect } from 'react'

export default function Game() {
  const [diceOne, setDiceOne] = useState(1); 
  const [diceTwo, setDiceTwo] = useState(1);
  const [point, setPoint] = useState(undefined);
  const [board, setBoard] = useState({
    four: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    }, 
    five: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    },
    six: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    },
    eight: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    },
    nine: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    },
    ten: {
      buy: 0, 
      lay: 0, 
      come: 0, 
      comeOdds: 0, 
      dontCome: 0, 
      dontComeOdds: 0, 
    },
    hardTwo: 0,
    hardTen: 0,
    hardSix: 0,
    hardEight: 0, 
    twoCraps: 0, 
    threeCraps: 0, 
    twelveCraps: 0, 
    yoEleven: 0, 
    sevenCraps: 0, 
    anyCraps: 0, 
    field: 0, 
    passLine: 0, 
    passLineOdds: 0, 
    dontPass: 0, 
    dontPassOdds: 0,
    Come: 0, 
    dontCome: 0, 
  });



  useEffect(() => {


  })

  const diceRoll = () => {
    setDiceOne(Math.floor(Math.random() * 6) + 1);
    setDiceTwo(Math.floor(Math.random() * 6) + 1); 
    console.log(diceOne, diceTwo)
    definePoint();
  };

  const definePoint = () => {
      if (diceOne + diceTwo === 4 || 5 || 6 || 8 || 9 || 10) {
        setPoint(diceOne + diceTwo);
      };

      if (point !== undefined && (diceOne + diceTwo === 7)) {
        setPoint(undefined);
      }
    
  };




  return (
    <div>
      <p>Dice One: {diceOne} </p>
      <p>Dice Two: {diceTwo} </p>
      <p>Point: {point} </p>
      <button onClick={diceRoll}>Roll Dice</button>
    </div>
  )
}

