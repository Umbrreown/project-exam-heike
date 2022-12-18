const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("carousel-arrow-prev");
const nextButton = document.getElementById("carousel-arrow-next");

nextButton.addEventListener("click", () => {
  const carouselWidth = carousel.clientWidth;
  carouselContainer.scrollLeft += carouselWidth;
});

prevButton.addEventListener("click", () => {
  const carouselWidth = carousel.clientWidth;
  carouselContainer.scrollLeft -= carouselWidth;
});