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