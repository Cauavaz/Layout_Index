class DarkModeToggle {
    constructor() {
        this.toggle = document.getElementById('darkModeToggle');
        this.sunIcon = this.toggle.querySelector('.sun-icon');
        this.moonIcon = this.toggle.querySelector('.moon-icon');
        this.body = document.body;
        this.themeImage = document.querySelector('.img-index');
        this.darkModeImageSrc = './img/index.png';
        this.lightModeImageSrc = './img/indexbauru.png';
        
        this.init();
    }

    init() {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled') {
            this.enableDarkMode();
        } else {
            this.updateThemeImage(false);
        }

        this.toggle.addEventListener('click', () => {
            this.toggleDarkMode();
        });
    }

    enableDarkMode() {
        this.body.classList.add('dark-mode');
        this.sunIcon.style.display = 'none';
        this.moonIcon.style.display = 'block';
        this.updateThemeImage(true);
        localStorage.setItem('darkMode', 'enabled');
    }

    disableDarkMode() {
        this.body.classList.remove('dark-mode');
        this.sunIcon.style.display = 'block';
        this.moonIcon.style.display = 'none';
        this.updateThemeImage(false);
        localStorage.setItem('darkMode', 'disabled');
    }

    updateThemeImage(isDarkMode) {
        if (!this.themeImage) return;
        
        const newSrc = isDarkMode ? this.darkModeImageSrc : this.lightModeImageSrc;
        
        if (this.themeImage.src.includes(newSrc.split('/').pop())) return;
        
        this.themeImage.style.opacity = '0';
        
        setTimeout(() => {
            this.themeImage.src = newSrc;
            this.themeImage.style.opacity = '1';
        }, 350);
    }

    toggleDarkMode() {
        if (this.body.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }
}

class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.items = Array.from(document.querySelectorAll('.carousel-item'));
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        
        this.currentIndex = 0;
        this.itemsToShow = this.getItemsToShow();
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000;
        this.touchStartX = null;
        this.touchStartY = null;
        this.isSwiping = false;
        
        this.init();
    }

    init() {
        this.updateCarousel();
        this.attachEventListeners();
        this.startAutoPlay();
        
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    getItemsToShow() {
        return window.innerWidth <= 900 ? 1 : 2;
    }

    handleResize() {
        const newItemsToShow = this.getItemsToShow();
        if (newItemsToShow !== this.itemsToShow) {
            this.itemsToShow = newItemsToShow;
            if (this.currentIndex >= this.items.length - this.itemsToShow + 1) {
                this.currentIndex = Math.max(0, this.items.length - this.itemsToShow);
            }
            this.updateCarousel();
        }
    }

    attachEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.goToPrevious();
                this.resetAutoPlay();
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.goToNext();
                this.resetAutoPlay();
            });
        }

        if (this.track) {
            this.track.addEventListener('touchstart', (e) => {
                this.handleTouchStart(e);
            });

            this.track.addEventListener('touchmove', (e) => {
                this.handleTouchMove(e);
            });

            this.track.addEventListener('touchend', (e) => {
                this.handleTouchEnd(e);
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.goToPrevious();
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.goToNext();
                this.resetAutoPlay();
            }
        });
    }

    goToPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    goToNext() {
        const maxIndex = this.items.length - this.itemsToShow;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        } else {
            this.currentIndex = 0;
            this.updateCarousel();
        }
    }

    goToSlide(index) {
        const maxIndex = this.items.length - this.itemsToShow;
        this.currentIndex = Math.min(index, maxIndex);
        this.updateCarousel();
    }

    updateCarousel() {
        if (!this.items.length || !this.track) return;
        
        const itemWidth = this.items[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(this.track).gap) || 15;
        const offset = -(this.currentIndex * (itemWidth + gap));
        
        this.track.style.transform = `translateX(${offset}px)`;

        this.items.forEach((item, index) => {
            item.classList.remove('active');
            if (index >= this.currentIndex && index < this.currentIndex + this.itemsToShow) {
                item.classList.add('active');
            }
        });

        this.updateButtons();
    }

    updateButtons() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        const maxIndex = this.items.length - this.itemsToShow;
        
        if (this.currentIndex === 0) {
            this.prevBtn.style.opacity = '0.5';
            this.prevBtn.style.cursor = 'not-allowed';
        } else {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.cursor = 'pointer';
        }

        this.nextBtn.style.opacity = '1';
        this.nextBtn.style.cursor = 'pointer';
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.goToNext();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.isSwiping = false;
    }

    handleTouchMove(e) {
        if (!this.touchStartX) return;

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;
        const diffX = this.touchStartX - touchCurrentX;
        const diffY = this.touchStartY - touchCurrentY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
            this.isSwiping = true;
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.touchStartX || !this.isSwiping) {
            this.touchStartX = null;
            this.touchStartY = null;
            this.isSwiping = false;
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const diff = this.touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.goToNext();
            } else {
                this.goToPrevious();
            }
            this.resetAutoPlay();
        }

        this.touchStartX = null;
        this.touchStartY = null;
        this.isSwiping = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = new DarkModeToggle();
    const carousel = new Carousel();

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.carousel-item, .description');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    const imageContainer = document.querySelector('.image-placeholder');
    if (imageContainer) {
        imageContainer.addEventListener('mouseenter', () => {
            imageContainer.style.animation = 'none';
            setTimeout(() => {
                imageContainer.style.animation = '';
            }, 10);
        });
    }
});
