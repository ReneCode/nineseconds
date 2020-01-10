import { TrackType } from "../model/DataTypes";

// const createAudioContext = () => {
//   if (typeof AudioContext !== "undefined") {
//     return new AudioContext();
//   } else if ("webkitAudioContext"  in window) {
//     return new webkitAudioContext();
//   } else if (typeof mozAudioContext !== "undefined") {
//     return new mozAudioContext();
//   } else {
//     throw new Error("AudioContext not supported");
//   }
// };

// export default createAudioContext

const audioContext = new (window["AudioContext"] ||
  (window as any)["webkitAudioContext"])();

export const getAudioContext = () => {
  return audioContext;
};

export const audioPlayTrack = (track: TrackType) => {
  const audioContext = getAudioContext();
  const gain = audioContext.createGain();
  const oscillator = audioContext.createOscillator();
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  gain.gain.value = 0.9;
  oscillator.type = "sine";
  oscillator.frequency.value = 277.18;
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.2);
};
