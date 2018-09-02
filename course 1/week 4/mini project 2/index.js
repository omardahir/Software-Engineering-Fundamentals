var makeGrey;
var redImage;
var purpleImage;
var blankImage;
var can1;
var can2;

function upload() {
  can1 = document.getElementById("leftCanvas");
  var rawImage = document.getElementById("imageUpload");
  greyImage = new SimpleImage(rawImage);
  purpleImage = new SimpleImage(rawImage);
  blankImage = new SimpleImage(rawImage);
  redImage = new SimpleImage(rawImage);
  blankImage.drawTo(can1);
}

function makeGrey() {
  can2 = document.getElementById("rightCanvas");
  for (var pixel of greyImage.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
  }
  clearCanvas();
  greyImage.drawTo(can2);
}

function makeRed() {
  can2 = document.getElementById("rightCanvas");
  for (var pixel of redImage.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (average < 128) {
      var newRed = average * 2;
      pixel.setRed(newRed);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(0);
      var newGreen = (average * 2) - 255;
      pixel.setGreen(newGreen);
      var newBlue = (average * 2) - 255;
      pixel.setBlue(newBlue);
    }
  }
  clearCanvas();
  redImage.drawTo(can2);
}

function makePurple() {
    can2 = document.getElementById("rightCanvas");
  for (var pixel of purpleImage.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (average < 128) {
      var newPurple = average * 2;
      pixel.setRed(255);
      pixel.setGreen(0);
      pixel.setBlue(newPurple);
    } else {
      var newRed = (average * 2) - 255;
      pixel.setRed(newRed);
      var newGreen = (average * 2) - 255;
      pixel.setGreen(newGreen);
      pixel.setBlue(0);
    }
  }
  clearCanvas();
  purpleImage.drawTo(can2);
}

function clearCanvas() {
  can2 = document.getElementById("rightCanvas");
  var context = can2.getContext("2d");
  context.clearRect(0,0,can2.width,can2.height);
}
