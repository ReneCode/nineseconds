import { getAudioContext } from "./audioContext";

class Instrument {
  oscillator: OscillatorNode = (undefined as unknown) as OscillatorNode;
  gainNode: GainNode = (undefined as unknown) as GainNode;

  constructor(audioContext: AudioContext, frequency: number) {
    this.oscillator = audioContext.createOscillator();
    this.gainNode = audioContext.createGain();
    this.oscillator.frequency.value = frequency;
    this.oscillator.type = "square";
    this.gainNode.gain.value = 0.0;
    this.gainNode.connect(audioContext.destination);
    this.oscillator.connect(this.gainNode);
    this.oscillator.start(audioContext.currentTime);
  }
}

class Orchester {
  audioContext: AudioContext = (undefined as unknown) as AudioContext;
  instruments: Instrument[] = [];

  init() {
    this.audioContext = getAudioContext();

    this.instruments.push(new Instrument(this.audioContext, 261.626));
    this.instruments.push(new Instrument(this.audioContext, 293.665));
    this.instruments.push(new Instrument(this.audioContext, 329.628));
    this.instruments.push(new Instrument(this.audioContext, 349.228));
  }

  getAudioContext() {
    return this.audioContext;
  }

  getGainNode(idx: number) {
    if (idx < 0 || idx >= this.instruments.length) {
      throw new Error("illegal instrument index");
    }

    console.log("gain:", idx);
    return this.instruments[idx].gainNode;
  }
}

const orchester = new Orchester();

export default orchester;
