var makeGrey;
var redImage;
var MagentaImage;
var can1;
var can2;
var rainbow;
var blurry;

function upload() {
  can1 = document.getElementById("leftCanvas");
  var rawImage = document.getElementById("imageUpload");
  var blankImage = new SimpleImage(rawImage);
  greyImage = new SimpleImage(rawImage);
  MagentaImage = new SimpleImage(rawImage);
  redImage = new SimpleImage(rawImage);
  rainbow = new SimpleImage(rawImage);
  blurry = new SimpleImage(rawImage);
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

function makeMagenta() {
    can2 = document.getElementById("rightCanvas");
  for (var pixel of MagentaImage.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (average < 128) {
      var newMagenta = average * 2;
      pixel.setRed(255);
      pixel.setGreen(0);
      pixel.setBlue(newMagenta);
    } else {
      var newRed = (average * 2) - 255;
      pixel.setRed(newRed);
      var newGreen = (average * 2) - 255;
      pixel.setGreen(newGreen);
      pixel.setBlue(0);
    }
  }
  clearCanvas();
  MagentaImage.drawTo(can2);
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

function makeBlurry() {
  can2 = document.getElementById("rightCanvas");
  for (var pixel of blurry.values()) {
    var rdmNum = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
    if (rdmNum < 0.5) {
      pixel.setPixel(x,y,pixel);
    } else {
      var offsetX;
      if (x < blurry.getWidth()) {
        offsetX = x+1;
      } else {
        offsetX = x-1;
      }
      if (y < blurry.getHeight()) {
        offset = y+1;
      } else {
        offset = y-1;
      }
      var nearbyPixel = image.getPixel(offsetX, offsetY);
      pixel.setPixel(x, y, nearbyPixel)
    }
  }
  blurry.drawTo(can2);
}

function clearCanvas() {
  can2 = document.getElementById("rightCanvas");
  var context = can2.getContext("2d");
  context.clearRect(0,0,can2.width,can2.height);
}
