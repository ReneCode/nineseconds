import React, { useState, useEffect } from "react";
import "./App.scss";
import TrackList from "./TrackList";
import TrackInput from "./TrackInput";

import { exampleTracks } from "../model/exampleTracks";
import { TrackType } from "../model/DataTypes";
import orchester from "../audio/Orchester";
import { getAudioContext } from "../audio/audioContext";

const App: React.FC = () => {
  const [tracks, setTracks] = useState([] as TrackType[]);

  useEffect(() => {
    const element = document.getElementById("app");

    const init = (event: Event) => {
      element!.removeEventListener("click", init);
      element!.removeEventListener("touchstart", init);
      console.log("init");

      const AudioContext =
        window.AudioContext || (window as any)["webkitAudioContext"];
      const audioCtx = new AudioContext();

      orchester.init(audioCtx);
    };

    element!.addEventListener("click", init);
    element!.addEventListener("touchstart", init);
  }, []);

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
    <div id="app" className="App">
      <div className="header">riffer.eu</div>
      <TrackList tracks={tracks} />
      <TrackInput addTrack={addTrack} />
    </div>
  );
};

export default App;
