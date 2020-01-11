import React from "react";

import "./TrackInput.scss";
import TrackTapBoard from "./TrackTapBoard";
import { TrackType } from "../model/DataTypes";

type Props = { addTrack: (track: TrackType) => void };
const TrackInput: React.FC<Props> = ({ addTrack }) => {
  return (
    <div className="track-input">
      <TrackTapBoard finishTrack={addTrack} />
      <div className="preview">preview</div>
      <div className="track-input__buttons">
        <button className="track-clear">Clear</button>
        <button className="track-send">Send</button>
      </div>
    </div>
  );
};

export default TrackInput;
