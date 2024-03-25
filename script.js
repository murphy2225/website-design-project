let images = [
  "images/center_image1.jpg",
  "images/center_image2.jpg",
  "images/center_image3.jpg",
  "images/center_image4.jpg",
  "images/center_image5.jpg",
  "images/main_image.jpg",
];
let currentImageIndex = 0;
function nextImage() {
  currentImageIndex = currentImageIndex + 1;
  if (currentImageIndex > images.length - 1) {
    currentImageIndex = 0;
  }
  showImage();
}
function showImage() {
  let currentImage = images[currentImageIndex];
  let getImage = document.getElementById("top-section");
  getImage.style.backgroundImage = "url(" + currentImage + ")";
}
function previousImage() {
  currentImageIndex = currentImageIndex - 1;
  if (currentImageIndex === -1) {
    currentImageIndex = images.length - 1;
  }
  showImage();
}
