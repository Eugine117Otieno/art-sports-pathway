
/* =========================
   AUTOMATIC COPYRIGHT YEAR
========================= */
document.querySelectorAll(".year").forEach(function(element) {
    element.textContent = new Date().getFullYear();
});

/* =========================
   CARD REVEAL ANIMATION
========================= */
const cards = document.querySelectorAll(".card, .gallery-item");

cards.forEach(function(card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(function(card) {
    observer.observe(card);
});

/* =========================
   MOTIVATIONAL CONSOLE
========================= */
console.log("Welcome to the Art & Sports Pathway!");
console.log("Discover your talent. Develop your skills. Achieve your dreams.");
