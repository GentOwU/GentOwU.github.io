// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Scroll to the target element smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header Hide on Scroll Down and Show on Scroll Up
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight; // Get the header's height
let debounceTimer;

window.addEventListener('scroll', function () {
    clearTimeout(debounceTimer); // Clear the previous timeout
    debounceTimer = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down: hide the header
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            // Scrolling up: show the header
            header.style.transform = 'translateY(0)';
        }

        // Update lastScrollTop with the current scroll position
        lastScrollTop = Math.max(scrollTop, 0); // Prevent negative values
    }, 100); // Adjust debounce time as necessary
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger'); // Hamburger button
const navMenu = document.querySelector('.nav-menu');    // Navigation menu

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the active class to show/hide menu
});
