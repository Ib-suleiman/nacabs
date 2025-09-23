// FAQ Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      if (answer.classList.contains("open")) {
        answer.classList.remove("open");
      } else {
        document.querySelectorAll(".faq-answer").forEach(el => el.classList.remove("open"));
        answer.classList.add("open");
      }
    });
  });
});
