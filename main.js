const moreBtn = document.querySelector('#moreBtn');
    const subItemsBox = document.querySelector('.sub-items-box');
    const overlay = document.querySelector('.overlay')

    moreBtn.addEventListener('click', function () {
      subItemsBox.classList.add('active');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
      subItemsBox.classList.remove('active');
      overlay.classList.remove('active');
    })