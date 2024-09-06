document.addEventListener('DOMContentLoaded', () => {
    const cocktailsVision = [
        {nume: "Negroni Sour 350ML", descriere: "45ML GIN, 25ML CAMPARI, 30ML AMARETTO, 10ML SUC PORTOCALE, 10ML SIROP ZAHĂR, 25ML FRESH LĂMÂIE, GHEAȚĂ", pret: "26 RON"},
        {nume: "Tiramisu Cocktail 350ML", descriere: "25ML DISARONNO, 25ML BAILEYS, 1 SHOT ESPRESSO, 10ML SIROP ZAHĂR, GHEAȚĂ", pret: "27 RON"},
        {nume: "Strawberry Daiquiri 350ML", descriere: "45ML ROM, 30ML PIURE CĂPȘUNI, 35ML FRESH DE LĂMÂIE, 20ML SIROP ZAHĂR, GHEAȚĂ", pret: "26 RON"},
        {nume: "East 8 350ML", descriere: "45ML VODKA, 15ML APEROL, 10ML SIROP PASSION FRUIT, 20ML SUC ANANAS, 10ML SIROP ZAHĂR, 15ML FRESH LĂMÂIE, GHEAȚĂ", pret: "28 RON"},
        {nume: "Pornstar Martini 350ML", descriere: "40ML VODKA, 10ML SIROP VANILIE, 50ML PIURE PASSION FRUIT, 50ML SUC PORTOCALE, 10ML SIROP ZAHĂR, GHEAȚĂ", pret: "28 RON"},
        {nume: "Bourbon Stone Sour 350ML", descriere: "50ML WHISKY, 30ML SUC PORTOCALE, 30ML SIROP ZAHĂR, 25ML FRESH LĂMÂIE, GHEAȚĂ", pret: "28 RON"},
        {nume: "Cosmopolitan 350ML", descriere: "60ML VODKA, 20ML TRIPLE SEC, 50ML SUC MERIȘOARE, 20ML FRESH LĂMÂIE, GHEAȚĂ", pret: "26 RON"},
        {nume: "Pineapple Aperol Daiquiri 350ML", descriere: "45ML ROM, 15ML APEROL, 30ML SUC ANANAS, 15ML FRESH DE LĂMÂIE, 15ML SIROP ZAHĂR, GHEAȚĂ", pret: "28 RON"},
        {nume: "Milanese G&T 350ML", descriere: "30ML GIN, 30ML CAMPARI, APĂ TONICĂ, GHEAȚĂ", pret: "26 RON"},
        {nume: "Passion Fruit & Vanilla Daiquiri 350ML", descriere: "60ML ROM, 20ML PIURE PASSION FRUIT, 10ML SIROP VANILIE, 25ML FRESH DE LĂMÂIE, GHEAȚĂ", pret: "28 RON"},
        {nume: "Piña Colada 350ML", descriere: "60ML ROM, 45ML SUC ANANAS, 30ML PIURE COCOS, 15ML FRESH DE LĂMÂIE, GHEAȚĂ", pret: "26 RON"},
        {nume: "Gin Blackberry 350ML", descriere: "40ML GIN, 10ML SIROP AFINE, 20ML FRESH LĂMÂIE, TONIC, GHEAȚĂ", pret: "28 RON"},
        {nume: "Gin Orange 350ML", descriere: "40ML GIN, 20ML FRESH LĂMÂIE, TONIC, GHEAȚĂ", pret: "28 RON"},
        {nume: "Gin Rhubarb & Ginger 350ML", descriere: "40ML GIN, 10ML SIROP AFINE, 5ML GINGER, 20ML FRESH LĂMÂIE, TONIC, GHEAȚĂ", pret: "28 RON"},
        {nume: "Gin Raspberry 350ML", descriere: "40ML GIN, 10ML PIURE ZMEURĂ, 20ML FRESH LĂMÂIE, TONIC, GHEAȚĂ", pret: "28 RON"},
        {nume: "Passion Mojito 350ML", descriere: "40ML ROM, 15ML PIURE PASSION FRUIT, 20ML FRESH LĂMÂIE, APĂ MINERALĂ, MENTĂ, GHEAȚĂ", pret: "28 RON"},
        {nume: "Raspberry Mojito 350ML", descriere: "40ML ROM, 15ML PIURE ZMEURĂ, 20ML FRESH LĂMÂIE, APĂ MINERALĂ, MENTĂ, GHEAȚĂ", pret: "28 RON"},
        {nume: "Kiwi Mojito 350ML", descriere: "40ML ROM, 15ML PIURE KIWI, 20ML FRESH LĂMÂIE, APĂ MINERALĂ, MENTĂ, GHEAȚĂ", pret: "28 RON"},
        {nume: "Watermelon Mojito 350ML", descriere: "40ML ROM, 25ML SIROP WATERMELON, 20ML FRESH LĂMÂIE, APĂ MINERALĂ, MENTĂ, GHEAȚĂ", pret: "28 RON"}
    ];

    const cocktails = [
        {nume: "Mojito 300ML", descriere: "40ML ROM, 20ML SIROP ZAHĂR, 30ML FRESH DE LĂMÂIE, MENTĂ, GHEAȚĂ", pret: "25 RON"},
        {nume: "Disaronno Sour 24 300ML", descriere: "50ML DISARONNO AMARETTO, 20ML FRESH DE LĂMÂIE, 10ML SIROP DE ZAHĂR, GHEAȚĂ", pret: "25 RON"},
        {nume: "Disaronno Tonic 300ML", descriere: "40ML DISARONNO AMARETTO, 120ML TONIC, GHEAȚĂ", pret: "25 RON"},
        {nume: "Cuba Libre 300ML", descriere: "50ML ROM SPICE, LIME, COCA COLA, GHEAȚĂ", pret: "25 RON"},
        {nume: "Sex on the Beach 300ML", descriere: "50ML VODKA, 30ML SUC DE PIERSICI, 60ML SUC DE PORTOCALE, 60ML SUC DE MERIȘOARE, 1 FELIE DE PORTOCALĂ, GHEAȚĂ", pret: "25 RON"},
        {nume: "Negroni 300ML", descriere: "30ML GIN, 30ML CAMPARI, GHEAȚĂ", pret: "25 RON"},
        {nume: "Gin Tonic 300ML", descriere: "50ML GIN, 100ML TONIC, LIME, GHEAȚĂ", pret: "25 RON"},
        {nume: "Gordon's Pink & Tonic 300ML", descriere: "50ML GIN, 100ML TONIC, LIME, ZMEURĂ, GHEAȚĂ", pret: "25 RON"},
        {nume: "White Penja Negroni 300ML", descriere: "25ML CAMPARI, 25ML GIN, 10ML PARAGON WHITE PENJA, GHEAȚĂ", pret: "28 RON"},
        {nume: "Long Island Iced Tea 300ML", descriere: "20ML VODKA, 20ML ROM SPICE, 20ML GIN, 20ML TRIPLESEC, 10ML FRESH DE LĂMÂIE, COCA COLA, GHEAȚĂ", pret: "29 RON"},
        {nume: "Ginger Americano 300ML", descriere: "30ML CAMPARI, 20ML FRESH DE LĂMÂIE, GHEAȚĂ", pret: "28 RON"},
        {nume: "Margarita 300ML", descriere: "50ML TEQUILA, 30ML FRESH DE LĂMÂIE, 15ML TRIPLESEC, 5ML SIROP DE ZAHĂR, GHEAȚĂ", pret: "24 RON"},
        {nume: "Aperol Spritz 300ML", descriere: "90ML PROSECCO, 60ML APEROL, APĂ MINERALĂ, GHEAȚĂ", pret: "22 RON"},
        {nume: "Hugo 300ML", descriere: "120ML PROSECCO, 30ML SIROP DE SOC, LIME, APĂ MINERALĂ, GHEAȚĂ", pret: "22 RON"}
    ];

    function renderItems(items, containerId) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <h4>${item.nume}</h4>
                <p>${item.descriere}</p>
                <span>${item.pret}</span>
            `;
            container.appendChild(itemElement);
        });
    }

    renderItems(cocktailsVision, 'cocktails-vision-items');
    renderItems(cocktails, 'cocktails-items');
});
