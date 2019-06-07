var prevScrollpos = window.pageYOffset;
let nav = document.querySelector(".navbar");
let navContainer = document.querySelector("#nav-container");
let flag = true;

function toggleNav() {
    if (pageYOffset > 0 && flag === true) {
        nav.classList.toggle("hidden");
        navContainer.classList.toggle("nav-container");
        flag = false;
    }
    else if (pageYOffset === 0) {
        nav.classList.toggle("hidden");
        navContainer.classList.toggle("nav-container");
        flag = true;
    }
}

window.addEventListener("scroll", toggleNav);

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     nav.style.top = "0";
//   } else {
//     nav.style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// }