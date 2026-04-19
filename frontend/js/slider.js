class Slider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        if (!this.slider) return;

        this.wrapper = this.slider.querySelector('.slider__wrapper');
        this.slides = this.slider.querySelectorAll('.slider__slide');
        this.dots = this.slider.querySelectorAll('.slider__dot');
        
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        
        this.init();
    }

    init() {
        if (this.dots.length > 0) {
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });
        }

        // Автоматическое перелистывание (опционально)
        setInterval(() => this.nextSlide(), 5000);
    }

    goToSlide(index) {
        if (index < 0 || index >= this.slideCount) return;

        this.currentSlide = index;
        this.wrapper.style.transform = `translateX(-${index * 100}%)`;
        
        // Обновляем активную точку
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('slider__dot--active');
            } else {
                dot.classList.remove('slider__dot--active');
            }
        });
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slideCount;
        this.goToSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.goToSlide(prev);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider('.slider');
});