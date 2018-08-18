//part 1

var img = new SimpleImage("smallpanda.png");

print(img.getWidth());

for (var pixel of img.values()) {
    if (pixel.getX() <= 90) {
        pixel.setRed(255);
    }
    else if (pixel.getX() >= 90 && pixel.getX() <= 180) {
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}

print(img);

//part 2

var img = new SimpleImage("smalllion.jpg");

function swapRedGreen(image) {
    for (var pixel of image.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        pixel.setRed(green);
        pixel.setGreen(red);
    }
}

swapRedGreen(img);
print(img);

//part 3

var img = new SimpleImage("duke_blue_devil.png");
print(img);

for (var pixel of img.pixels()) {
    if (pixel.getBlue() >= 255) {
        pixel.setBlue(255);
    } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(img);
