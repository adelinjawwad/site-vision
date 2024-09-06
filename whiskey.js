document.addEventListener('DOMContentLoaded', () => {
    const whiskeyItems = [
        {nume: "Gentleman Jack", pret: "18 RON"},
        {nume: "Chivas Regal", pret: "18 RON"},
        {nume: "Bulleit Bourbon", pret: "22 RON"},
        {nume: "Glenlivet 12 YO", pret: "24 RON"},
        {nume: "Berry Bros and Rudd Islay", pret: "30 RON"},
        {nume: "Kurayoshi Pure Malt", pret: "32 RON"},
    ];

    const vodkaItems = [
        {nume: "Ketel One", pret: "15 RON"},
        {nume: "Ostiya", pret: "15 RON"},
        {nume: "Opera", pret: "20 RON"},
        {nume: "Ciroc", pret: "30 RON"},
    ];

    const rumItems = [
        {nume: "Bumbu Original", pret: "25 RON"},
        {nume: "Bumbu Cream", pret: "25 RON"},
        {nume: "Bumbu Black", pret: "25 RON"},
        {nume: "Zacapa", pret: "35 RON"},
    ];

    const ginItems = [
        {nume: "Opera", pret: "18 RON"},
        {nume: "Malfy", pret: "18 RON"},
        {nume: "London", pret: "20 RON"},
        {nume: "Monkey 47", pret: "20 RON"},
        {nume: "Knut Hussen", pret: "28 RON"},
    ];

    const cognacBrandyItems = [
        {nume: "Hennessy VS", pret: "28 RON"},
        {nume: "H by Hine VSOP", pret: "30 RON"},
        {nume: "Hine Rare VSOP", pret: "35 RON"},
        {nume: "Vinars VSOP", pret: "20 RON"},
        {nume: "Martell VS", pret: "18 RON"},
        {nume: "Zarea XO", pret: "22 RON"},
        {nume: "Courvoisier VS", pret: "24 RON"},
    ];

    const shotsItems = [
        {nume: "Jägermeister", pret: "12 RON"},
        {nume: "Kahlua", pret: "13 RON"},
        {nume: "Bumbu Cream", pret: "13 RON"},
        {nume: "Disaronno", pret: "12 RON"},
        {nume: "Disaronno Sour", pret: "14 RON"},
        {nume: "Kamikaze", pret: "12 RON"},
        {nume: "Don Julio Blanco", pret: "15 RON"},
        {nume: "Don Julio Anejo", pret: "17 RON"},
        {nume: "Tequila Premium", pret: "35 RON"},
    ];

    function renderItems(items, containerId) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <h4>${item.nume}</h4>
                <span>${item.pret}</span>
            `;
            container.appendChild(itemElement);
        });
    }

    renderItems(whiskeyItems, 'whiskey-items');
    renderItems(vodkaItems, 'vodka-items');
    renderItems(rumItems, 'rum-items');
    renderItems(ginItems, 'gin-items');
    renderItems(cognacBrandyItems, 'cognac-brandy-items');
    renderItems(shotsItems, 'shots-items');
});
