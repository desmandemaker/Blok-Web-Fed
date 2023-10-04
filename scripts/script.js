// JavaScript Document
console.log("hi");

const hamburger = document.querySelector("header nav button");
const navMenu = document.querySelector("header nav ul");



hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll("header nav ul li a").forEach(n => n. 
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



document.addEventListener('DOMContentLoaded', function () {
    // Voeg een eventlistener toe om de dropdown te activeren bij klikken op de knop
    document.querySelectorAll('footer ul li button').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.stopPropagation(); // Stop de gebeurtenispropagatie om te voorkomen dat de pagina sluit
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');
            
            // Sluit alle andere dropdowns
            document.querySelectorAll('footer ul li').forEach(function (dropdown) {
                if (dropdown !== parentLi) {
                    dropdown.classList.remove('active');
                }
            });
        });
    });

    // Sluit de dropdown als er ergens anders op de pagina wordt geklikt
    document.addEventListener('click', function (event) {
        document.querySelectorAll('footer ul li').forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});
