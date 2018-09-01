var fgImage = null;
var bgImage = null;
var fgcan;
var bgcan;

function uploadFg() {
  fgcan = document.getElementById('fg');
  var fginput = document.getElementById('fgfile');
  fgImage = new SimpleImage(fginput);
  fgImage.drawTo(fgcan);
}

function uploadBg() {
  bgcan = document.getElementById('bg');
  var bginput = document.getElementById('bgfile');
  bgImage = new SimpleImage(bginput);
  bgImage.drawTo(bgcan);
}

function createComposite() {
    var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

    for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        bgImagePixel = bgImage.getPixel(x, y);
        output.setPixel(x, y, bgImagePixel);
    }
    else {
      output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
  }
  return output;
}

function greenScreen() {
  if (fgImage == null || !fgImage.complete()) {
    alert('foreground image not loaded')
    return;
  }
  if (bgImage === null || !bgImage.complete()) {
    alert('background image not loaded')
    return;
  }

  clearCanvas();

  fgcan = document.getElementById('fg');
    var combinedImage = createComposite();
  combinedImage.drawTo(fgcan);
}

function clearCanvas() {
  var context = fgcan.getContext("2d");
  var context = bgcan.getContext("2d");
  context.clearRect(0,0,fgcan.width,fgcan.height);
  context.clearRect(0,0,bgcan.width,bgcan.height);
}
