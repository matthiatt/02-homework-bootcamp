//-------------------------------Resources Used----------------------------
//https://codepen.io/sreisner/pen/yOOOjx
//https://coreui.io/docs/components/bootstrap/navs/
//-------------------------------------------------------------------------
const navBar = () => {
    const menuIcon = document.getElementsByClassName("menuIcon");
    const nav = document.getElementsByName("navLinks");
    const navLinks = document.querySelector(".navLinks li");
//Trying to toggle my NavLinks - but this isn't working right now.
    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-acive");
    });

//Here I am trying to Make animated links for the "hamburger" AKA my navLinks menu to work. Obviously I can't test it since the link above does not work the right away. I am trying my logic out anyway.
navLinks.forEach(link, index) => {
    link.style.animation = `navLinkFade 0.4s ease in ${index / 7}s`;
    console.log(index / 7);
    });
}
navBar();