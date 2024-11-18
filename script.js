let currentPage = 1;

document.body.addEventListener('click', () => {
    const pages = document.querySelectorAll('.page');
    if (currentPage < pages.length) {
        pages[currentPage - 1].classList.add('open');
        currentPage++;
    }
});
