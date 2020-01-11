import { TrackType } from "../model/DataTypes";
import { getAudioContext } from "./audioContext";
import orchester from "./Orchester";

class AudioSingleTrack {
  // audioContext: AudioContext = (undefined as unknown) as AudioContext;
  track: TrackType;
  // oscillator: OscillatorNode = (undefined as unknown) as OscillatorNode;
  private duration: number = 0.05;
  private frequency: number = 640;
  // gainNode: GainNode = (undefined as unknown) as GainNode;

  constructor(track: TrackType) {
    this.track = track;
  }

  init() {
    // this.audioContext = getAudioContext();
    // this.oscillator = this.audioContext.createOscillator();
    // this.gainNode = this.audioContext.createGain();
    // this.oscillator.frequency.value = this.frequency;
    // this.oscillator.type = "square";
    // this.gainNode.gain.value = 0.0;
    // this.gainNode.connect(this.audioContext.destination);
    // this.oscillator.connect(this.gainNode);
    // this.oscillator.start(this.audioContext.currentTime);
  }

  start() {
    const timeScale = 1 / (1 * 1000);
    const audioContext = orchester.getAudioContext();
    this.track.notes.forEach(note => {
      const gainNode = orchester.getGainNode(note.note);
      gainNode.gain.setValueAtTime(
        1,
        audioContext.currentTime + note.start * timeScale
      );
      gainNode.gain.setValueAtTime(
        0,
        audioContext.currentTime + (note.start + note.len) * timeScale
      );
    });
  }

  stop() {}
}

export default AudioSingleTrack;
