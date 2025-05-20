const distortion = new Tone.Distortion(0.6).toDestination();

const synth = new Tone.Synth({
  oscillator: {
    type: "sawtooth",
  },
  filter: {
    Q: 1,
    type: "highpass",
    rolloff: -12,
  },
  envelope: {
    attack: 0.01,
    decay: 0,
    sustain: 0.2,
    release: 0.6,
  },
}).connect(distortion);

const typingBox = document.getElementById("typingBox");

const letterMap = {
  a: "c2",
  b: "d2",
  c: "e2",
  d: "a2",
  e: "b2",
  f: "c2",
  g: "d2",
  h: "e2",
  i: "a2",
  j: "b2",
  k: "c2",
  l: "d2",
  m: "e2",
  o: "d2",
  p: "b2",
  q: "c2",
  r: "d2",
  s: "e2",
  t: "a2",
  u: "e2",
  v: "c2",
  w: "d2",
  x: "e2",
  y: "a2",
  z: "b2",
};

async function playSound(event) {
  const key = event.key.toLowerCase();
  await Tone.start();

  if (letterMap[key]) {
    synth.triggerAttackRelease(letterMap[key], "15n");
  }
}
