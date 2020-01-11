import React from "react";

import "./TapItem.scss";

type Props = {
  color: string;
  note: number;
  onMouseDown: (note: number) => void;
  onMouseUp: (note: number) => void;
};
const TapItem: React.FC<Props> = ({ color, note, onMouseDown, onMouseUp }) => {
  const style = { borderColor: color };

  return (
    <div
      style={style}
      className="tapitem"
      onTouchStart={() => {
        onMouseDown(note);
      }}
      onTouchEnd={() => {
        onMouseUp(note);
      }}
      onMouseDown={() => onMouseDown(note)}
      onMouseUp={() => onMouseUp(note)}
    ></div>
  );
};

export default TapItem;
