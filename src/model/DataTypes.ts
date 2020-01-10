export type NoteType = {
  start: number;
  len: number;
  note: number;
};

export type TrackType = {
  id: string;
  len: number; // fullLength
  notes: NoteType[];
};
