import React from "react";
import "./App.scss";
import RiffList from "./RiffList";
import RiffInput from "./RiffInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">riffer.eu</div>
      <RiffList />
      <RiffInput />
    </div>
  );
};

export default App;
