// this is using the duke simple Image Libary
var img = new SimpleImage(200,200);

for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255); 
}
print(img);

for (var pixel of img.values()) {
    pixel.setGreen(0);
    pixel.setBlue(255);
}
print(img);
