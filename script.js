document.addEventListener("DOMContentLoaded", function () {
    var logoElement = document.querySelector('.logo');

    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    var banner = document.querySelector('.banner');
    var img1 = document.querySelector('.banner img:nth-child(1)');
    var img2 = document.querySelector('.banner img:nth-child(2)');
    var prevBtn = document.querySelector('.banner span:nth-child(4)');
    var nextBtn = document.querySelector('.banner span:last-child');

    //* Reload when clicked the logo
    if (logoElement) {
        logoElement.addEventListener('click', function () {
            location.reload();
        });
    }

    //* Responsive Design Nav
    function toggleMenu() {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }

    if (window.innerWidth < 600 && menuToggle && menu) {
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function (event) {
            var isClickInsideMenu = menu.contains(event.target);
            var isClickInsideToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickInsideToggle) {
                menu.style.display = 'none';
            }
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth < 600) {
            menuToggle.addEventListener('click', toggleMenu);
            document.addEventListener('click', function (event) {
                var isClickInsideMenu = menu.contains(event.target);
                var isClickInsideToggle = menuToggle.contains(event.target);

                if (!isClickInsideMenu && !isClickInsideToggle) {
                    menu.style.display = 'none';
                }
            });
        } else {
            menuToggle.removeEventListener('click', toggleMenu);
            document.removeEventListener('click', function (event) {
                var isClickInsideMenu = menu.contains(event.target);
                var isClickInsideToggle = menuToggle.contains(event.target);

                if (!isClickInsideMenu && !isClickInsideToggle) {
                    menu.style.display = 'none';
                }
            });
        }
    });

    //* Change image on click
    if (banner && img1 && img2 && prevBtn && nextBtn) {
        var images = [
            { img1: './assets/burger1.png', img2: './assets/burger2.png' },
            { img1: './assets/chicken1.png', img2: './assets/chicken2.png' },
            { img1: './assets/drink1.png', img2: './assets/drink2.png' },
        ];
        var currentImageIndex = 0;

        function updateImage() {
            img1.src = images[currentImageIndex].img1;
            img2.src = images[currentImageIndex].img2;
        }

        prevBtn.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        });

        nextBtn.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        });
    }
});