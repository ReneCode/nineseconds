import React from "react";
import "./App.scss";
import TrackList from "./TrackList";
import TrackInput from "./TrackInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">riffer.eu</div>
      <TrackList />
      <TrackInput />
    </div>
  );
};

export default App;
