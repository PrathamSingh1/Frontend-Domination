import React from "react";
import { useState } from "react";
import AdvanceUseState from "./Components/AdvanceUseState";
import AdvanceUseState2 from "./Components/AdvanceUseState2";

const App = () => {
  const [score, setScore] = useState(100);

  return (
    <>
      <div>
        {/* <h1>{score}</h1>
        <button
          onClick={() => setScore((prev) => prev + 1)}
          className="px-2 py-1 mt-2 text-xs bg-blue-500 rounded-full text-white"
        >
          change
        </button> */}
      </div>
      <div>
        {/* <AdvanceUseState /> */}
      </div>

      <div>
        <AdvanceUseState2 />
      </div>
    </>
  );
};

export default App;
