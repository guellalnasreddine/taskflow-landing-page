
// =========================
// Mobile Navigation Menu
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

// Open and close menu
menuToggle.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", isOpen);//? aria-expanded( يوضح هل القائمة مفتوحة أم مغلقة )

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu when clicking a navigation link
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    });

});

// Close menu using Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navbar.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    }

});
