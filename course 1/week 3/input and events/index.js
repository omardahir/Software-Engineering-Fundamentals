
function changeColor() {
  var canvas = document.getElementById('c1');
  var colorinput = document.getElementById('color');
  var color = colorinput.value;
  canvas.style.backgroundColor = color;
}
function makeSquare() {
    var canvas = document.getElementById('c1');
  var slider = document.getElementById('slider');
  var value = slider.value;
  context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height)
  context.fillStyle = "lightblue"
  context.fillRect(10,10,value,value)
}
