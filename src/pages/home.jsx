import React, { useState } from 'react';

function Home() {
  const [pseudo, setPseudo] = useState('');
  const [mode, setMode] = useState('');
  
  const handleStartGame = () => {
    if (!pseudo) {
      alert('Veuillez entrer un pseudo avant de commencer.');
      return;
    }
    if (!mode) {
      alert('Veuillez choisir un mode de jeu.');
      return;
    }
    console.log(`Pseudo: ${pseudo}, Mode: ${mode}`);
    // Logique pour démarrer le jeu
  };
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white relative overflow-hidden pt-24">
      
      <div className="w-full max-w-md bg-[#182831] shadow-lg rounded-xl p-12 relative z-10">
        <h1 className="text-2xl font-bold text-teal-400 mb-6 text-center">
          Bienvenue dans le Morpion React !
        </h1>
        <div className="mb-6">
          <label
            htmlFor="pseudo"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Choisissez votre pseudo :
          </label>
          <input
            type="text"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Entrez votre pseudo"
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
          />
          <label
            htmlFor="jou"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Choisissez votre pseudo :
          </label>
          <input
            type="text"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Entrez votre pseudo"
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Choisissez un mode de jeu :
          </label>
          <div className="flex items-center mb-3">
            <input
              type="radio"
              id="vs-player"
              name="mode"
              value="vsPlayer"
              onChange={(e) => setMode(e.target.value)}
              className="hidden peer"
            />
            <label
              htmlFor="vs-player"
              className="flex items-center justify-center w-full px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-md cursor-pointer peer-checked:bg-teal-500 peer-checked:text-white transition duration-300"
            >
              Contre un joueur
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="vs-ai"
              name="mode"
              value="vsAI"
              onChange={(e) => setMode(e.target.value)}
              className="hidden peer"
            />
            <label
              htmlFor="vs-ai"
              className="flex items-center justify-center w-full px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-md cursor-pointer peer-checked:bg-teal-500 peer-checked:text-white transition duration-300"
            >
              Contre l'IA
            </label>
          </div>
        </div>
        
        <button
          onClick={handleStartGame}
          className="w-full bg-[#F6BC47] text-gray-900 shadow-[#CE8E14] drop-shadow-lg font-semibold py-3 rounded-md hover:bg-teal-600 transition duration-300"
        >
          Lancer le jeu
        </button>
      </div>
    </div>
  );
}

export default Home;
