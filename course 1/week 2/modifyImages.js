//part 1

var fgImage = new SimpleImage('drewRobert.png')
var bgImage = new SimpleImage('dinos.png')
var output  = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for(var pixel of fgImage.values()) {
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        x = pixel.getX();
        y = pixel.getY();
        bgImagePixel = bgImage.getPixel(x, y);
        output.setPixel(x, y, bgImagePixel);
    } else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

print(output)

// part 2

var img = new SimpleImage(200,200);
for (var pixel of img.values()){
  var x = pixel.getX();
  var y = pixel.getY();
  if (x < img.getWidth()/2){
    pixel.setRed(255);
  }
  if (y > img.getHeight()/2){
    pixel.setBlue(255);
  }
  if (y < img.getWidth()/2 && x > img.getWidth()/2) {
    pixel.setGreen(255);
  }
}
print (img);

//part 3

var img = new SimpleImage('lion.jpg')

function setBlack(image) {
      image.setRed(0);
      image.setBlue(0);
      image.setGreen(0);
      return image
}

function addBorder(image, thickness){
    for (var pixel of image.values()){
        if (pixel.getX() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getX() >= image.getWidth()-thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() >= image.getHeight()-thickness){
            pixel = setBlack(pixel);
        }
    }
    return image;
}

addBorder(img, 200)

print(img)
