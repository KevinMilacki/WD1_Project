const navT = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const hamburger = document.querySelector(".hamburger");
const headContainer = document.querySelector(".head_container");
const accord = document.querySelectorAll(".accord_head");
const roomType = document.getElementById("room_type");
const bgImg = document.querySelector(".pr_container");
const medQ = window.matchMedia("(max-width: 932px)");

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
            accordBody.style.maxHeight = (accordBody.scrollHeight + 15) + "px";
        }
        else {
            accordBody.style.maxHeight = 0;
        }
    })
})

roomType.addEventListener("change", () => {
    
    if (roomType.value === "birthday") {
        if (medQ.matches){
            bgImg.style.backgroundImage = "linear-gradient(to bottom, transparent 50%,rgb(16, 4, 76)) , url(images/party_room.jpg)";
        } else {
            bgImg.style.backgroundImage = "linear-gradient(to right, transparent 50%,rgb(16, 4, 76)) , url(images/party_room.jpg)";
        }
          
    } else if (roomType.value === "pr_arcade")  {
        if (medQ.matches){    
            bgImg.style.backgroundImage = "linear-gradient(to bottom, transparent 50%,rgb(16, 4, 76)) , url(images/party_room_6.png)";
        } else {
            bgImg.style.backgroundImage = "linear-gradient(to right, transparent 50%,rgb(16, 4, 76)) , url(images/party_room_6.png)";
        }
    
    } else {
        if (medQ.matches){
            bgImg.style.backgroundImage = "linear-gradient(to bottom, transparent 50%,rgb(16, 4, 76)) , url(images/party_room_3.jpg)";
        } else {
            bgImg.style.backgroundImage = "linear-gradient(to right, transparent 50%,rgb(16, 4, 76)) , url(images/party_room_3.jpg)";
        }
    }    
    
})