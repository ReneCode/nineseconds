class AudioBeep {
  private audioContext: AudioContext;
  oscillator: OscillatorNode;
  private duration: number = 0.05;
  private frequency: number = 1177.18;
  gainNode: GainNode;

  constructor(audioContext: AudioContext) {
    this.audioContext = audioContext;

    this.oscillator = audioContext.createOscillator();
    this.gainNode = audioContext.createGain();
    this.oscillator.frequency.value = this.frequency;
    this.oscillator.type = "square";
    this.gainNode.gain.value = 0.0;
    this.gainNode.connect(audioContext.destination);
    this.oscillator.connect(this.gainNode);
    this.oscillator.start(this.audioContext.currentTime);
  }

  play() {
    this.gainNode.gain.linearRampToValueAtTime(
      1,
      this.audioContext.currentTime
    );
    this.gainNode.gain.linearRampToValueAtTime(
      0,
      this.audioContext.currentTime + this.duration
    );
  }
}

export default AudioBeep;
