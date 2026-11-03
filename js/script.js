
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close menu after clicking a navigation link

const navItems = navLinks.querySelectorAll("a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
