import React, { useState } from "react";

import "./TrackTapBoard.scss";
import TapItem from "./TapItem";
import TrackRecorder from "../audio/TrackRecorder";
import { TrackType } from "../model/DataTypes";

type Props = {
  finishTrack: (track: TrackType) => void;
};
const TrackTapBoard: React.FC<Props> = ({ finishTrack }) => {
  const [recorder] = useState(new TrackRecorder());

  const onMouseDown = (color: string) => {
    if (!recorder.started()) {
      recorder.start(9 * 1000, finishTrack);
    }
    recorder.on();

    console.log(color, "down");
  };

  const onMouseUp = (color: string) => {
    recorder.off();

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
