
// const moreBtn = document.querySelector('#more-btn');
// const moreMenu = document.querySelector('.more-menu');


const creatorBtn = document.querySelector('.creator-btn');
const showCreator = document.querySelector('.creator-menu');
const proBtn = document.querySelector('.pro-btn');
const showPro = document.querySelector('.pro-menu');
const settingBtn = document.querySelector('.setting-btn');
const showSetting = document.querySelector('.setting-menu');

proBtn.onclick = function () {
    showPro.classList.toggle("show");
}
settingBtn.onclick = function(){
    showSetting.classList.toggle("show");
}
creatorBtn.onclick = function(){
    showCreator.classList.toggle("show"); 
}




// moreBtn.onclick =function (){
//     moreMenu.classList.add("active");
// }


// window.addEventListener('mouseup', function(e){
//     // var box = document.getElementById('menu');
//     if(e.target != moreMenu && e.target != profileMenu){
//         // moreMenu.classList.remove("active");
//         console.log("remove");
//     }
// })

document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[data-dropdown-btn]")
    if (!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownBtn) {
        currentDropdown =e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})


document.addEventListener('click', e => {
    const isMoremenuBtn = e.target.matches("[data-moremenu-btn]")
    if (!isMoremenuBtn && e.target.closest('[data-moremenu]') != null) return

    let currentMoremenu
    if(isMoremenuBtn) {
        currentMoremenu =e.target.closest('[data-moremenu]')
        currentMoremenu.classList.toggle('active')
    }
    document.querySelectorAll("[data-moremenu].active").forEach(moremenu => {
        if (moremenu === currentMoremenu) return
        moremenu.classList.remove('active')
    })
})