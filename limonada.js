document.addEventListener('DOMContentLoaded', () => {
    const limonada = [
        {nume: "Limonadă Clasică 450ML", descriere: "30ML FRESH LĂMÂIE, 20ML SIROP ZAHĂR, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "18 RON"},
        {nume: "Mango și Jasmine 450ML", descriere: "30ML PIURE MANGO, 20ML SIROP JASMINE, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Mango și Pepene Galben 450ML", descriere: "30ML PIURE MANGO, 20ML SIROP PEPMENE GALBEN, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Fructul Pasiunii și Pepene Galben 450ML", descriere: "30ML PIURE FRUCTUL PASIUNII, 20ML SIROP PEPMENE GALBEN, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Kiwi și Pepene Galben 450ML", descriere: "30ML PIURE KIWI, 20ML SIROP PEPMENE GALBEN, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Zmeură și Hibiscus 450ML", descriere: "30ML PIURE ZMEURĂ, 20ML SIROP HIBISCUS, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Yuzu și Zmeură 450ML", descriere: "30ML PIURE YUZU, 30ML PIURE ZMEURĂ, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Yuzu și Watermelon 450ML", descriere: "30ML PIURE YUZU, 30ML PIURE WATERMELON, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Johnny Peach 450ML", descriere: "30ML PIURE PIERSICĂ, 20ML SIROP WATERMELON, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Ananas și Piersică 450ML", descriere: "30ML PIURE ANANAS, 30ML PIURE PIERSICĂ, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Jabuticaba și Spice Redberries 450ML", descriere: "30ML PIURE JABUTICABA, 20ML SIROP SPICE REDBERRIES, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Pere și Ghimbir 450ML", descriere: "30ML PIURE PERE, 20ML SIROP GHIMBIR, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Piersică și Hibiscus 450ML", descriere: "30ML PIURE PIERSICĂ, 20ML SIROP HIBISCUS, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Arată-ne Gustul Tău 450ML", descriere: "30ML PIURE LA ALEGER, 20ML SIROP LA ALEGER, 30ML FRESH LĂMÂIE, MENTĂ, GHEAȚĂ, APĂ MINERALĂ", pret: "20 RON"},
        {nume: "Fresh Portocale 250ML", descriere: "3 PORTOCALE, GHEAȚĂ", pret: "14 RON"},
        {nume: "Fresh Măr și Morcov 250ML", descriere: "2 MERE, 1 MORCOV, GHEAȚĂ", pret: "15 RON"},
        {nume: "Fresh Portocale și Ghimbir 250ML", descriere: "3 PORTOCALE, GHIMBIR, GHEAȚĂ", pret: "15 RON"}
    ];

    const milkshakeSmoothie = [
        {nume: "Ananas", pret: "2 RON"},
        {nume: "Mere Verzi", pret: "2 RON"},
        {nume: "Grapefrut", pret: "2 RON"},
        {nume: "Piersică", pret: "2 RON"},
        {nume: "Kiwi", pret: "2 RON"},
        {nume: "Banane", pret: "2 RON"},
        {nume: "Mango", pret: "2 RON"},
        {nume: "Zmeură", pret: "2 RON"},
        {nume: "Căpșuni", pret: "2 RON"},
        {nume: "Fructul Pasiunii", pret: "2 RON"},
        {nume: "Afine", pret: "2 RON"},
        {nume: "Jabuticaba", pret: "2 RON"},
        {nume: "Fructe de Pădure", pret: "2 RON"},
        {nume: "Yuzu", pret: "2 RON"},
        {nume: "Pere", pret: "2 RON"}
    ];

    const siropLimonada = [
        {nume: "Pepene Galben", pret: "2 RON"},
        {nume: "Pepene Roșu", pret: "2 RON"},
        {nume: "Ginger", pret: "2 RON"},
        {nume: "Lavandă", pret: "2 RON"},
        {nume: "Jasmine", pret: "2 RON"},
        {nume: "Hibiscus", pret: "2 RON"},
        {nume: "Tamarind", pret: "2 RON"},
        {nume: "Spice Redberries", pret: "2 RON"},
        {nume: "Scorțișoară", pret: "2 RON"},
        {nume: "Yuzu", pret: "2 RON"}
    ];

    const extraShot = [
        {nume: "Extra Shot Gin", pret: "7 RON"},
        {nume: "Extra Shot Vodka", pret: "7 RON"},
        {nume: "Extra Shot Aperol", pret: "7 RON"},
        {nume: "Extra Shot Tequila", pret: "7 RON"},
        {nume: "Extra Shot Rom", pret: "7 RON"}
    ];

    function renderItems(items, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = items.map(item => `
            <div class="menu-item">
                <h4>${item.nume}</h4>
                ${item.descriere ? `<p>${item.descriere}</p>` : ''}
                <span>${item.pret}</span>
            </div>
        `).join('');
    }

    renderItems(limonada, 'limonada-items');
    renderItems(milkshakeSmoothie, 'milkshake-smoothie-items');
    renderItems(siropLimonada, 'sirop-limonada-items');
    renderItems(extraShot, 'extra-shot-items');
});
