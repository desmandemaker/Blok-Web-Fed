// JavaScript Document
console.log("hi");

const hamburger = document.querySelector("header nav button");
const navMenu = document.querySelector(".nav-menu");



hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click", ()=> {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")

    }))


//     document.addEventListener('DOMContentLoaded', function () {
//         const slider = document.querySelector('.slider');
//         const slides = document.querySelectorAll('.slide');
//         const prevBtn = document.querySelector('.prev');
//         const nextBtn = document.querySelector('.next');
//         const dots = document.querySelectorAll('.dot');

//         let currentIndex = 0;

//     function updateSlider() {
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;

//         // Stel alle stippen opnieuw in op de standaardstijl
//         dots.forEach(dot => dot.classList.remove('active'));

//         // Markeer de huidige stip
//         dots[currentIndex].classList.add('active');
//     }

//     // Volgende slide
//     nextBtn.addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % slides.length;
//         updateSlider();
//     });

//     // Vorige slide
//     prevBtn.addEventListener('click', function () {
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         updateSlider();
//     });

//     // Navigeer naar een specifieke slide wanneer op een stip wordt geklikt
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', function () {
//             currentIndex = index;
//             updateSlider();
//         });
//     });

//     // Start de slider met de eerste slide
//     updateSlider();
// });

// dit dit en dit gedaan, niet gelukt dus toen na 2 uur gevraagd in chatgpt naar wat ik kon doen kreeg ik dingen met divjes, snapte ik niks van toen heb ik " css slider flexbox" opgezocht, en daar ben ik mee verdrer gaan sleutelebn//



