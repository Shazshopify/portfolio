// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle Menu

menuToggle.addEventListener("click", () => {

   navMenu.classList.toggle("active");

});

// Close Menu After Clicking Any Link

navItems.forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

    });

});

/* ===========================
   SCROLL REVEAL
=========================== */

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section=>{

    revealObserver.observe(section);

});
/* ===========================
   NAVBAR SHADOW
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ===========================
   SCROLL PROGRESS
=========================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.querySelector(".progress-bar").style.width =
        progress + "%";

});
/*==========================
TESTIMONIAL SLIDER
==========================*/

const track = document.querySelector(".testimonial-track");

const nextBtn = document.querySelector(".testimonial-btn.next");

const prevBtn = document.querySelector(".testimonial-btn.prev");

const dots = document.querySelectorAll(".testimonial-dots span");

let current = 0;

const cards = document.querySelectorAll(".testimonial-card");

const cardWidth = cards[0].offsetWidth + 30;

function updateSlider(){

    track.scrollTo({

        left: current * cardWidth,

        behavior:"smooth"

    });

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[current].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    if(current<cards.length-3){

        current++;

    }else{

        current=0;

    }

    updateSlider();

});

prevBtn.addEventListener("click",()=>{

    if(current>0){

        current--;

    }else{

        current=cards.length-3;

    }

    updateSlider();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        if(current>cards.length-3){

            current=cards.length-3;

        }

        updateSlider();

    });

});

setInterval(()=>{

    nextBtn.click();

},5000);
/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});
/* ===========================
   HERO IMAGE FLOAT
=========================== */

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

setInterval(()=>{

heroImage.animate(

[
{
transform:"translateY(0px)"
},
{
transform:"translateY(-10px)"
},
{
transform:"translateY(0px)"
}
],

{
duration:3000,
iterations:1,
easing:"ease-in-out"
}

);

},3000);

}
/* ===========================
   CARD GLOW EFFECT
=========================== */

document.querySelectorAll(

".card,.project-card,.service-card,.process-card,.testimonial-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});