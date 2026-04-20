document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("h2, h3, p, table, .callout, img");
  
  elements.forEach(el => el.classList.add("scroll-reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});