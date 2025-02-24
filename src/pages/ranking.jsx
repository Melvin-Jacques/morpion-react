import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Ranking() {
  const location = useLocation();
  const { winnerData } = location.state || {};
  const [rankingData, setRankingData] = useState([]);
  
  // Fonction pour trier les joueurs par nombre de victoires
  function sortRanking(updatedRanking) {
    return updatedRanking.sort((a, b) => b.wins - a.wins);
  }
  
  // Fonction pour ajouter winnerData au classement et mettre à jour le localStorage
  const addToRanking = () => {
    if (winnerData && winnerData.name && typeof winnerData.wins === 'number') {
      setRankingData((prevRanking) => {
        const updatedRanking = [...prevRanking, winnerData];
        const sortedRanking = sortRanking(updatedRanking);
        localStorage.setItem('rankingData', JSON.stringify(sortedRanking));
        return sortedRanking;
      });
    } else {
      console.error("winnerData is invalid or missing required fields");
    }
  };
  
  useEffect(() => {
    const savedRanking = JSON.parse(localStorage.getItem('rankingData')) || [];
    setRankingData(savedRanking);
    if (winnerData) {
      addToRanking();
    }
  }, [winnerData]);
  
  return (
    <div className="flex flex-col items-center text-white relative pt-6 md:pt-12">
      <div className="md:w-1/2 rounded-xl p-12 z-10">
        <p className="text-2xl font-semibold text-center mb-6">Ranking</p>
        <table className="min-w-full bg-black rounded-xl overflow-hidden">
          <thead className={"text-[#0E1E27] border-b-2 border-[#0E1E27]"}>
          <tr className="text-xl bg-[#36CDCA] rounded-t-xl">
            <th className="w-1/4 text-center py-3 border-white">Rank</th>
            <th className="w-1/2 text-center py-3 border-white">Name</th>
            <th className="w-1/4 text-center py-3 border-white">Wins</th>
          </tr>
          </thead>
          <tbody className={"bg-[#1D313C]"}>
          {rankingData.map((player, index) => (
            <tr key={index} className="text-xl border-b-2 border-[#B6CAD3]">
              <td className="w-1/4 text-center py-4">
                <div className="flex items-center justify-center">
                  {index === 0 && (
                    <FontAwesomeIcon icon={faCrown} className="text-yellow-500 mr-2" />
                  )}
                  {index === 1 && (
                    <FontAwesomeIcon icon={faCrown} className="text-gray-400 mr-2" />
                  )}
                  {index === 2 && (
                    <FontAwesomeIcon icon={faCrown} className="text-amber-700 mr-2" />
                  )}
                  <div>{index + 1}</div>
                </div>
              </td>
              <td className="w-1/2 text-center py-4">{player.name}</td>
              <td className="w-1/4 text-center py-4">{player.wins}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
