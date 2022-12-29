const moreBtn = document.querySelector('#moreBtn');
    const subItemsBox = document.querySelector('.sub-items-box');
    const subMenuBox = document.querySelector('.sub-menu');
    const overlay = document.querySelector('.overlay')
    const profile_menu = document.querySelector('#profile_info')

    moreBtn.addEventListener('click', function () {
      subItemsBox.classList.add('active');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
      subItemsBox.classList.remove('active');
      subMenuBox.classList.remove('active');
      overlay.classList.remove('active');
    })

    profile_menu.addEventListener('click', function () {
      subMenuBox.classList.add('active');
      overlay.classList.add('active');
    })
