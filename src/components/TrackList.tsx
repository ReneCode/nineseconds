import React from "react";

import "./TrackList.scss";
import TrackItem from "./TrackItem";
import { TrackType } from "../model/DataTypes";

type Props = { tracks: TrackType[] };
const TrackList: React.FC<Props> = ({ tracks }) => {
  return (
    <div className="scrollable-content">
      rifflist-top
      {tracks.map(track => {
        return <TrackItem track={track} />;
      })}
    </div>
  );
};

export default TrackList;
