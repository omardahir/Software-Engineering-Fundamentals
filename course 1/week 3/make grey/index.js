var image;

function upload() {
  var canvas = document.getElementById('c1');
  var fileinput = document.getElementById('finput');
  image = new SimpleImage(fileinput);
  image.drawTo(canvas);
}
function makeGrey() {
  for (var pixel of image.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
  }
    var canvas = document.getElementById('c1');
  image.drawTo(canvas);
}
