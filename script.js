window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }

});
function revealOnScroll() {

    const elements = document.querySelectorAll(".reveal");

    for (let i = 0; i < elements.length; i++) {

        const windowHeight = window.innerHeight;
        const elementTop = elements[i].getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Hover effect for buttons + links
const hoverTargets = document.querySelectorAll("a, button, .skill-card, .contact-form");

hoverTargets.forEach(el => {

    el.addEventListener("mouseenter", () => {
        cursor.style.background = "radial-gradient(circle, rgba(255,255,255,0.9), rgba(229,9,20,0.6), transparent 70%)";
        cursor.style.transform += " scale(2)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.background = "radial-gradient(circle, rgba(229,9,20,0.7), transparent 70%)";
    });

});
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

