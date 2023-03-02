const navT = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const hamburger = document.querySelector(".hamburger");

// console.log(hamburger);


navT.addEventListener('click', () => {
        links.classList.toggle("show_nav");
        hamburger.classList.toggle('menu_open');
       

    })
