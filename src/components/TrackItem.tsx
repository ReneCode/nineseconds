import React, { useRef, useEffect, useState } from "react";

import "./TrackItem.scss";
import { TrackType } from "../model/DataTypes";
import { audioPlayTrack, getAudioContext } from "../audio/audioContext";
import AudioBeep from "../audio/AudioBeep";
import AudioSingleTrack from "../audio/AudioSingleTrack";

type Props = {
  track: any;
};
const TrackDisplay: React.FC<Props> = ({ track }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasEl = useRef(null as any);
  const divEl = useRef(null as any);
  const [audioTrack] = useState(new AudioSingleTrack(track));

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasEl.current;
    if (canvas) {
      const div: HTMLDivElement = divEl.current;
      const displayBackup = canvas.style.display;
      canvas.style.display = "none";
      const rect = div.getBoundingClientRect();
      canvas.style.display = displayBackup;
      setSize({ width: rect.width, height: rect.height });
    }
  }, []);

  useEffect(() => {
    if (!size.width) return;

    const canvas: HTMLCanvasElement | null = canvasEl.current;
    if (canvas) {
      drawTrack(canvas, track);
    }
  }, [size]);

  const drawTrack = (canvas: HTMLCanvasElement, track: TrackType) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const widthScale = width / track.len;
    ctx.beginPath();
    track.notes.forEach(note => {
      ctx.fillStyle = getNoteColor(note.note);
      ctx.fillRect(note.start * widthScale, 0, note.len * widthScale, height);
    });
    ctx.stroke();
  };

  const getNoteColor = (note: number) => {
    return `RGB(${(note % 50) * 4},${(note % 100) * 2},${(note % 20) * 12})`;
  };

  const onMouseDown = () => {
    // audioPlayTrack(track);
    // beep.play();
    audioTrack.start();
  };

  const style: any = {};

  return (
    <div className="track" ref={divEl}>
      <canvas
        ref={canvasEl}
        style={style}
        width={size.width}
        height={size.height}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default TrackDisplay;
