let img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13;
let sketchbook;
let index = 0;

function preload() {
  img0 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00000.jpg");
  img1 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00001.jpg");
  img2 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00002.jpg");
  img3 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00003.jpg");
  img4 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00004.jpg");
  img5 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00005.jpg");
  img6 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00006.jpg");
  img7 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00007.jpg");
  img8 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00008.jpg");
  img9 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00009.jpg");
  img10 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00010.jpg");
  img11 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00011.jpg");
  img12 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00001.jpg");
  img13 = loadImage("/img/Maggie-Umber-The-Tooth-sketchbook-00013.jpg");
}

function setup() {
  createCanvas(windowWidth / 2, windowWidth * .25);
  sketchbook = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
}

function draw() {
  background(150);
  image(sketchbook[index], 0, 0);
}

function mousePressed() {
  index = index + 1;
  if (index == sketchbook.length) {
    index = 0;
  }
}

// sketchbook.resize(windowWidth / 2, 0);