import React from 'react';

function HomePseudo({ mode, pseudo1, pseudo2, setPseudo1, setPseudo2 }) {
  return (
    <div className="mb-6">
      {/* Pseudo Player 1 */}
      <label
        htmlFor="pseudo1"
        className="select-none block text-sm font-medium text-gray-300 mt-4 mb-2"
      >
        Choose an username Player 1 {mode === "vsPlayer" ? "(optional)" : ""}
      </label>
      <input
        type="text"
        id="pseudo1"
        value={pseudo1}
        onChange={(e) => setPseudo1(e.target.value)}
        placeholder="Enter your username"
        className="placeholder-gray-500 w-full px-4 py-2 bg-[#B6CAD3] text-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36CDCA] focus:border-teal-400"
      />
      
      {/* Pseudo Player 2 */}
      {mode === "vsPlayer" && (
        <>
          <label
            htmlFor="pseudo2"
            className="select-none block text-sm font-medium text-gray-300 mt-4 mb-2"
          >
            Choose an username Player 2 (optional):
          </label>
          <input
            type="text"
            id="pseudo2"
            value={pseudo2}
            onChange={(e) => setPseudo2(e.target.value)}
            placeholder="Enter your username"
            className="placeholder-gray-500 w-full px-4 py-2 bg-[#B6CAD3] text-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6BC47] focus:border-[#F6BC47]"
          />
        </>
      )}
    </div>
  );
}

export default HomePseudo;
