import React from 'react';

function HomeStartGame({ startGame, mode, pseudo1 }) {
  // Conditions pour afficher le bouton (en gros si le mode est vsAI il s'affiche que après que l'input pseudo 1 est rempli)
  const isButtonVisible =
    (mode === "vsAI" && pseudo1) || mode === "vsPlayer";
  
  return (
    isButtonVisible && (
      <button
        onClick={startGame}
        className="w-full bg-[#F6BC47] text-gray-900 shadow-[#CE8E14] drop-shadow-lg font-semibold py-3 rounded-xl hover:bg-teal-600 transition duration-300"
      >
        Lancer le jeu
      </button>
    )
  );
}

export default HomeStartGame;
