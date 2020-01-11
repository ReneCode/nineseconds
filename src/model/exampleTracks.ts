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
    len: 5000,
    notes: [
      { start: 30, len: 100, note: 200 },
      { start: 500, len: 100, note: 200 },
      { start: 800, len: 300, note: 300 },
      { start: 2000, len: 300, note: 400 },
      { start: 2600, len: 100, note: 400 },
      { start: 3800, len: 100, note: 400 }
    ]
  }
];
