import React, { useState, useEffect } from 'react'

export default function Game() {
  const [diceOne, setDiceOne] = useState(1); 
  const [diceTwo, setDiceTwo] = useState(1);
  const [point, setPoint] = useState(undefined);



  useEffect(() => {
    diceRoll();
  }, [])

  const diceRoll = () => {
    // const one =  Math.Floor(Math.Random * 6)
    setDiceOne(Math.floor(Math.random() * 6) + 1);

    setDiceTwo(Math.floor(Math.random() * 6) + 1); 

    console.log(diceOne, diceTwo)
  };



  return (
    <div>
      <p>Dice One: {diceOne} </p>
      <p>Dice Two: {diceTwo} </p>
      <p>Point: {point} </p>
    </div>
  )
}

