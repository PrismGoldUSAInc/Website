// Accessibility Enhancement Script

(function() {
    'use strict';

    // Focus management
    function initFocusManagement() {
        // Add focus-visible polyfill behavior
        const hadKeyboardEvent = false;
        const keyboardThrottleTimeout = 100;

        function onPointerDown() {
            hadKeyboardEvent = false;
        }

        function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            hadKeyboardEvent = true;
        }

        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
    }

    // Screen reader announcements
    function announceToScreenReader(message, priority = 'polite') {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    // Skip link functionality
    function initSkipLink() {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    // Mobile menu accessibility
    function initMobileMenuAccessibility() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-links');
        
        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                menu.classList.toggle('active');
                
                if (!isExpanded) {
                    // Focus first menu item when opening
                    const firstLink = menu.querySelector('a');
                    if (firstLink) {
                        setTimeout(() => firstLink.focus(), 100);
                    }
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.focus();
                }
            });
        }
    }

    // Form accessibility enhancements
    function initFormAccessibility() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        // Add live validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });

        function validateField(e) {
            const field = e.target;
            const group = field.closest('.form-group');
            if (!group) return;

            // Remove existing error
            const existingError = group.querySelector('.error');
            if (existingError) {
                existingError.remove();
            }
            group.classList.remove('has-error');

            // Validate field
            let errorMessage = '';
            
            if (field.hasAttribute('required') && !field.value.trim()) {
                errorMessage = `${getFieldLabel(field)} is required.`;
            } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
                errorMessage = 'Please enter a valid email address.';
            } else if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
                errorMessage = 'Please enter a valid phone number.';
            }

            if (errorMessage) {
                showFieldError(group, field, errorMessage);
            }
        }

        function clearErrors(e) {
            const field = e.target;
            const group = field.closest('.form-group');
            if (!group) return;

            const error = group.querySelector('.error');
            if (error) {
                error.remove();
                group.classList.remove('has-error');
                field.removeAttribute('aria-describedby');
            }
        }

        function showFieldError(group, field, message) {
            group.classList.add('has-error');
            
            const errorEl = document.createElement('div');
            errorEl.className = 'error';
            errorEl.textContent = message;
            errorEl.id = `error-${field.id || field.name}`;
            
            group.appendChild(errorEl);
            field.setAttribute('aria-describedby', errorEl.id);
            
            announceToScreenReader(message, 'assertive');
        }

        function getFieldLabel(field) {
            const label = document.querySelector(`label[for="${field.id}"]`);
            return label ? label.textContent.replace('*', '').trim() : field.name;
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function isValidPhone(phone) {
            return /^[\+]?[\d\s\-\(\)]{10,}$/.test(phone);
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let hasErrors = false;
            inputs.forEach(input => {
                const event = new Event('blur');
                input.dispatchEvent(event);
                if (input.closest('.form-group').classList.contains('has-error')) {
                    hasErrors = true;
                }
            });

            if (hasErrors) {
                announceToScreenReader('Please correct the errors in the form.', 'assertive');
                // Focus first error field
                const firstError = form.querySelector('.has-error input, .has-error textarea, .has-error select');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate form submission
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                
                announceToScreenReader('Thank you! Your message has been sent successfully.', 'assertive');
                form.reset();
            }, 2000);
        });
    }

    // Smooth scrolling with accessibility
    function initAccessibleScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // Check if user prefers reduced motion
                    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    
                    target.scrollIntoView({
                        behavior: prefersReducedMotion ? 'auto' : 'smooth',
                        block: 'start'
                    });
                    
                    // Set focus for keyboard users
                    target.focus();
                    
                    // Announce navigation
                    const targetText = target.querySelector('h1, h2, h3')?.textContent || 'Section';
                    announceToScreenReader(`Navigated to ${targetText}`, 'polite');
                }
            });
        });
    }

    // Keyboard trap for modal-like elements
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    // Initialize all accessibility features
    function init() {
        initFocusManagement();
        initSkipLink();
        initMobileMenuAccessibility();
        initFormAccessibility();
        initAccessibleScrolling();

        // Announce page load
        window.addEventListener('load', function() {
            announceToScreenReader('Prism Gold USA website loaded successfully.', 'polite');
        });

        // Handle navigation announcements
        window.addEventListener('popstate', function() {
            announceToScreenReader('Page navigation completed.', 'polite');
        });
    }

    // Make announceToScreenReader globally available
    window.announceToScreenReader = announceToScreenReader;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();