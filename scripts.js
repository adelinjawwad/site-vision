document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    // Scroll în partea de sus când se face clic pe logo
    logo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll smooth pentru link-uri
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });

            // Închide meniul mobil după click
            if (mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
            }
        });
    });

    // Adaugă clasa 'scrolled' la navbar când se face scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
