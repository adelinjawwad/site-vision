document.addEventListener('DOMContentLoaded', () => {
    const cafeaItems = [
        { title: "Espresso", price: "8 RON" },
        { title: "Espresso dublu", price: "11 RON" },
        { title: "Americano", price: "9 RON" },
        { title: "Espresso macchiato", price: "9 RON" },
        { title: "Flat white", price: "15 RON" },
        { title: "Cortado", price: "10 RON" },
        { title: "Cafea decofeinizată", price: "11 RON" },
        { title: "Cappuccino", price: "12 RON" },
        { title: "Cappuccino vienez", price: "14 RON" },
        { title: "Caffe latte", price: "12 RON" },
        { title: "Caffe latte XL", price: "14 RON" },
        { title: "Ice coffee", price: "12 RON" },
        { title: "Ice coffee XL", price: "14 RON" },
        { title: "Frappe", price: "18 RON" },
        { title: "Milkshake", price: "20 RON" },
        { title: "Smoothie", price: "20 RON" }
    ];

    const extraItems = [
        { title: "Lapte vegetal", price: "2 RON" },
        { title: "Adaugă aromă", price: "2 RON" },
        { title: "Adaugă piure", price: "2 RON" }
    ];

    const aromeCafea = [
        { title: "Vanilie", price: "2 RON" },
        { title: "Cocos", price: "2 RON" },
        { title: "Ciocolată", price: "2 RON" },
        { title: "Cookies", price: "2 RON" },
        { title: "Tiramisu", price: "2 RON" },
        { title: "Caramel", price: "2 RON" },
        { title: "Caramel Sărat", price: "2 RON" },
        { title: "Alune", price: "2 RON" },
        { title: "Fistic", price: "2 RON" },
        { title: "Nuci de Macadamia", price: "2 RON" },
        { title: "Scorţişoară", price: "2 RON" },
        { title: "Vanilie 0 Zahăr", price: "2 RON" }
    ];

    function renderMenu(containerId, items) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            container.innerHTML += `
                <div class="menu-item">
                    <h4>${item.title}</h4>
                    <span>${item.price}</span>
                </div>
            `;
        });
    }

    renderMenu('cafea-menu', cafeaItems);
    renderMenu('extra-menu', extraItems);
    renderMenu('arome-menu', aromeCafea);
});
