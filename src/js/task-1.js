const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showFullImage(images[currentIndex].src);
  });
});

const showFullImage = (src) => {
  fullImage.src = src;
  fullImageContainer.style.display = "flex";
};

fullImageContainer.addEventListener("click", () => {
  fullImageContainer.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (fullImageContainer.style.display === "flex") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showFullImage(images[currentIndex].src);
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showFullImage(images[currentIndex].src);
    } else if (e.key === "Escape") {
      fullImageContainer.style.display = "none";
    }
  }
});
