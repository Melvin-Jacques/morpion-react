import React from 'react';
import X from '../assets/cross.svg';
import O from '../assets/circle.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight, faXmark} from "@fortawesome/free-solid-svg-icons";

function MorpionTurn({ isXNext, resetGrid, resetGame}) {
  return (
    <div className="flex justify-between items-center mb-8 select-none">
      <div className="flex items-center space-x-2">
        <img className="h-8 select-none" src={X} alt="X icon"/>
        <img className="h-8 select-none" src={O} alt="O icon"/>
      </div>
      <button
        className="bg-[#1D313C] px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 justify-between border-b-4 border-[#0E1E27]">
        {isXNext ? (
          <img className="h-4 select-none" src={X} alt="X icon"/>
        ) : (
          <img className="h-4 select-none" src={O} alt="O icon"/>
        )}
        <span className={"text-gray-300 font-bold text-xl pb-[2px] select-none"}>TURN</span>
      </button>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={resetGrid}
          className="bg-[#B6CAD3] px-2 py-[6px] rounded-lg border-b-4 border-[#7D9AA7]"
        >
          <FontAwesomeIcon className={"mt-0.5"} icon={faRotateRight} size="lg" color="#1C333D"/>
        </button>
        <button
          onClick={resetGame}
          className="bg-[#E74C3C] px-[10px] py-[6px] rounded-lg border-b-4 border-[#C0392B]"
        >
          <FontAwesomeIcon className={"mt-0.5"} icon={faXmark} size="xl" color="white"/>
        </button>
      </div>
    
    </div>
  )
}

export default MorpionTurn;
