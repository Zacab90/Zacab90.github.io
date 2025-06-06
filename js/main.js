
  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  });

