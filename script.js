class DarkModeToggle {
    constructor() {
        this.toggle = document.getElementById('darkModeToggle');
        this.sunIcon = this.toggle.querySelector('.sun-icon');
        this.moonIcon = this.toggle.querySelector('.moon-icon');
        this.body = document.body;
        this.themeImage = document.querySelector('.img-index');
        this.darkModeImageSrc = './img/index.png';
        this.lightModeImageSrc = './img/indexbauru.png';
        this.robotDark = document.getElementById('robot-dark');
        this.robotLight = document.getElementById('robot-light');
        this.robotDescriptionIcon = document.getElementById('robotDescriptionIcon');
        this.robotDescriptionTitle = document.getElementById('robotDescriptionTitle');
        this.robotDescriptionText = document.getElementById('robotDescriptionText');
        this.robotDescriptionHighlight = document.getElementById('robotDescriptionHighlight');
        this.robotMainTitle = document.getElementById('robotMainTitle');
        this.robotSubtitle = document.getElementById('robotSubtitle');
        this.carouselTitle = document.querySelector('.carousel-title');
        this.carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
        
        this.init();
    }

    init() {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled') {
            this.enableDarkMode();
        } else {
            this.updateThemeImage(false);
            this.updateRobots(false);
            this.updateRobotHeadings(false);
            this.updateRobotDescription(false);
            this.updateCarouselThemeContent(false);
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
        this.updateRobots(true);
        this.updateRobotHeadings(true);
        this.updateRobotDescription(true);
        this.updateCarouselThemeContent(true);
        if (window.initParticlesTheme) {
            window.initParticlesTheme(true);
        }
        localStorage.setItem('darkMode', 'enabled');
    }

    disableDarkMode() {
        this.body.classList.remove('dark-mode');
        this.sunIcon.style.display = 'block';
        this.moonIcon.style.display = 'none';
        this.updateThemeImage(false);
        this.updateRobots(false);
        this.updateRobotHeadings(false);
        this.updateRobotDescription(false);
        this.updateCarouselThemeContent(false);
        if (window.initParticlesTheme) {
            window.initParticlesTheme(false);
        }
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

    updateRobots(isDarkMode) {
        if (!this.robotDark || !this.robotLight) return;
        
        if (isDarkMode) {
            this.robotDark.style.display = 'block';
            this.robotLight.style.display = 'none';
        } else {
            this.robotDark.style.display = 'none';
            this.robotLight.style.display = 'block';
        }
    }

    updateRobotDescription(isDarkMode) {
        if (!this.robotDescriptionTitle || !this.robotDescriptionText || !this.robotDescriptionHighlight || !this.robotDescriptionIcon) {
            return;
        }

        if (isDarkMode) {
            this.robotDescriptionIcon.className = 'fa-solid fa-moon';
            this.robotDescriptionTitle.textContent = 'SHADOW NEXUS: Poder e Imersão';
            this.robotDescriptionText.textContent = 'No modo dark, o SHADOW NEXUS emerge como uma presença tecnológica marcante e futurista. Seu design em tons escuros cria uma atmosfera imersiva que transmite poder e sofisticação. Este robô representa a vanguarda da inovação, combinando estética cyberpunk com funcionalidade de ponta. Cada detalhe foi pensado para criar uma experiência visual impactante e memorável.';
            this.robotDescriptionHighlight.textContent = 'Ideal para projetos que buscam transmitir autoridade tecnológica, performance extrema e uma identidade visual ousada que não passa despercebida.';
            return;
        }

        this.robotDescriptionIcon.className = 'fa-solid fa-sun';
        this.robotDescriptionTitle.textContent = 'LUMINA PRIME: Elegância e Clareza';
        this.robotDescriptionText.textContent = 'No modo claro, o LUMINA PRIME se apresenta com uma estética clean e moderna que transmite acessibilidade e sofisticação. Seu design em tons claros cria uma atmosfera acolhedora e profissional, perfeita para experiências que valorizam a clareza visual. Este robô simboliza inovação com elegância, combinando formas suaves com tecnologia de ponta para criar uma presença marcante sem ser invasiva.';
        this.robotDescriptionHighlight.textContent = 'Perfeito para soluções que priorizam usabilidade, confiança e uma identidade visual que comunica modernidade de forma objetiva e memorável.';
    }

    updateRobotHeadings(isDarkMode) {
        if (!this.robotMainTitle || !this.robotSubtitle) return;

        if (isDarkMode) {
            this.robotMainTitle.textContent = 'NOX TITAN';
            this.robotSubtitle.textContent = 'Potência visual para uma jornada futurista, intensa e imersiva.';
            return;
        }

        this.robotMainTitle.textContent = 'LUMINA PRIME';
        this.robotSubtitle.textContent = 'Elegância em movimento para experiências claras e memoráveis.';
    }

    updateCarouselThemeContent(isDarkMode) {
        if (!this.carouselItems.length) return;

        const darkContent = {
            sectionTitle: 'NOX TITAN em ação: poder, precisão e presença',
            cards: [
                {
                    icon: 'fa-solid fa-moon',
                    title: 'Modo Noturno Imersivo',
                    description: 'O robô preto domina cenas escuras com presença premium e visual cinematográfico.'
                },
                {
                    icon: 'fa-solid fa-gauge-high',
                    title: 'Performance de Elite',
                    description: 'Respostas rápidas e movimentos fluidos para uma experiência mais intensa.'
                },
                {
                    icon: 'fa-solid fa-shield-halved',
                    title: 'Blindagem Inteligente',
                    description: 'Arquitetura estável para operar com confiabilidade mesmo em cenários exigentes.'
                },
                {
                    icon: 'fa-solid fa-wave-square',
                    title: 'Leitura de Ambiente',
                    description: 'Interpreta contexto visual com precisão para reações mais naturais e impactantes.'
                },
                {
                    icon: 'fa-solid fa-dragon',
                    title: 'Presença Marcante',
                    description: 'Design escuro e robusto que comunica força tecnológica em cada interação.'
                },
                {
                    icon: 'fa-solid fa-circle-play',
                    title: 'Ativar NOX TITAN',
                    description: 'Experimente o modo dark completo e veja o robô preto no seu máximo potencial.',
                  
                }
            ]
        };

        const lightContent = {
            sectionTitle: 'LUMINA PRIME em ação: leveza, clareza e conexão',
            cards: [
                {
                    icon: 'fa-solid fa-sun',
                    title: 'Estética Clara e Elegante',
                    description: 'O robô branco entrega uma presença limpa, moderna e convidativa.'
                },
                {
                    icon: 'fa-solid fa-comment-dots',
                    title: 'Comunicação Amigável',
                    description: 'Interações naturais que aproximam o usuário e facilitam a navegação.'
                },
                {
                    icon: 'fa-solid fa-wand-magic-sparkles',
                    title: 'Experiência Fluida',
                    description: 'Transições suaves e comportamento consistente para uma jornada agradável.'
                },
                {
                    icon: 'fa-solid fa-chart-line',
                    title: '+42% Engajamento',
                    description: 'Visual claro com mensagens objetivas aumenta foco e retenção do usuário.'
                },
                {
                    icon: 'fa-solid fa-feather-pointed',
                    title: 'Leve, sem perder potência',
                    description: 'Interface delicada com tecnologia robusta para escalar com equilíbrio.'
                },
                {
                    icon: 'fa-solid fa-circle-play',
                    title: 'Ativar LUMINA PRIME',
                    description: 'Teste o modo claro e descubra a versão mais acolhedora da experiência.',
                }
            ]
        };

        const themeContent = isDarkMode ? darkContent : lightContent;

        if (this.carouselTitle) {
            this.carouselTitle.textContent = themeContent.sectionTitle;
        }

        this.carouselItems.forEach((item, index) => {
            const card = themeContent.cards[index];
            if (!card) return;

            const iconElement = item.querySelector('.icon-label i');
            const titleElement = item.querySelector('.text-box h4');
            const descriptionElement = item.querySelector('.text-box p');
            const ctaElement = item.querySelector('.carousel-cta');

            if (iconElement) {
                iconElement.className = card.icon;
            }

            if (titleElement) {
                titleElement.textContent = card.title;
            }

            if (descriptionElement) {
                descriptionElement.textContent = card.description;
            }

            if (ctaElement && card.cta) {
                ctaElement.textContent = card.cta;
            }
        });
    }

    toggleDarkMode() {
        if (this.body.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }
}

class TargetCursor {
    constructor({
        targetSelector = '.cursor-target',
        spinDuration = 2,
        hideDefaultCursor = true,
        hoverDuration = 0.2,
        parallaxOn = true
    } = {}) {
        this.targetSelector = targetSelector;
        this.spinDuration = spinDuration;
        this.hideDefaultCursor = hideDefaultCursor;
        this.hoverDuration = hoverDuration;
        this.parallaxOn = parallaxOn;

        this.borderWidth = 3;
        this.cornerSize = 12;

        this.cursor = null;
        this.dot = null;
        this.corners = [];
        this.spinTl = null;
        this.activeTarget = null;
        this.targetCornerPositions = null;
        this.activeStrength = { value: 0 };

        this.originalCursor = document.body.style.cursor;
        this.resumeTimeout = null;

        this.init();
    }

    isMobileDevice() {
        const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth <= 768;
        const userAgent = navigator.userAgent || navigator.vendor || '';
        const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
        const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase());
        return (hasTouchScreen && isSmallScreen) || isMobileUserAgent;
    }

    init() {
        if (!window.gsap || this.isMobileDevice()) return;

        this.createCursorElement();
        if (!this.cursor) return;

        if (this.hideDefaultCursor) {
            document.body.style.cursor = 'none';
        }

        gsap.set(this.cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        this.createSpinTimeline();
        this.bindEvents();
    }

    createCursorElement() {
        const wrapper = document.createElement('div');
        wrapper.className = 'target-cursor-wrapper';
        wrapper.innerHTML = `
            <div class="target-cursor-dot"></div>
            <div class="target-cursor-corner corner-tl"></div>
            <div class="target-cursor-corner corner-tr"></div>
            <div class="target-cursor-corner corner-br"></div>
            <div class="target-cursor-corner corner-bl"></div>
        `;

        document.body.appendChild(wrapper);
        this.cursor = wrapper;
        this.dot = wrapper.querySelector('.target-cursor-dot');
        this.corners = Array.from(wrapper.querySelectorAll('.target-cursor-corner'));
    }

    createSpinTimeline() {
        if (this.spinTl) this.spinTl.kill();
        this.spinTl = gsap.timeline({ repeat: -1 }).to(this.cursor, {
            rotation: '+=360',
            duration: this.spinDuration,
            ease: 'none'
        });
    }

    moveCursor(x, y) {
        if (!this.cursor) return;
        gsap.to(this.cursor, {
            x,
            y,
            duration: 0.1,
            ease: 'power3.out'
        });
    }

    updateCornersToTarget() {
        if (!this.targetCornerPositions || !this.corners.length || !this.cursor) return;

        const strength = this.activeStrength.value;
        if (strength === 0) return;

        const cursorX = gsap.getProperty(this.cursor, 'x');
        const cursorY = gsap.getProperty(this.cursor, 'y');

        this.corners.forEach((corner, index) => {
            const currentX = gsap.getProperty(corner, 'x');
            const currentY = gsap.getProperty(corner, 'y');

            const targetX = this.targetCornerPositions[index].x - cursorX;
            const targetY = this.targetCornerPositions[index].y - cursorY;

            const finalX = currentX + (targetX - currentX) * strength;
            const finalY = currentY + (targetY - currentY) * strength;
            const duration = strength >= 0.99 ? (this.parallaxOn ? 0.2 : 0) : 0.05;

            gsap.to(corner, {
                x: finalX,
                y: finalY,
                duration,
                ease: duration === 0 ? 'none' : 'power1.out',
                overwrite: 'auto'
            });
        });
    }

    handleTargetEnter(target) {
        if (!target || !this.cursor) return;
        if (this.activeTarget === target) return;

        this.activeTarget = target;
        if (this.resumeTimeout) {
            clearTimeout(this.resumeTimeout);
            this.resumeTimeout = null;
        }

        this.corners.forEach((corner) => gsap.killTweensOf(corner));
        gsap.killTweensOf(this.cursor, 'rotation');
        this.spinTl?.pause();
        gsap.set(this.cursor, { rotation: 0 });

        const rect = target.getBoundingClientRect();
        const cursorX = gsap.getProperty(this.cursor, 'x');
        const cursorY = gsap.getProperty(this.cursor, 'y');

        this.targetCornerPositions = [
            { x: rect.left - this.borderWidth, y: rect.top - this.borderWidth },
            { x: rect.right + this.borderWidth - this.cornerSize, y: rect.top - this.borderWidth },
            { x: rect.right + this.borderWidth - this.cornerSize, y: rect.bottom + this.borderWidth - this.cornerSize },
            { x: rect.left - this.borderWidth, y: rect.bottom + this.borderWidth - this.cornerSize }
        ];

        gsap.to(this.activeStrength, {
            value: 1,
            duration: this.hoverDuration,
            ease: 'power2.out'
        });

        this.corners.forEach((corner, index) => {
            gsap.to(corner, {
                x: this.targetCornerPositions[index].x - cursorX,
                y: this.targetCornerPositions[index].y - cursorY,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    }

    handleTargetLeave() {
        if (!this.corners.length) return;

        this.activeTarget = null;
        this.targetCornerPositions = null;
        gsap.to(this.activeStrength, { value: 0, duration: 0.12, overwrite: true });

        const positions = [
            { x: -this.cornerSize * 1.5, y: -this.cornerSize * 1.5 },
            { x: this.cornerSize * 0.5, y: -this.cornerSize * 1.5 },
            { x: this.cornerSize * 0.5, y: this.cornerSize * 0.5 },
            { x: -this.cornerSize * 1.5, y: this.cornerSize * 0.5 }
        ];

        this.corners.forEach((corner, index) => {
            gsap.to(corner, {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.25,
                ease: 'power3.out'
            });
        });

        this.resumeTimeout = setTimeout(() => {
            if (!this.activeTarget && this.cursor) {
                const currentRotation = gsap.getProperty(this.cursor, 'rotation');
                const normalizedRotation = currentRotation % 360;
                this.createSpinTimeline();
                gsap.to(this.cursor, {
                    rotation: normalizedRotation + 360,
                    duration: this.spinDuration * (1 - normalizedRotation / 360),
                    ease: 'none',
                    onComplete: () => {
                        this.spinTl?.restart();
                    }
                });
            }
            this.resumeTimeout = null;
        }, 50);
    }

    bindEvents() {
        this.moveHandler = (e) => {
            this.moveCursor(e.clientX, e.clientY);
            if (this.activeTarget) {
                this.updateCornersToTarget();
            }
        };

        this.mouseOverHandler = (e) => {
            const target = e.target.closest(this.targetSelector);
            if (target) {
                this.handleTargetEnter(target);
            }
        };

        this.mouseOutHandler = (e) => {
            if (!this.activeTarget) return;
            const isLeavingActiveTarget =
                e.target === this.activeTarget ||
                (e.target.closest && e.target.closest(this.targetSelector) === this.activeTarget);

            if (isLeavingActiveTarget && !this.activeTarget.contains(e.relatedTarget)) {
                this.handleTargetLeave();
            }
        };

        this.mouseDownHandler = () => {
            if (!this.dot || !this.cursor) return;
            gsap.to(this.dot, { scale: 0.7, duration: 0.2 });
            gsap.to(this.cursor, { scale: 0.9, duration: 0.15 });
        };

        this.mouseUpHandler = () => {
            if (!this.dot || !this.cursor) return;
            gsap.to(this.dot, { scale: 1, duration: 0.2 });
            gsap.to(this.cursor, { scale: 1, duration: 0.15 });
        };

        window.addEventListener('mousemove', this.moveHandler);
        window.addEventListener('mouseover', this.mouseOverHandler, { passive: true });
        window.addEventListener('mouseout', this.mouseOutHandler, { passive: true });
        window.addEventListener('mousedown', this.mouseDownHandler);
        window.addEventListener('mouseup', this.mouseUpHandler);
    }
}

class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.container = document.querySelector('.carousel-container');
        this.items = Array.from(document.querySelectorAll('.carousel-item'));
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.dots = [];
        
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
        this.createDots();
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
            this.createDots();
            this.updateCarousel();
        }
    }

    createDots() {
        if (!this.dotsContainer) return;

        const pageCount = Math.max(1, this.items.length - this.itemsToShow + 1);
        this.dotsContainer.innerHTML = '';
        this.dots = [];

        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);

            dot.addEventListener('click', () => {
                this.goToSlide(i);
                this.resetAutoPlay();
            });

            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        }
    }

    updateDots() {
        if (!this.dots.length) return;

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
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
        const maxIndex = Math.max(0, this.items.length - this.itemsToShow);
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : maxIndex;
        this.updateCarousel();
    }

    goToNext() {
        const maxIndex = Math.max(0, this.items.length - this.itemsToShow);
        this.currentIndex = this.currentIndex < maxIndex ? this.currentIndex + 1 : 0;
        this.updateCarousel();
    }

    goToSlide(index) {
        const maxIndex = Math.max(0, this.items.length - this.itemsToShow);
        this.currentIndex = Math.min(index, maxIndex);
        this.updateCarousel();
    }

    updateCarousel() {
        if (!this.items.length || !this.track || !this.container) return;

        const gap = parseFloat(getComputedStyle(this.track).gap) || 15;
        const containerWidth = this.container.clientWidth;
        const itemWidth = (containerWidth - gap * (this.itemsToShow - 1)) / this.itemsToShow;

        this.items.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
            item.style.maxWidth = `${itemWidth}px`;
        });

        const offset = -(this.currentIndex * (itemWidth + gap));
        
        this.track.style.transform = `translateX(${offset}px)`;

        this.items.forEach((item, index) => {
            item.classList.remove('active');
            if (index >= this.currentIndex && index < this.currentIndex + this.itemsToShow) {
                item.classList.add('active');
            }
        });

        this.updateDots();
        this.updateButtons();
    }

    updateButtons() {
        if (!this.prevBtn || !this.nextBtn) return;

        this.prevBtn.style.opacity = '1';
        this.prevBtn.style.cursor = 'pointer';
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

    const cursorTargets = document.querySelectorAll(
        'button, a[href], [role="button"], input:not([type="hidden"]), select, textarea, summary'
    );
    cursorTargets.forEach((el) => el.classList.add('cursor-target'));

    const targetCursor = new TargetCursor({
        spinDuration: 2,
        hideDefaultCursor: true,
        parallaxOn: true,
        hoverDuration: 0.2
    });

    window.initParticlesTheme = (isDarkMode) => {
        if (!window.particlesJS) return;

        const particleColor = isDarkMode ? '#b8a4d9' : '#9c83c5';
        const lineColor = isDarkMode ? '#ff8c42' : '#9c83c5';

        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom.forEach((item) => {
                item.pJS.fn.vendors.destroypJS();
            });
            window.pJSDom = [];
        }

        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: particleColor
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.35,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.6,
                        opacity_min: 0.12,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 160,
                    color: lineColor,
                    opacity: 0.22,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2.2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        line_linked: {
                            opacity: 0.4
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    };

    window.initParticlesTheme(document.body.classList.contains('dark-mode'));

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
