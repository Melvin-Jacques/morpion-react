import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer.jsx";
import HomeGameMode from "../components/homeGameMode.jsx";
import HomePseudo from "../components/homePseudo.jsx";
import HomeStartGame from "../components/homeStartGame.jsx";

function Home() {
  const [pseudo1, setPseudo1] = useState('');
  const [pseudo2, setPseudo2] = useState('');
  const [mode, setMode] = useState('vsAI');
  const navigate = useNavigate();
  
  const startGame = () => {
    if (mode === "vsAI" && !pseudo1) {
      alert("You need an username first");
    } else {
      const player1 = pseudo1 || "Player 1";
      const player2 = mode === "vsPlayer" ? (pseudo2 || "Player 2") : "AI";
      
      navigate("/game", {
        state: { player1, player2, mode },
      });
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-start text-white relative overflow-hidden pt-12">
      <div className="w-full max-w-md rounded-xl p-12 relative z-10">
        <h1 className="text-2xl font-bold text-[#36CDCA] mb-6 text-center">
          Welcome to the
          <div className={"text-4xl text-[#36CDCA] flex items-center justify-center mt-3 mb-5"}>
            <p className={"text-[#F6BC47] mx-2"}>React</p>
            <p>Tic </p>
            <p className={"text-[#F6BC47]"}>Tac </p>
            <p>Toe !</p>
          </div>
        </h1>
        <HomeGameMode mode={mode} setMode={setMode} />
        <HomePseudo
          mode={mode}
          pseudo1={pseudo1}
          pseudo2={pseudo2}
          setPseudo1={setPseudo1}
          setPseudo2={setPseudo2}
        />
        <HomeStartGame
          startGame={startGame}
          mode={mode}
          pseudo1={pseudo1}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
