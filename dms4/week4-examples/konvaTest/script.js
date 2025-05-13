let myStage = new Konva.Stage({
  container: "konvaStage",
  width: 500,
  height: 500,
});

let layerOne = new Konva.Layer();

let currentColor = "red";

function addCircle() {
  let circle = new Konva.Circle({
    x: myStage.width() / 2,
    y: myStage.height() / 2,
    radius: 70,
    fill: currentColor,
    draggable: true,
  });
  layerOne.add(circle);
}

function changeCurrentColor(e) {
  currentColor = e.target.value;
}

document.getElementById("addCircle").addEventListener("click", addCircle);

document
  .getElementById("circleColor")
  .addEventListener("change", changeCurrentColor);

myStage.add(layerOne);
