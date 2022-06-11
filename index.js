const hamburger = document.querySelector('.menu-toggler')
const dropDown = document.querySelector('.top-nav')

const openMenu = () => {
    hamburger.classList.toggle("open")
    dropDown.classList.toggle("open")
}

const closeMenu = () => {
    hamburger.classList.remove("open")
    dropDown.classList.remove("open")
}
