import React from 'react';


function MorpionScore({XWinCount, TieCount, OWinCount, player1, player2}) {
  return (
    <div className="flex justify-between items-center mt-8 select-none">
      <div className="bg-[#36CDCA] text-gray-900 px-4 py-2 rounded-lg flex-1 text-center font-semibold">
        X - {player1 != null ? player1 : "Player 1"} <br/> <span className={"font-bold text-xl"}>{XWinCount}</span>
      </div>
      <div className="bg-[#B6CAD3] text-gray-900 px-4 py-2 rounded-lg flex-1 text-center mx-2 font-semibold">
        TIES <br /> <span className={"font-bold text-xl"}>{TieCount}</span>
      </div>
      <div className="bg-[#F6BC47] text-gray-900 px-4 py-2 rounded-lg flex-1 text-center font-semibold">
        O - {player2 != null ? player2 : "Player 2"} <br/> <span className={"font-bold text-xl"}>{OWinCount}</span>
      </div>
    </div>
  )
}

export default MorpionScore;
