document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    var logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.addEventListener('click', function () {
            location.reload();
        });
    }

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation();

            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
        });

        document.addEventListener('click', function (event) {
            var isClickInsideMenu = menu.contains(event.target);
            var isClickInsideToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickInsideToggle) {
                menu.style.display = 'none';
            }
        });
    }
});