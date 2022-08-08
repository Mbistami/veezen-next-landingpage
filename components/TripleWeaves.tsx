import React from "react";
import Wave from "react-wavify";

export const TripleWeaves = () => {
  return (
    <div className="absolute w-full bottom-0 p-0 ">
      <Wave
        fill="rgba(255,255,255,0.3)"
        paused={false}
        className="absolute bottom-0 h-40"
        options={{
          height: 10,
          amplitude: 10,
          speed: 0.3,
          points: 5,
        }}
      />
      <Wave
        fill="rgba(255,255,255,0.5)"
        paused={false}
        className="absolute bottom-0 h-32 "
        options={{
          height: 10,
          amplitude: 10,
          speed: 0.3,
          points: 5,
        }}
      />
      <Wave
        fill="rgba(255,255,255,1)"
        paused={false}
        className="absolute bottom-0 h-24"
        options={{
          height: 10,
          amplitude: 10,
          speed: 0.3,
          points: 5,
        }}
      />
    </div>
  );
};
