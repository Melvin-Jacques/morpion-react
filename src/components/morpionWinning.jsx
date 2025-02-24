import React from 'react';
import { useNavigate } from 'react-router-dom';
import X from '../assets/cross.svg';
import O from '../assets/circle.svg';
import Cross from "./cross.jsx";
import Circle from "./circle.jsx";

function MorpionWinning({
                          winner, quit, nextRound, retry, saveToRank,
                          player1, player2, gameFinished, mode
                        }) {
  return (
    <div className="absolute z-40 flex items-center justify-center inset-0 rounded-xl bg-black bg-opacity-50">
      <div className="w-full h-[200px] bg-[#182831] p-4 flex flex-col items-center justify-between">
        {winner === 'Tie' ? (
          <div className="flex items-center justify-center text-xl font-bold text-white mb-4">
            TIE !
          </div>
        ) : winner === 'X' ? (
          <div className="flex items-center justify-center text-xl font-bold text-white mb-4">
            {player1 !== null ? player1 : "Player 1"} won !
          </div>
        ) : (
          <div className="flex items-center justify-center text-xl font-bold text-white mb-4">
            {player2 !== null ? player2 : "Player 2"} won !
          </div>
        )}
        {winner && <p>Le gagnant est : {winner}</p>}
        
        {!gameFinished && (
          <div className="flex items-center justify-center space-x-2">
            {winner === 'Tie' ? (
              <p className="text-2xl font-bold text-white">
                AND SO THE BATTLE SHALL CONTINUE
              </p>
            ) : (
              <>
                <div className={`h-8 ${winner === 'X' ? 'text-[#36CDCA]' : 'text-[#F6BC47]'}`}>
                  {winner === 'X' ? <Cross/> : <Circle/>}
                </div>
                <p
                  className={`text-3xl font-bold ${
                    winner === 'O' ? 'text-[#F6BC47]' : 'text-[#36CDCA]'
                  } ps-3`}
                >
                  TAKES THE ROUND !
                </p>
              </>
            )}
          </div>
        )}
        
        {gameFinished && mode === "vsAI" && (
          <div className="flex items-center justify-center space-x-2">
            <p className="text-2xl font-bold text-white">GAME OVER</p>
          </div>
        )}
        
        {/* Boutons */}
        <div className="flex space-x-4 mt-4 text-[#182831] font-bold items-center">
          <button
            onClick={quit}
            className="px-4 py-2 bg-[#B6CAD3] hover:bg-[#88979e] border-b-4 border-[#7D9AA7] rounded-md"
          >
            QUIT
          </button>
          
          {!gameFinished && (
            <button
              onClick={nextRound}
              className="px-4 py-2 bg-[#F6BC47] hover:bg-[#CE8E14] border-b-4 border-[#CE8E14] rounded-md"
            >
              NEXT ROUND
            </button>
          )}
          
          {/* Boutons spécifiques à la fin du jeu */}
          {gameFinished && (
            <>
              {mode === "vsAI" ? (
                <>
                  <button
                    onClick={retry}
                    className="px-4 py-2 bg-[#F6BC47] hover:bg-[#CE8E14] border-b-4 border-[#CE8E14] rounded-md"
                  >
                    RETRY
                  </button>
                  <button
                    onClick={saveToRank}
                    className="px-4 py-2 bg-[#36CDCA] hover:bg-[#2A9E9C] border-b-4 border-[#2A9E9C] rounded-md"
                  >
                    RANK
                  </button>
                </>
              ) : (
                <button
                  onClick={nextRound}
                  className="px-4 py-2 bg-[#F6BC47] hover:bg-[#CE8E14] border-b-4 border-[#CE8E14] rounded-md"
                >
                  NEXT ROUND
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MorpionWinning;
