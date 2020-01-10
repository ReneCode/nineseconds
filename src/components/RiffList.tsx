import React, { useState, useEffect } from "react";

import "./RiffList.scss";
import { exampleTracks } from "../model/exampleTracks";
import { TrackType } from "../model/DataTypes";
import TrackItem from "./TrackItem";

const RiffList = () => {
  const [tracks, setTracks] = useState([] as TrackType[]);

  useEffect(() => {
    let all: TrackType[] = [];
    for (let i = 0; i < 4; i++) {
      all = all.concat(exampleTracks);
    }
    setTracks(all);
  }, []);

  return (
    <div className="scrollable-content">
      rifflist-top
      {tracks.map(track => {
        return <TrackItem track={track} />;
      })}
    </div>
  );
};

export default RiffList;
