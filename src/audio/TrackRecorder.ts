import { NoteType, TrackType } from "../model/DataTypes";

class TrackRecorder {
  startMs: number = 0;
  onMs: number = 0;
  onNote: number = 0;
  notes: NoteType[] = [];

  start(maxLenMs: number = 9000, callback: (track: TrackType) => void) {
    this.startMs = Date.now();
    this.notes = [];
    const self = this;
    setTimeout(() => {
      if (callback) {
        const track = { id: "", len: maxLenMs, notes: self.stop() };
        callback(track);
      }
    }, maxLenMs);
  }

  stop() {
    this.startMs = 0;
    return this.notes;
  }

  started() {
    return this.startMs !== 0;
  }

  on(note: number) {
    this.onNote = note;
    this.onMs = Date.now();
  }

  off(note: number) {
    const offMs = Date.now();
    const durationMs = offMs - this.onMs;
    const start = this.onMs - this.startMs;
    const noteType: NoteType = {
      start: start,
      len: durationMs,
      note: this.onNote
    };
    this.notes.push(noteType);
  }
}

export default TrackRecorder;
