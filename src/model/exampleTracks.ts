import { TrackType } from "./DataTypes";

export const exampleTracks: TrackType[] = [
  {
    id: "1",
    len: 500,
    notes: [
      { start: 0, len: 50, note: 178 },
      { start: 100, len: 50, note: 300 },
      { start: 200, len: 50, note: 330 },
      { start: 300, len: 50, note: 340 },
      { start: 400, len: 50, note: 460 }
    ]
  },
  {
    id: "2",
    len: 500,
    notes: [
      { start: 0, len: 10, note: 100 },
      { start: 250, len: 150, note: 120 },
      { start: 420, len: 80, note: 320 }
    ]
  },
  {
    id: "3",
    len: 500,
    notes: [
      { start: 30, len: 50, note: 200 },
      { start: 120, len: 50, note: 300 },
      { start: 300, len: 10, note: 400 },
      { start: 330, len: 10, note: 400 }
    ]
  },
  {
    id: "4",
    len: 500,
    notes: [
      { start: 30, len: 10, note: 200 },
      { start: 50, len: 10, note: 200 },
      { start: 80, len: 30, note: 300 },
      { start: 200, len: 30, note: 400 },
      { start: 260, len: 10, note: 400 },
      { start: 280, len: 10, note: 400 }
    ]
  }
];
