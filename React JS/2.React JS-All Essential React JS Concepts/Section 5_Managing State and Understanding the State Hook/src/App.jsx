import React from "react";
import { useState } from "react";
import AdvanceUseState from "./Components/AdvanceUseState";

const App = () => {
  const [score, setScore] = useState(100);

  return (
    <>
      {/* <div className="p-4">
        <h1>{score}</h1>
        <button
          onClick={() => setScore((prev) => prev + 1)}
          className="px-2 py-1 mt-2 text-xs bg-blue-500 rounded-full text-white"
        >
          change
        </button>
      </div> */}
      <div>
        <AdvanceUseState />
      </div>
    </>
  );
};

export default App;
