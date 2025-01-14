import React, { useState } from 'react';
import X from '../assets/cross.svg';
import O from '../assets/circle.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";


function Morpion() {
  const [grid, setGrid] = useState(Array(9).fill(null)); // État pour les cases du morpion
  const [isXNext, setIsXNext] = useState(true); // Alternance des joueurs
  
  const handleClick = (index) => {
    if (grid[index]) return; // Ignore si la case est déjà remplie
    const newGrid = [...grid];
    newGrid[index] = isXNext ? 'X' : 'O';
    setGrid(newGrid);
    setIsXNext(!isXNext);
  };
  
  return (
    <div className="flex flex-col items-center justify-start text-white relative overflow-hidden pt-12">
      <div className="w-full max-w-xl bg-[#182831] shadow-lg rounded-xl p-8 relative z-10 items-center justify-between">
        {/* Header avec les scores et tours */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <img className="h-8" src={X} alt="X icon" />
            <img className="h-8" src={O} alt="O icon" />
          </div>
          <button
            className="bg-[#1D313C] px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 justify-between border-b-4 border-[#0E1E27]">
            {isXNext ? (
              <img className="h-4 text-gray-300" src={X} alt="X icon"/>
            ) : (
              <img className="h-4 " src={O} alt="O icon"/>
            )}
            <span className={"text-gray-300 font-bold text-xl pb-[2px]"}>TURN</span>
          </button>
          
          <button className="bg-[#B6CAD3] px-2 py-[6px] rounded-lg border-b-4 border-[#0E1E27]">
            <FontAwesomeIcon className={"mt-0.5"} icon={faRotateRight} size="lg" color="#1C333D"/>
          </button>
        </div>
        
        {/* Grille du morpion */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            {grid.map((value, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="w-32 h-32 bg-[#1D313C] border-b-8 border-[#0E1E27] rounded-2xl flex items-center justify-center text-4xl font-bold shadow-md hover:shadow-lg hover:bg-gray-700 transition duration-300"
              >
                {value === 'X' && <img className="h-12" src={X} alt="X icon" />}
                {value === 'O' && <img className="h-12" src={O} alt="O icon" />}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scores */}
        <div className="flex justify-between items-center mt-8">
          <div className="bg-[#36CDCA] text-gray-900 px-4 py-2 rounded-lg flex-1 text-center font-semibold">
            X (YOU) <br/> <span className={"font-bold text-xl"}>14</span>
          </div>
          <div className="bg-[#B6CAD3] text-[# px-4 py-2 rounded-lg flex-1 text-center mx-2 font-semibold">
            TIES <br /> <span className={"font-bold text-xl"}>32</span>
          </div>
          <div className="bg-[#F6BC47] text-gray-900 px-4 py-2 rounded-lg flex-1 text-center font-semibold">
            O (CPU) <br/> <span className={"font-bold text-xl"}>32</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morpion;
