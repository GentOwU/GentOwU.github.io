// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js

let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight; // Get the header's height

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the header by moving it up by its height
    if (scrollTop > lastScrollTop) {
        header.style.transform = `translateY(-${headerHeight}px)`; // Hide header completely
    } else {
        header.style.transform = 'translateY(0)'; // Show header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
