import React from "react";

import "./TrackInput.scss";
import TrackTapBoard from "./TrackTapBoard";

const TrackInput = () => {
  return (
    <div className="track-input">
      <TrackTapBoard />
      <div className="preview">preview</div>
      <div className="track-input__buttons">
        <button className="track-clear">Clear</button>
        <button className="track-send">Send</button>
      </div>
    </div>
  );
};

export default TrackInput;
