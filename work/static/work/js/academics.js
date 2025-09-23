document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".academics-section");

  sections.forEach(section => {
    const heading = section.querySelector("h2");

    if (heading) {
      heading.addEventListener("click", () => {
        section.classList.toggle("collapsed");
      });
    }
  });
});
