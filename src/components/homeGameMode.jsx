import React from 'react';
import Cross from "../components/cross.jsx";
import Circle from "../components/circle.jsx";

function HomeGameMode({ mode, setMode }) {
  return (
    <div className="mb-6">
      {/* Mode vs CPU */}
      <div className="flex items-center my-2">
        <input
          type="radio"
          id="vs-ai"
          name="mode"
          value="vsAI"
          onChange={(e) => setMode(e.target.value)}
          className="hidden peer"
          defaultChecked={mode === "vsAI"}
        />
        <label
          htmlFor="vs-ai"
          className="select-none flex items-center justify-center w-full bg-[#CE8E14] text-gray-900 border-b-4 border-[#CE8E14] font-bold py-3 rounded-xl hover:bg-[#CE8E14] transition duration-200 peer-checked:bg-[#F6BC47]"
        >
          {mode === "vsAI" && (
            <div className="h-4 mr-2">
              <Circle />
            </div>
          )}
          NEW GAME (VS CPU)
        </label>
      </div>
      
      {/* Mode vs Player */}
      <div className="flex mb-3">
        <input
          type="radio"
          id="vs-player"
          name="mode"
          value="vsPlayer"
          onChange={(e) => setMode(e.target.value)}
          className="hidden peer"
          defaultChecked={mode === "vsPlayer"}
        />
        <label
          htmlFor="vs-player"
          className="select-none flex items-center justify-center w-full bg-[#2A9E9C] text-gray-900 border-b-4 border-[#2A9E9C] font-bold py-3 rounded-xl hover:bg-[#2A9E9C] transition duration-200 peer-checked:bg-[#36CDCA]"
        >
          {mode === "vsPlayer" && (
            <div className="h-4 mr-2">
              <Cross />
            </div>
          )}
          NEW GAME (VS PLAYER)
        </label>
      </div>
    </div>
  );
}

export default HomeGameMode;
