let currentIndex = 0;

const showSlide = (index) => {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;

  // Wrap around logic
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Apply transform
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};

const prevSlide = () => {
  showSlide(currentIndex - 1);
};
