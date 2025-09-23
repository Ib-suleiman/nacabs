(function() {
const whatsappBtn = document.getElementById('whatsapp-chat');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
    // scrolling down - hide button
    whatsappBtn.style.transform = 'translateY(100px)';
    whatsappBtn.style.opacity = '0';
    whatsappBtn.style.pointerEvents = 'none';
    } else {
    // scrolling up - show button
    whatsappBtn.style.transform = 'translateY(0)';
    whatsappBtn.style.opacity = '1';
    whatsappBtn.style.pointerEvents = 'auto';
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
})();
