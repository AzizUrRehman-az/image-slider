"use strict";

let i = 0;
let images = [];

images[0] = "Images/img-1.jpg";
images[1] = "Images/img-2.jpg";
images[2] = "Images/img-3.jpg";
images[3] = "Images/img-4.jpg";

function slideShow() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
