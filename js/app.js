const $button = document.querySelector(".button-hamburguer");
const $line1 = document.querySelector(".line-1");
const $line2 = document.querySelector(".line-2");
const $line3 = document.querySelector(".line-3");
const $nav = document.querySelector(".mobile__nav");
const $buttonLines = document.querySelectorAll(".animated");
const $body = document.querySelector("#body");

let contador = 0;
let header = document.querySelector('.header');
let $logo = document.querySelector('#logo');
//scroll header
window.onscroll = function() {
    var y = window.scrollY;
    if (y => 100) {
        header.classList.add('scrolled');
        $logo.src = "img/LLT logo.svg"
        $button.classList.add("buttonScrolled");
        // header.style.transition = "400ms ease all";
        // backToTop.classList.add('opacity-1');

    }
    if (y < 100) {
        header.classList.remove('scrolled');
        $logo.src = "img/LLT logo light.svg"
        $button.classList.remove("buttonScrolled");


        // backToTop.classList.remove('opacity-1');
    }
};

$button.addEventListener("click", (e) => {
    contador = contador + 1;
    if (contador == 1) {
        $body.style.overflowY = "hidden";
        $line1.classList.add("animation-1");
        $line2.classList.add("animation-3");
        $line3.classList.add("animation-2");
        $line1.classList.remove("no-animation");
        $line2.classList.remove("no-animation");
        $line3.classList.remove("no-animation");
        contador = contador - 2;
        $nav.classList.add("active");
        $button.classList.remove("buttonScrolled");
        // $nav.inert = false;


    } else {
        $line1.classList.remove("animation-1");
        $line2.classList.remove("animation-3");
        $body.style.overflowY = "auto";
        $line3.classList.remove("animation-2");
        // $nav.inert = true;
        $nav.classList.remove("active");
        y = window.scrollY;
        if (y >= 100) {
            $button.classList.add("buttonScrolled");
        } else {
            $button.classList.remove("buttonScrolled");
        }
    }
});

//modal functions
//open button
const $modalBtn1 = document.querySelector(".calendar__btn--1");
const $modalBtn2 = document.querySelector(".calendar__btn--2");
const $modalBtn3 = document.querySelector(".calendar__btn--3");
//close button
const $modalCloseBtn = document.querySelectorAll(".close__btn");
// modal menu
const $modal1 = document.querySelector(".modal-1");
const $modal2 = document.querySelector(".modal-2");
const $modal3 = document.querySelector(".modal-3");

$modalBtn1.addEventListener('click', e => {
    $modal1.classList.add("show");
});

$modalBtn2.addEventListener('click', e => {
    $modal2.classList.add("show");
});

$modalBtn3.addEventListener('click', e => {
    $modal3.classList.add("show");
});

$modalCloseBtn.forEach(el => {
    el.addEventListener('click', e => {
        $modal1.classList.remove("show");
        $modal2.classList.remove("show");
        $modal3.classList.remove("show");
    });
});