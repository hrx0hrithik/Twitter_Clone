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

const profileBtn = document.querySelector('.profile-box');
const moreBtn = document.querySelector('#more-btn');
const profileMenu = document.querySelector('.profile-menu');
const moreMenu = document.querySelector('.more-menu')
profileBtn.addEventListener("click", function() {
    profileMenu.classList.toggle("activated");
    // console.log("clicked");
});
moreBtn.addEventListener("click", function (){
    moreMenu.classList.toggle("activated");
     console.log("clicked");
})