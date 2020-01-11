import React from "react";

import "./TrackTapBoard.scss";
import TapItem from "./TapItem";

const TrackTapBoard = () => {
  const onMouseDown = (color: string) => {
    console.log(color, "down");
  };

  const onMouseUp = (color: string) => {
    console.log(color, "up");
  };

  return (
    <div className="tapboard">
      <TapItem color="green" onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
      <TapItem color="blue" onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
      <TapItem color="red" onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
      <TapItem color="yellow" onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
    </div>
  );
};

export default TrackTapBoard;
