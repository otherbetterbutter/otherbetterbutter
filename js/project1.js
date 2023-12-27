let currentSlide = 0;

function moveSlide(direction) {
  const totalSlides = document.querySelectorAll('.carousel-images img').length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function setCurrentSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = document.querySelector('.carousel-images img').clientWidth;
  const carouselImages = document.querySelector('.carousel-images');
  carouselImages.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

// Initial setup
updateCarousel();
