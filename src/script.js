console.log("JS CONNECTED");

// document.getElementById("btn").addEventListener("click", () => {
//   alert("Tailwind v4 + JS works!");
// });

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('header');
  if (window.scrollY > 0) {
    // Add shadow and transition when scrolling down
    navbar.classList.add('shadow-lg', 'transition', 'duration-300');
  } else {
    // Remove shadow when at the top
    navbar.classList.remove('shadow-lg');
  }
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach((el) => observer.observe(el));

console.log("Reveal count:", reveals.length);