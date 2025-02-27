import React from 'react';
import X from "../assets/cross.svg";
import O from "../assets/circle.svg";

function Grid({ isXNext, grid, handleCellClick, winningCells, winner }) {
  // C'est un filtre pour mettre le fond des cellules gagnantes à la couleur du gagnant.
  const getFilterForColor = (color) => {
    if (color === '#36CDCA') {
      return 'brightness(0) saturate(100%)';
    } else if (color === '#F6BC47') {
      return 'brightness(0) saturate(100%)';
    }
    return '';
  };
  
  return (
    <div className="flex items-center justify-center select-none">
      <div className="grid grid-cols-3 gap-4">
        {grid.map((value, index) => {
          const isWinningCell = winningCells.includes(index);
          const cellBgColor = winner === "X" && isWinningCell ? "#36CDCA" : winner === "O" && isWinningCell ? "#F6BC47" : "#1D313C";
          const filterStyle = isWinningCell ? getFilterForColor(cellBgColor) : '';
          
          return (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className={`w-32 h-32 rounded-xl flex items-center justify-center text-4xl font-bold border-b-8 border-[#0E1E27] transition duration-300
              ${isWinningCell ? "" : "bg-[#1D313C]"}
              `}
              style={{ backgroundColor: cellBgColor }}
            >
              {value === 'X' && (
                <img
                  className="h-14 select-none"
                  src={X}
                  alt="X icon"
                  style={{ filter: filterStyle }}
                />
              )}
              {value === 'O' && (
                <img
                  className="h-16 select-none"
                  src={O}
                  alt="O icon"
                  style={{ filter: filterStyle }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
