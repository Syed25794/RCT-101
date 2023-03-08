import React, { useState } from "react";
import { StopWatch } from "./StopWatch";
import { Timer } from "./Timer";

export const StopWatchTimer = () => {
  const [showStopWatch, setShowStopWatch] = useState(true);
  const [query, setQuery] = useState("");
  const [initial, setInitial] = useState(0);
  const handleSetTimer = () => {
    let number = Number(query);
    setInitial(number);
    setQuery("");
  };
  return (
    <div>
      <div style={{textAlign:"center",marginTop:"10px"}}><button style={{margin:"10px"}}  onClick={() => setShowStopWatch(true)}>StopWatch</button>
      <button style={{margin:"10px"}} onClick={() => setShowStopWatch(false)}>Timer</button></div>
      {showStopWatch ? (
        <div>
          <h1 style={{ textAlign: "center" }}>StopWatch</h1>
          <StopWatch />
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Timer</h1>
          <div style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="Enter time in sec"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSetTimer}>Set Timer</button>
          </div>
          {initial > 0 ? <Timer initial={initial} /> : null}
        </div>
      )}
    </div>
  );
};
