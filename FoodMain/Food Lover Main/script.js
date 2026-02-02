
const hum = document.querySelector(".humMenu");
const mark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const list = document.querySelector(".list");
const btn = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".menu-item");

hum.addEventListener("click", ()=> {
    mark.classList.toggle("active");
    list.classList.toggle("active");
    bars.classList.toggle("active");
})

btn.forEach((b) => {
    b.addEventListener("click", ()=> {
        const category = b.getAttribute("data-category")
        items.forEach(item => {
            if( category === "all" || category === item.getAttribute("data-category")) {
                item.style.display ="flex"
            }
            else {
                item.style.display = "none"
            }
            console.log(category)
        })
    })
})