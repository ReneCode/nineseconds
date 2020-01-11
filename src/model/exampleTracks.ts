import { TrackType } from "./DataTypes";

export const exampleTracks: TrackType[] = [
  {
    id: "1",
    len: 500,
    notes: [
      { start: 0, len: 50, note: 3 },
      { start: 100, len: 50, note: 2 },
      { start: 200, len: 50, note: 3 },
      { start: 300, len: 50, note: 0 },
      { start: 400, len: 50, note: 1 }
    ]
  },
  {
    id: "2",
    len: 500,
    notes: [
      { start: 0, len: 10, note: 1 },
      { start: 250, len: 150, note: 2 },
      { start: 420, len: 80, note: 3 }
    ]
  },
  {
    id: "3",
    len: 500,
    notes: [
      { start: 30, len: 50, note: 0 },
      { start: 120, len: 50, note: 0 },
      { start: 300, len: 10, note: 0 },
      { start: 330, len: 10, note: 0 }
    ]
  },
  {
    id: "4",
    len: 5000,
    notes: [
      { start: 30, len: 100, note: 0 },
      { start: 500, len: 100, note: 0 },
      { start: 800, len: 300, note: 1 },
      { start: 2000, len: 300, note: 2 },
      { start: 2600, len: 100, note: 1 },
      { start: 3800, len: 100, note: 3 }
    ]
  }
];
