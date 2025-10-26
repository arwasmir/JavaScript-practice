// let navbar = document.querySelector("nav")

// let lastScrollTop = 0;

// window.addEventListener("scroll", () => {
//     let scrollTop = window.scrollY;
//     if (scrollTop > lastScrollTop) {
//         navbar.style.top = "-100px";
//     }else {
//         navbar.style.top = "0px"
//     }
//     lastScrollTop = scrollTop;

// })

/*
    when click to humburger menu show / hide navbar also toggle between bars/X-mark
*/

const list = document.querySelector(".list");
const bars = document.querySelector(".fa-bars");
const mark = document.querySelector(".fa-xmark");
const hum = document.querySelector(".humburger");

hum.addEventListener("click", ()=> {
    bars.classList.toggle("active");
    mark.classList.toggle("active");
    list.classList.toggle("active");
})