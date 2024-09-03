

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');
    const categories = document.querySelectorAll('.category');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCategory = this.getAttribute('data-category');
            const categoryToShow = document.getElementById(targetCategory);

            if (categoryToShow) {
                // Ascunde toate categoriile
                categories.forEach(category => {
                    category.classList.remove('active');
                });

                // Afișează categoria selectată
                categoryToShow.classList.add('active');
            } else {
                console.error(`Category with id "${targetCategory}" not found.`);
            }
        });
    });

    document.getElementById('logo').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
