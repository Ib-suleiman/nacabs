// Enhanced FAQ toggle with smooth slide effect
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
        document.querySelectorAll('.faq-question i').forEach(i => i.classList.replace('fa-chevron-up', 'fa-chevron-down'));

        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
    });
});

// Hover shadow effect for program cards (already included as JS fallback)
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
    });
});
});
