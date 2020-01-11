import React from "react";

import "./TapItem.scss";

type Props = {
  color: string;
  onMouseDown: (color: string) => void;
  onMouseUp: (color: string) => void;
};
const TapItem: React.FC<Props> = ({ color, onMouseDown, onMouseUp }) => {
  const style = { borderColor: color };

  return (
    <div
      style={style}
      className="tapitem"
      onTouchStart={() => {
        onMouseDown(color);
      }}
      onTouchEnd={() => {
        onMouseUp(color);
      }}
      onMouseDown={() => onMouseDown(color)}
      onMouseUp={() => onMouseUp(color)}
    ></div>
  );
};

export default TapItem;
