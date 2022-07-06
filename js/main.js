const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
const MAX_MOBILE_WIDTH = 800

/* Event Listeners */
menuButton.addEventListener('click', openMenu)
window.addEventListener('resize', () => {
  if (window.innerWidth >= MAX_MOBILE_WIDTH) {
    closeMenu()
  }
})

/* Functions */
function openMenu() {
  menu.classList.toggle('active')
}

function closeMenu() {
  if (!menu.classList.contains('active')) return
  menu.classList.remove('active')
}
