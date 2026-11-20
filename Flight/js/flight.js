
const favBtn = document.querySelectorAll('.fav-btn');
favBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    });
});