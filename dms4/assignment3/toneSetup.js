const synth = new Tone.MonoSynth().toDestination();
const typingBox = document.getElementById("typingBox");

const letterMap = {
  a: "c3",
  b: "d3",
  c: "e3",
  d: "f3",
};

function startToneContext() {
  Tone.start().then(() => {
    console.log("Tone.js started");
  });
  // Remove this listener after first call
  typingBox.removeEventListener("focus", startToneContext);
}

typingBox.addEventListener("focus", startToneContext);

typingBox.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (letterMap[key]) {
    synth.triggerAttackRelease(letterMap[key], "15n");
  }
});
