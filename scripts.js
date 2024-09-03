document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const logo = document.getElementById('logo');

    // Toggle pentru meniul mobil
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

    // Scroll către secțiuni
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });

            // Închide meniul mobil după clic
            if (mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
            }
        });
    });

    // Schimbă stilul meniului când derulezi
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
