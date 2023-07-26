const nav_sm = document.querySelector("#nav_sm")
const nav_sm_menu = document.querySelector("#nav_sm div")


function controlNavSm() {
    nav_sm_menu.classList.toggle("-translate-x-[300px]")
    nav_sm.classList.toggle("invisible")
}