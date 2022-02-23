
const burger = document.querySelector(".burger")
const logo = document.querySelector(".nav")
const nav_links = document.querySelector(".nav")


function toggleMenu() {

    logo.classList.toggle("toggle")

    burger.classList.toggle("toggle")

    


}


burger.addEventListener("click", toggleMenu)