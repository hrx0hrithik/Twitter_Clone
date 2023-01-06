
const profileBtn = document.querySelector('.profile-box');
const moreBtn = document.querySelector('#more-btn');
const profileMenu = document.querySelector('.profile-menu');
const moreMenu = document.querySelector('.more-menu');


const creatorBtn = document.querySelector('.creator-btn');
const showCreator = document.querySelector('.creator-menu');
const proBtn = document.querySelector('.pro-btn');
const showPro = document.querySelector('.pro-menu');
const settingBtn = document.querySelector('.setting-btn');
const showSetting = document.querySelector('.setting-menu');

proBtn.addEventListener("click", function(){
    showPro.classList.toggle("show");
})
settingBtn.addEventListener("click", function(){
    showSetting.classList.toggle("show");
})
creatorBtn.addEventListener("click", function(){
    showCreator.classList.toggle("show"); 
})



profileBtn.addEventListener("click", function() {
    profileMenu.classList.toggle("activated");
});
moreBtn.addEventListener("click", function (){
    moreMenu.classList.toggle("activated");
})


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