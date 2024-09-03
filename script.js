const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function showItem(index) {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Opcional: autoplay
setInterval(showNext, 3000); // Cambia la imagen cada 3 segundos