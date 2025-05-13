const synth = new Tone.Synth().toDestination();
const typingBox = document.getElementById("TypingBox");

const letterMap = {
  a: "c3",
  b: "d3",
  c: "e3",
  d: "f3",
};

async function playSound(event) {
  const key = event.key.toLowerCase();
  await Tone.start();

  if (letterMap[key]) {
    synth.triggerAttackRelease(letterMap[key], "8n");
  }
}
