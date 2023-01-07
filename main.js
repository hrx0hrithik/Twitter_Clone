
const arrow1 = document.querySelector('#arr1');
const arrow2 = document.querySelector('#arr2');
const arrow3 = document.querySelector('#arr3');
const creatorBtn = document.querySelector('.creator-btn');
const showCreator = document.querySelector('.creator-menu');
const proBtn = document.querySelector('.pro-btn');
const showPro = document.querySelector('.pro-menu');
const settingBtn = document.querySelector('.setting-btn');
const showSetting = document.querySelector('.setting-menu');

creatorBtn.onclick = function(){
    showCreator.classList.toggle("show"); 
    arrow1.classList.remove("fa-chevron-down");
    arrow1.classList.add("fa-chevron-up");
}
proBtn.onclick = function () {
    showPro.classList.toggle("show");
    arrow2.classList.remove("fa-chevron-down");
    arrow2.classList.add("fa-chevron-up");
}
settingBtn.onclick = function(){
    showSetting.classList.toggle("show");
    arrow3.classList.remove("fa-chevron-down");
    arrow3.classList.add("fa-chevron-up");
}



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