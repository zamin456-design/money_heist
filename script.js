/**
 * Money Heist Web Project - Logic File
 * Handles: Scroll Effects, Smooth Navigation, and Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECT ELEMENTS
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links');
    const charCards = document.querySelectorAll('.char-card');

    // 2. STICKY NAVBAR EFFECT
    // Changes navbar background opacity on scroll to keep text readable
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. SMOOTH SCROLLING FOR NAV LINKS
    // Ensures clicking "Crew" or "About" slides the page down gracefully
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. SCROLL REVEAL ANIMATION (Intersection Observer)
    // Makes the character cards fade in as you scroll down to them
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const charObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    // Initial state for cards (hidden before scroll)
    charCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        charObserver.observe(card);
    });

    // 5. BUTTON INTERACTION (CONSOLE LOG)
    // Mimics the "Intelligence" feel of the show
    const watchBtn = document.querySelector('.btn-red');
    watchBtn.addEventListener('click', () => {
        console.log("Transmission intercepted... Redirecting to Netflix.");
    });

});