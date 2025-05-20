const synth = new Tone.MonoSynth().toDestination();
const typingBox = document.getElementById("typingBox");

const letterMap = {
  a: "c3",
  b: "d3",
  c: "e3",
  d: "f3",
  e:,
  f:,
  g:,
  h:,
  i:,
  j:,
  k:,
  l:,
  m:,
  o:,
  p:,
  q:,
  r:,
  s:,
  t:,
  u:,
  v:,
  w:,
  x:,
  y:,
  z:,
};

async function playSound(event) {
  const key = event.key.toLowerCase();
  await Tone.start();

  if (letterMap[key]) {
    synth.triggerAttackRelease(letterMap[key], "15n");
  }
}
