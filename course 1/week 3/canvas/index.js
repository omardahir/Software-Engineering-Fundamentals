var canvas = document.getElementById('div1')
function changeRed() {
  canvas.style.backgroundColor = "red"
  var context = canvas.getContext("2d");

  context.fillStyle = "green";
  context.fillRect(10,10,60,60);
  context.fillRect(80,10,60,60);

  context.fillStyle = "white";
  context.font = "20px Arial";
  context.fillText("Hello", 15, 45);
}
function changePink() {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width, canvas.height)
  canvas.style.backgroundColor = "pink"
}
