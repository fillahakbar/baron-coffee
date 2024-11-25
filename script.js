document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update the year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Show popup on page load
window.addEventListener('load', () => {
    const popup = document.getElementById('promo-popup');
    popup.classList.add('active');
});

// Close popup when button is clicked
document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('promo-popup');
    popup.classList.remove('active');
});
