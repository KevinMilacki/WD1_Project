const navT = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const hamburger = document.querySelector(".hamburger");
const headContainer = document.querySelector(".head_container");
const accord = document.querySelectorAll(".accord_head");


// console.log(hamburger);


navT.addEventListener('click', () => {
        links.classList.toggle("show_nav");
        hamburger.classList.toggle('menu_open');
        headContainer.classList.toggle('navAct');
    })


accord.forEach(accord => {
    accord.addEventListener("click", event => {
        accord.classList.toggle("active");
        const accordBody = accord.nextElementSibling;
        if (accord.classList.contains("active")) {
            accordBody.style.maxHeight = accordBody.scrollHeight + "px";
        }
        else {
            accordBody.style.maxHeight = 0;
        }
    })
})