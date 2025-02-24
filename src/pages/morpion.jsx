import React, { useEffect, useState } from "react";
import MorpionTurn from "../components/morpionTurn.jsx";
import Grid from "../components/grid.jsx";
import MorpionScore from "../components/morpionScore.jsx";
import MorpionWinning from "../components/morpionWinning.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer.jsx";

function Morpion() {
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { player1, player2, mode } = location.state || {};
  const [lastGameData, setLastGameData] = useState({
    players: { player1: null, player2: null },
    score: { XWinCount: 0, TieCount: 0, OWinCount: 0 },
    turn: { isXNext: true },
    result: { grid: Array(9).fill(null) },
  });
  
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
        setWinningCells([a, b, c]);
        return grid[a];
      }
    }
    
    if (grid.every((cell) => cell !== null)) {
      return "Tie";
    }
    
    return null;
  };
  
  const getAiMove = (grid) => {
    const emptyCells = grid
      .map((cell, index) => (cell === null ? index : -1))
      .filter((index) => index !== -1);
    
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    return randomIndex;
  };
  
  const handleCellClick = (index) => {
    // Si le jeu est terminé (gagnant ou égalité), on empêche le clic
    if (winner || lastGameData.result.grid[index] || gameFinished) {
      return;
    }
    
    // Détermine le symbole à placer
    const symbol = lastGameData.turn.isXNext ? "X" : "O";
    
    // Met à jour la grille
    const newGrid = [...lastGameData.result.grid];
    newGrid[index] = symbol;
    
    // Vérifie s'il y a un gagnant
    const gameWinner = checkWinner(newGrid);
    
    // Met à jour le score si nécessaire
    const updatedScore = { ...lastGameData.score };
    if (gameWinner) {
      if (gameWinner === "X") updatedScore.XWinCount += 1;
      else if (gameWinner === "O") updatedScore.OWinCount += 1;
      else if (gameWinner === "Tie") updatedScore.TieCount += 1;
    }
    
    // Met à jour les données du jeu
    const updatedGameData = {
      ...lastGameData,
      result: { grid: newGrid },
      score: updatedScore,
      turn: { isXNext: !lastGameData.turn.isXNext },
    };
    
    saveGame(updatedGameData);
    
    // Définit le gagnant si la partie est terminée
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "O") {
        handleDefeat();
      }
    }
  };
  
  const handleDefeat = () => {
    setGameFinished(true);
    
    const playerData = {
      name: player1,
      wins: lastGameData.score.XWinCount,
    };
    
    localStorage.setItem("playerData", JSON.stringify(playerData));
  };
  
  useEffect(() => {
    if (mode === "vsAI" && !lastGameData.turn.isXNext && !winner && !gameFinished) {
      const aiMove = getAiMove(lastGameData.result.grid);
      if (aiMove !== undefined) {
        handleCellClick(aiMove);
      }
    }
  }, [lastGameData, winner, gameFinished, mode]);
  
  useEffect(() => {
    // Initialiser les données de jeu si elles ne sont pas déjà présentes
    const initialData = {
      players: { player1: player1, player2: player2 || (mode === "vsAI" ? "AI" : player2) },
      score: { XWinCount: 0, TieCount: 0, OWinCount: 0 },
      turn: { isXNext: true },
      result: { grid: Array(9).fill(null) },
    };
    
    setLastGameData((prevData) => ({
      ...prevData,
      ...initialData,
    }));
  }, [player1, player2, mode]);
  
  useEffect(() => {
    // Mettre à jour le localStorage à chaque changement
    localStorage.setItem("lastGameData", JSON.stringify(lastGameData));
  }, [lastGameData]);
  
  const resetGame = () => {
    sessionStorage.setItem("refreshed", "true");
    localStorage.removeItem("lastGameData");
    setWinner(null);
    setGameFinished(false);
    navigate("/");
  };
  
  const resetGrid = () => {
    sessionStorage.setItem("refreshed", "false");
    setLastGameData((prevData) => ({
      ...prevData,
      result: { grid: Array(9).fill(null) },
      turn: { isXNext: true },
    }));
    setWinner(null);
    setGameFinished(false);
  };
  
  const resetScore = () => {
    sessionStorage.setItem("refreshed", "false");
    setLastGameData((prevData) => ({
      ...prevData,
      score: { XWinCount: 0, TieCount: 0, OWinCount: 0 },
    }));
  };
  
  const quit = () => {
    resetGame();
    navigate("/");
  };
  
  const saveGame = (updatedGameData) => {
    if (sessionStorage.getItem("refreshed") !== "true") {
      setLastGameData(updatedGameData);
    }
  };
  
  const nextRound = () => {
    resetGrid();
    winner === "Tie" ? setIsXNext(true) : winner === "O" ? setIsXNext(false) : setIsXNext(true);
  };
  
  const retry = () => {
    resetGrid();
    resetScore();
  };
  
  const saveToRank = () => {
    const winnerData = {
      name: JSON.parse(localStorage.getItem("playerData")).name,
      wins: JSON.parse(localStorage.getItem("playerData")).wins,
    };
    
    navigate('/ranking', { state: { winnerData } });
  };
  
  return (
    <div className="flex flex-col items-center justify-start text-white relative overflow-hidden pt-12">
      <div className="w-full max-w-xl bg-[#182831] shadow-lg rounded-xl p-8 relative z-10 items-center justify-between">
        {winner ? (
          <MorpionWinning
            winner={winner}
            quit={quit}
            nextRound={nextRound}
            retry={retry}
            saveToRank={saveToRank}
            player1={player1}
            player2={player2}
            gameFinished={gameFinished}
          />
        ) : null}
        
        <MorpionTurn isXNext={lastGameData.turn.isXNext} resetGrid={resetGrid} resetGame={resetGame} />
        <Grid grid={lastGameData.result.grid} handleCellClick={handleCellClick} winningCells={winningCells} winner={winner} />
        <MorpionScore
          XWinCount={lastGameData.score.XWinCount}
          TieCount={lastGameData.score.TieCount}
          OWinCount={lastGameData.score.OWinCount}
          player1={player1}
          player2={player2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Morpion;
