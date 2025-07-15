// Main JavaScript File for Prism Gold USA Website

(function() {
    'use strict';

    // Smooth scrolling for navigation
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Fade in animation on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add fade-in class to elements that should animate
        const animatedElements = [
            '.carat-card',
            '.product-card',
            '.stat-item',
            '.contact-item',
            '.about-text',
            '.stats-container'
        ];

        animatedElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        });
    }

    // Header background change on scroll
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        function updateHeader() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.1)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
                header.style.boxShadow = 'none';
            }
        }

        window.addEventListener('scroll', updateHeader);
        updateHeader(); // Initial call
    }

    // Mouse parallax effect for floating elements
    function initParallaxEffect() {
        const floatingElements = document.querySelectorAll('.floating-gold');
        if (floatingElements.length === 0) return;

        // Only add parallax if user doesn't prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-links');
        
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function() {
            const isActive = menu.classList.contains('active');
            menu.classList.toggle('active');
            
            // Update ARIA attributes
            this.setAttribute('aria-expanded', !isActive);
            
            // Change icon
            const icon = this.querySelector('span');
            if (icon) {
                icon.textContent = isActive ? '☰' : '✕';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                const icon = toggle.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
            }
        });

        // Close menu when clicking on a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                const icon = toggle.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
            });
        });
    }

    // Product card interactions
    function initProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const button = card.querySelector('.product-btn');
            if (button) {
                button.addEventListener('click', function() {
                    const productName = card.querySelector('h3').textContent;
                    
                    // Simple modal or alert for demo purposes
                    alert(`More information about ${productName} would be displayed here. In a real website, this would open a detailed product page or modal.`);
                    
                    // In a real implementation, you might:
                    // - Open a modal with detailed product information
                    // - Navigate to a dedicated product page
                    // - Trigger a contact form with pre-filled product interest
                });
            }
        });
    }

    // Carat card interactions
    function initCaratCards() {
        const caratCards = document.querySelectorAll('.carat-card');
        
        caratCards.forEach(card => {
            card.addEventListener('click', function() {
                // Add visual feedback
                this.style.transform = 'translateY(-15px) scale(1.02)';
                
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
                
                // Announce to screen readers
                const caratType = this.querySelector('h3').textContent;
                const purity = this.querySelector('.carat-purity').textContent;
                
                if (window.announceToScreenReader) {
                    window.announceToScreenReader(`Selected ${caratType} with ${purity} purity`, 'polite');
                }
            });

            // Keyboard interaction
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    // Contact form enhancement
    function initContactForm() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        // Interest selection auto-focus message field
        const interestSelect = form.querySelector('#interest');
        const messageField = form.querySelector('#message');
        
        if (interestSelect && messageField) {
            interestSelect.addEventListener('change', function() {
                if (this.value && !messageField.value) {
                    const interestText = this.options[this.selectedIndex].text;
                    messageField.placeholder = `I'm interested in learning more about ${interestText}. Please provide more information about pricing, availability, and investment options.`;
                }
            });
        }
    }

    // Pricing calculator (simple demo)
    function initPricingCalculator() {
        // This would connect to a real gold price API in production
        const currentGoldPrice = 2000; // USD per ounce (demo value)
        
        function calculateGoldValue(weight, purity) {
            const purityMultiplier = {
                '24k': 0.9999,
                '23k': 0.9583,
                '22k': 0.917
            };
            
            return weight * currentGoldPrice * (purityMultiplier[purity] || 1);
        }

        // Example usage - this could be integrated into product cards
        window.calculateGoldValue = calculateGoldValue;
    }

    // Performance optimization - lazy loading
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }

    // Add CSS for fade-in animations
    function addFadeInStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .fade-in {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease;
            }
            
            .fade-in.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Stagger animation delays */
            .carat-card:nth-child(1) { transition-delay: 0.1s; }
            .carat-card:nth-child(2) { transition-delay: 0.2s; }
            .carat-card:nth-child(3) { transition-delay: 0.3s; }
            
            .product-card:nth-child(1) { transition-delay: 0.1s; }
            .product-card:nth-child(2) { transition-delay: 0.2s; }
            .product-card:nth-child(3) { transition-delay: 0.3s; }
            .product-card:nth-child(4) { transition-delay: 0.4s; }
            
            .stat-item:nth-child(1) { transition-delay: 0.1s; }
            .stat-item:nth-child(2) { transition-delay: 0.2s; }
            .stat-item:nth-child(3) { transition-delay: 0.3s; }
            .stat-item:nth-child(4) { transition-delay: 0.4s; }
        `;
        document.head.appendChild(style);
    }

    // Initialize all functionality
    function init() {
        addFadeInStyles();
        initSmoothScrolling();
        initScrollAnimations();
        initHeaderScroll();
        initParallaxEffect();
        initMobileMenu();
        initProductCards();
        initCaratCards();
        initContactForm();
        initPricingCalculator();
        initLazyLoading();

        // Log successful initialization
        console.log('Prism Gold USA website initialized successfully');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();