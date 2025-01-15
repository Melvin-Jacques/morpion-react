import React, { useEffect, useState } from "react";
import MorpionTurn from "./morpionTurn.jsx";
import Grid from "./grid.jsx";
import MorpionScore from "./morpionScore.jsx";
import MorpionWinning from "./morpionWinning.jsx";

function Morpion() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [XWinCount, setXWinCount] = useState(0);
  const [OWinCount, setOWinCount] = useState(0);
  const [TieCount, setTieCount] = useState(0);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  
  const checkWinner = (grid) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (const [a, b, c] of winningCombinations) {
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        setWinningCells([a, b, c])
        return grid[a];
      }
    }
    
    if (grid.every((cell) => cell !== null)) {
      return "Tie";
    }
    
    return null;
  };
  
  useEffect(() => {
    const savedGrid = JSON.parse(localStorage.getItem("morpionGrid")) || Array(9).fill(null);
    const savedIsXNext = JSON.parse(localStorage.getItem("morpionIsXNext"));
    const savedXWinCount = JSON.parse(localStorage.getItem("morpionXWinCount")) || 0;
    const savedOWinCount = JSON.parse(localStorage.getItem("morpionOWinCount")) || 0;
    const savedTieCount = JSON.parse(localStorage.getItem("morpionTieCount")) || 0;
    const savedWinner = JSON.parse(localStorage.getItem("morpionWinner")) || null;
    
    setGrid(savedGrid);
    setIsXNext(savedIsXNext !== null ? savedIsXNext : true); // Default to true
    setXWinCount(savedXWinCount);
    setOWinCount(savedOWinCount);
    setTieCount(savedTieCount);
    setWinner(savedWinner);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("morpionGrid", JSON.stringify(grid));
    localStorage.setItem("morpionIsXNext", JSON.stringify(isXNext));
    localStorage.setItem("morpionWinner", JSON.stringify(winner));
    localStorage.setItem("morpionXWinCount", JSON.stringify(XWinCount));
    localStorage.setItem("morpionOWinCount", JSON.stringify(OWinCount));
    localStorage.setItem("morpionTieCount", JSON.stringify(TieCount));
  }, [grid, isXNext, winner, XWinCount, OWinCount, TieCount]);
  
  const handleCellClick = (index) => {
    if (grid[index] || winner) return;
    
    const newGrid = [...grid];
    newGrid[index] = isXNext ? "X" : "O";
    setGrid(newGrid);
    
    const gameWinner = checkWinner(newGrid);
    if (gameWinner) {
      setWinner(gameWinner);
      
      if (gameWinner === "X") setXWinCount((prev) => prev + 1);
      else if (gameWinner === "O") setOWinCount((prev) => prev + 1);
      else if (gameWinner === "Tie") setTieCount((prev) => prev + 1);
    }
    
    setIsXNext(!isXNext);
  };
  
  const resetGame = () => {
    setGrid(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    localStorage.removeItem("morpionGrid");
    localStorage.removeItem("morpionIsXNext");
    localStorage.removeItem("morpionWinner");
  };
  
  const resetGrid = () => {
    setGrid(Array(9).fill(null));
    setIsXNext(false);
    setWinner(null);
    localStorage.removeItem("morpionGrid");
    localStorage.removeItem("morpionIsXNext");
  }
  
  // Quitter le jeu
  const quit = () => {
    resetGame();
    // window.location.href = "/";
  };
  
  const saveAndContinue = () => {
    resetGrid();
    winner === "Tie" ? setIsXNext(true) : winner === "O" ? setIsXNext(false) : setIsXNext(true);
  };
  
  return (
    <div className="flex flex-col items-center justify-start text-white relative overflow-hidden pt-12">
      <div className="w-full max-w-xl bg-[#182831] shadow-lg rounded-xl p-8 relative z-10 items-center justify-between">
        {winner ? (
          <MorpionWinning
            winner={winner}
            quit={quit}
            saveAndContinue={saveAndContinue}
          />
        ) : null}
        
        <MorpionTurn isXNext={isXNext} resetGame={resetGrid} />
        <Grid grid={grid} handleCellClick={handleCellClick} winningCells={winningCells} winner={winner} />
        <MorpionScore
          XWinCount={XWinCount}
          TieCount={TieCount}
          OWinCount={OWinCount}
        />
      </div>
    </div>
  );
}

export default Morpion;
