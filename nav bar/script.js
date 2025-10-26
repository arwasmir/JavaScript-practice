const list = document.querySelector(".list");
const bars = document.querySelector(".fa-bars");
const mark = document.querySelector(".fa-xmark");
const hum = document.querySelector(".humburger");

hum.addEventListener("click", () => {
    bars.classList.toggle("active");
    mark.classList.toggle("active");
    list.classList.toggle("active");
})