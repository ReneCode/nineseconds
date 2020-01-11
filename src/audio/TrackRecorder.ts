import { NoteType, TrackType } from "../model/DataTypes";

class TrackRecorder {
  startMs: number = 0;
  onMs: number = 0;
  notes: NoteType[] = [];
  note = 500;

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

  on() {
    this.onMs = Date.now();
  }

  off() {
    const offMs = Date.now();
    const durationMs = offMs - this.onMs;
    const start = this.onMs - this.startMs;
    const note: NoteType = {
      start: start,
      len: durationMs,
      note: this.note
    };
    this.notes.push(note);
  }
}

export default TrackRecorder;
