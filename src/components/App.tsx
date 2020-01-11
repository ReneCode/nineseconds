import React, { useState, useEffect } from "react";
import "./App.scss";
import TrackList from "./TrackList";
import TrackInput from "./TrackInput";

import { exampleTracks } from "../model/exampleTracks";
import { TrackType } from "../model/DataTypes";

const App: React.FC = () => {
  const [tracks, setTracks] = useState([] as TrackType[]);

  useEffect(() => {
    let all: TrackType[] = [];
    for (let i = 0; i < 4; i++) {
      all = all.concat(exampleTracks);
    }
    setTracks(all);
  }, []);

  const addTrack = (track: TrackType) => {
    console.log("Add:", track);
    setTracks(tracks.concat(track));
  };

  return (
    <div className="App">
      <div className="header">riffer.eu</div>
      <TrackList tracks={tracks} />
      <TrackInput addTrack={addTrack} />
    </div>
  );
};

export default App;
