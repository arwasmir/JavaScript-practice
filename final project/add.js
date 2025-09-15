let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if(scrollTop > lastScrollTop){
        navbar.style.top = "100%" ;

    }else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
})
