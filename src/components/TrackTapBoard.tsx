import React, { useState } from "react";

import "./TrackTapBoard.scss";
import TapItem from "./TapItem";
import TrackRecorder from "../audio/TrackRecorder";
import { TrackType } from "../model/DataTypes";
import orchester from "../audio/Orchester";

type Props = {
  finishTrack: (track: TrackType) => void;
};
const TrackTapBoard: React.FC<Props> = ({ finishTrack }) => {
  const [recorder] = useState(new TrackRecorder());

  const beepOn = (note: number) => {
    const gain = orchester.getGainNode(note);
    const context = orchester.getAudioContext();

    gain.gain.linearRampToValueAtTime(1, context.currentTime);
  };

  const beepOff = (note: number) => {
    const gain = orchester.getGainNode(note);
    const context = orchester.getAudioContext();

    gain.gain.linearRampToValueAtTime(0, context.currentTime);
  };

  const onMouseDown = (note: number) => {
    if (!recorder.started()) {
      recorder.start(9 * 1000, finishTrack);
    }
    recorder.on(note);

    beepOn(note);

    console.log(note, "down");
  };

  const onMouseUp = (note: number) => {
    recorder.off(note);

    beepOff(note);
    console.log(note, "up");
  };

  return (
    <div className="tapboard">
      <TapItem
        color="green"
        note={0}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
      <TapItem
        color="blue"
        note={1}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
      <TapItem
        color="red"
        note={2}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
      <TapItem
        color="yellow"
        note={3}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
    </div>
  );
};

export default TrackTapBoard;
