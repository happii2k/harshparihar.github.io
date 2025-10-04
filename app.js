// Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Initialize active nav link
    updateActiveNavLink();

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .education-item, .certification-card, .contact-item, .experience-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .skill-category, .project-card, .education-item, .certification-card, .contact-item, .experience-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .skill-category.animate, .project-card.animate, .education-item.animate, .certification-card.animate, .contact-item.animate, .experience-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: #00e0ff !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on load for elements already in view
    animateOnScroll();

    // Add typing effect to hero title
    function typeWriter(element, text, speed = 100) {
        element.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 500);
    }

    // Add parallax effect to hero section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    // Apply parallax effect on scroll
    window.addEventListener('scroll', parallaxEffect);

    // Add smooth fade-in effect for sections
    function fadeInSections() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = 100;
            
            if (sectionTop < window.innerHeight - sectionVisible) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Add initial styles for section fade-in
    const sectionStyle = document.createElement('style');
    sectionStyle.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        #hero {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(sectionStyle);

    // Run fade-in effect on scroll and load
    window.addEventListener('scroll', fadeInSections);
    fadeInSections();

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect styles
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add loading animation
    function showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <p>Loading Portfolio...</p>
            </div>
        `;
        
        const loaderStyle = document.createElement('style');
        loaderStyle.textContent = `
            #page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #0a0a0f;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            }
            
            .loader-content {
                text-align: center;
                color: #00e0ff;
            }
            
            .loader-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(0, 224, 255, 0.3);
                border-top: 3px solid #00e0ff;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(loaderStyle);
        document.body.appendChild(loader);
        
        // Hide loader after page is fully loaded
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }

    // Show loading animation
    showLoadingAnimation();

    // Add scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        
        const progressStyle = document.createElement('style');
        progressStyle.textContent = `
            #scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #00e0ff, #ffffff);
                z-index: 9999;
                transition: width 0.1s ease;
            }
        `;
        document.head.appendChild(progressStyle);
        document.body.appendChild(progressBar);
        
        function updateScrollProgress() {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        }
        
        window.addEventListener('scroll', updateScrollProgress);
    }

    // Initialize scroll progress indicator
    createScrollProgress();

    console.log('Portfolio loaded successfully!');
});