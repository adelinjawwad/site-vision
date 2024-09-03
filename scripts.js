document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.menu.mobile-menu');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    });

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
