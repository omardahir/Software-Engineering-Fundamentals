var makeGrey;
var redImage;
var purpleImage;
var cleanImage;
var can1;
var can2;
var rainbow;

function upload() {
  can1 = document.getElementById("leftCanvas");
  var rawImage = document.getElementById("imageUpload");
  makeGrey = new SimpleImage(rawImage);
  purpleImage = new SimpleImage(rawImage);
  cleanImage = new SimpleImage(rawImage);
  redImage = new SimpleImage(rawImage);
  rainbow = new SimpleImage(rawImage);
  cleanImage.drawTo(can1);
}

function makeGrey() {
  can2 = document.getElementById("rightCanvas");
  for (var pixel of image.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
  }
  canvas = document.getElementById('c1');
  image.drawTo(canvas);
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

function makeRainbow() {
  can2 = document.getElementById("rightCanvas");
  var h = rainbow.getHeight();

  for (var pixel of rainbow.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    var y = pixel.getY();

    if (y < h / 7) {
      if (average < 128) {
        pixel.setRed(2 * average);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * average - 255);
        pixel.setBlue(2 * average - 255);
      }
    } else if (y < (h * 2) / 7) {
      if (average < (h * 3) / 7) {
        if (average < 128) {
          pixel.setRed(2 * average);
          pixel.setGreen(2 * average);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2 * average - 255);
        }
      }
    } else if (y < (h * 4) / 7) {
      if (average < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * average);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2 * average - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * average - 255);
      }
    } else if (y < (h * 5) / 7) {
      if (average < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(6 * average);
      } else {
        pixel.setRed(2 * average - 255);
        pixel.setGreen(2 * average - 255);
        pixel.setBlue(255);
      }
    } else if (y < (h * 6) / 7) {
      if (average < 128) {
        pixel.setRed(.6 * average);
        pixel.setGreen(0);
        pixel.setBlue(3 * average);
      } else {
        pixel.setRed(3 * average - 50);
        pixel.setGreen(2 * average - 255);
        pixel.setBlue(255);
      }
    } else {
      if (average < 128) {
        pixel.setRed(10 * average);
        pixel.setGreen(0);
        pixel.setBlue(10 * average);
      } else {
        pixel.setRed(0.9 * average + 153);
        pixel.setGreen(4 * average - 255);
        pixel.setBlue(0.9 * average + 153)
      }
    }
  }
  rainbow.drawTo(can2);
}

function clearCanvas() {
  can2 = document.getElementById("rightCanvas");
  var context = can2.getContext("2d");
  context.clearRect(0,0,can2.width,can2.height);
}
