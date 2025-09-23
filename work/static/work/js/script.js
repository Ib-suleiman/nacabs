/*--------------------------------------------------------
    scripts.js
    Shared interactivity: mobile menu, year injection,
    contact form validation
    \--------------------------------------------------------*/
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
    });
    document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
    if (mainNav.classList.contains('active')) {
    mainNav.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    });
    });
    }
    
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
    }
    
    // Simple form validation (only on contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !phone || !message) {
    return alert('Please fill in all fields');
    }
    if (!/^\[^\s@]+@\[^\s@]+.\[^\s@]+\$/.test(email)) {
    return alert('Please enter a valid email address');
    }
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
    });
    }
