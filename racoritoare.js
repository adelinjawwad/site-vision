document.addEventListener('DOMContentLoaded', () => {
    const racoritoareItems = [
        { title: "Apă minerală Dorna", price: "8 RON" },
        { title: "Apă plată Dorna", price: "8 RON" },
        { title: "Cola cola", price: "10 RON" },
        { title: "Cola cola zero", price: "9 RON" },
        { title: "Sprite", price: "10 RON" },
        { title: "Fanta struguri", price: "10 RON" },
        { title: "Fanta portocale", price: "10 RON" },
        { title: "Red bull", price: "15 RON" },
        { title: "Red bull arome", price: "16 RON" },
        { title: "Schweppes tonic", price: "10 RON" },
        { title: "Schweppes pink", price: "10 RON" },
        { title: "Schweppes mandarin", price: "10 RON" },
        { title: "Schweppes bitter lemon", price: "10 RON" },
        { title: "Cappy pere", price: "11 RON" },
        { title: "Cappy piersici", price: "11 RON" },
        { title: "Cappy vişine", price: "11 RON" },
        { title: "Cappy portocale", price: "11 RON" },
        { title: "Cappy portocale roşii", price: "11 RON" },
        { title: "Pepsi", price: "10 RON" },
        { title: "Pepsi twist", price: "10 RON" },
        { title: "Pepsi max", price: "9 RON" },
        { title: "Prigat piersici şi caise", price: "11 RON" },
        { title: "Prigat mere", price: "11 RON" },
        { title: "Prigat kiwi şi pere", price: "11 RON" },
        { title: "Prigat banane, măr şi căpşuni", price: "11 RON" },
        { title: "Mirinda portocale", price: "10 RON" },
        { title: "Aqua Carpatica plată", price: "8 RON" },
        { title: "Aqua Carpatica minerală", price: "8 RON" }
    ];

    function renderRacoritoareMenu() {
        const container = document.querySelector('#racoritoare .menu-grid');
        racoritoareItems.forEach(item => {
            container.innerHTML += `
                <div class="menu-item">
                    <h3>${item.title}</h3>
                    <span>${item.price}</span>
                </div>
            `;
        });
    }

    renderRacoritoareMenu();
});
