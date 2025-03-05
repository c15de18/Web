let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(i) {
    if (i >= totalSlides) index = 0;
    else if (i < 0) index = totalSlides - 1;
    else index = i;

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
}

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    showSlide(index);
    resetAutoSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    showSlide(index);
    resetAutoSlide();
}

// Function to navigate with thumbnails
function currentSlide(n) {
    index = n;
    showSlide(index);
    resetAutoSlide();
}

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Touch/swipe functionality for mobile
document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextSlide(); // Swipe left
    if (touchEndX - touchStartX > 50) prevSlide(); // Swipe right
});

// Show first slide initially
showSlide(index);
