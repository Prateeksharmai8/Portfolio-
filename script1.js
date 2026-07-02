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
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";
    const scrollPosition = window.scrollY + 250;

    sections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            current = section.id;
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

/* ===================================
   Apple Liquid Navbar Auto Scroll
=================================== */

const navWrapper = document.querySelector(".nav-wrapper");
const activeLink = document.querySelector(".nav-links .active");

if(activeLink){

    activeLink.scrollIntoView({

        behavior:"smooth",

        inline:"center",

        block:"nearest"

    });

}

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        setTimeout(()=>{

            link.scrollIntoView({

                behavior:"smooth",

                inline:"center",

                block:"nearest"

            });

        },150);

    });

});

function revealOnScroll(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        const top = element.getBoundingClientRect().top;
        const visible = window.innerHeight * 0.85;

        if(top < visible){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ===================================
   BUTTON RIPPLE EFFECT
=================================== */

const rippleButtons = document.querySelectorAll(

".btn-primary, .btn-secondary, .project-buttons a, .contact-form button, .social-icons a"

);

rippleButtons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
