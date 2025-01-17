import React, { useEffect, useState } from "react";
import MorpionTurn from "../components/morpionTurn.jsx";
import Grid from "../components/grid.jsx";
import MorpionScore from "../components/morpionScore.jsx";
import MorpionWinning from "../components/morpionWinning.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../components/footer.jsx";

function Morpion() {
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
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
        setWinningCells([a, b, c])
        return grid[a];
      }
    }
    
    if (grid.every((cell) => cell !== null)) {
      return "Tie";
    }
    
    return null;
  };
  
  const handleCellClick = (index) => {
    if (lastGameData.result.grid[index] || winner) return;
    
    const newGrid = [...lastGameData.result.grid];
    newGrid[index] = lastGameData.turn.isXNext ? "X" : "O";
    
    const gameWinner = checkWinner(newGrid);
    
    const updatedScore = { ...lastGameData.score };
    if (gameWinner) {
      if (gameWinner === "X") updatedScore.XWinCount += 1;
      else if (gameWinner === "O") updatedScore.OWinCount += 1;
      else if (gameWinner === "Tie") updatedScore.TieCount += 1;
    }
    
    const updatedGameData = {
      ...lastGameData,
      result: { grid: newGrid },
      score: updatedScore,
      turn: { isXNext: !lastGameData.turn.isXNext },
    };
    
    // setLastGameData(updatedGameData);
    // setIsXNext(updatedGameData.turn.isXNext);
    saveGame(updatedGameData);
    sessionStorage.setItem("refreshed", "false");
    
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };
  
  
  useEffect(() => {
    // Détecte l'entrée dans la page ou le rafraîchissement
    const hasRefreshed = sessionStorage.getItem("refreshed");
    if (!hasRefreshed || hasRefreshed === "false") {
      sessionStorage.setItem("refreshed", "true"); // Indique que la page vient d'être chargée
      const savedData = JSON.parse(localStorage.getItem("lastGameData"));
      if (savedData) {
        setLastGameData({
          ...savedData,
          players: {
            player1: savedData.players?.player1 || player1 || "Joueur 1",
            player2: savedData.players?.player2 || player2 || "Joueur 2",
          },
          score: savedData.score || { XWinCount: 0, TieCount: 0, OWinCount: 0 },
          turn: savedData.turn || { isXNext: true },
          result: savedData.result || { grid: Array(9).fill(null) },
        });
      }
    } else {
      sessionStorage.setItem("refreshed", "false"); // Empêche la sauvegarde immédiate
    }
  }, [player1, player2]);
  
  useEffect(() => {
    // Vérifie si les données de la grille sont nulles ou absentes
    if (!lastGameData.result.grid || lastGameData.result.grid.length === 0) {
      setLastGameData({
        players: { player1: player1 || "Joueur 1", player2: player2 || "Joueur 2" },
        score: { XWinCount: 0, TieCount: 0, OWinCount: 0 },
        turn: { isXNext: true },
        result: { grid: Array(9).fill(null) },
      });
    }
  }, [lastGameData.result.grid, player1, player2]);
  
  // C'est pour mettre en storage la data
  useEffect(() => {
    localStorage.setItem("lastGameData", JSON.stringify(lastGameData));
  }, [lastGameData]);
  
  // Rafraichir le Jeu +  la data associée et revenir au menu
  const resetGame = () => {
    sessionStorage.setItem("refreshed", "true");
    localStorage.removeItem("lastGameData")
    setLastGameData({
      players: { player1: null, player2: null },
      score: { XWinCount: 0, TieCount: 0, OWinCount: 0 },
      turn: { isXNext: true },
      result: { grid: Array(9).fill(null) },
    });
    setWinner(null);
    navigate("/");
  };
  
  // Rafraichir le Round en effacant la grille
  const resetGrid = () => {
    sessionStorage.setItem("refreshed", "false");
    setLastGameData((prevData) => ({
      ...prevData,
      result: { grid: Array(9).fill(null) },
      turn: { isXNext: true },
    }));
    setWinner(null);
  };
  
  const quit = () => {
    resetGame();
    navigate("/");
  };
  
  //C'est pour voir si la page n'a pas été rafraichie, comme ca le localstorage prend pas les valeurs rafraichies
  const saveGame = (updatedGameData) => {
    if (sessionStorage.getItem("refreshed") !== "true") {
      setLastGameData(updatedGameData);
    }
  }
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
            player1={player1}
            player2={player2}
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
      <Footer/>
    </div>
  );
}

export default Morpion;
