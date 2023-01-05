// document.addEventListener('click', e => {
//     const isSubmenuButton = e.target.matches("[data-submenu-button]")
//     if (!isSubmenuButton && e.target.closest('[data-submenu]') != null) return

//     let currentSubmenu
//     if(isSubmenuButton) {
//         currentSubmenu =e.target.closest('[data-submenu]')
//         currentSubmenu.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-submenu].active").forEach(submenu => {
//         if (submenu === currentSubmenu) return
//         submenu.classList.remove('active')
//     })
// })

const click = document.querySelector('.profile-box');
const menu = document.querySelector('.profile-menu');
click.addEventListener("click", function() {
    menu.classList.toggle('activate');
    console.log("clicked");
})