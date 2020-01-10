import { TrackType } from "../model/DataTypes";

class AudioSingleTrack {
  audioContext: AudioContext;
  track: TrackType;
  oscillator: OscillatorNode;
  private duration: number = 0.05;
  private frequency: number = 540;
  gainNode: GainNode;

  constructor(audioContext: AudioContext, track: TrackType) {
    this.audioContext = audioContext;
    this.track = track;

    this.oscillator = audioContext.createOscillator();
    this.gainNode = audioContext.createGain();
    this.oscillator.frequency.value = this.frequency;
    this.oscillator.type = "square";
    this.gainNode.gain.value = 0.0;
    this.gainNode.connect(audioContext.destination);
    this.oscillator.connect(this.gainNode);
    this.oscillator.start(this.audioContext.currentTime);
  }

  start() {
    const timeScale = 1 / (1 * 128);
    this.track.notes.forEach(note => {
      this.gainNode.gain.setValueAtTime(
        1,
        this.audioContext.currentTime + note.start * timeScale
      );
      this.gainNode.gain.setValueAtTime(
        0,
        this.audioContext.currentTime + (note.start + note.len) * timeScale
      );
    });
  }

  stop() {}
}

export default AudioSingleTrack;
