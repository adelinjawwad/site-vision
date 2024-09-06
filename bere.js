document.addEventListener('DOMContentLoaded', () => {
    const products = {
        bere: [
            { name: "Heineken 250ML", price: "12 RON" },
            { name: "Heineken 450ML", price: "14 RON" },
            { name: "Birra Moretti 400ML", price: "13 RON" },
            { name: "Carlsberg 250ML", price: "11 RON" },
            { name: "Carlsberg 400ML", price: "13 RON" },
            { name: "Kronenbourg Blanc 330ML", price: "20 RON" }
        ],
        sticla: [
            { name: "Heineken 330ML", price: "14 RON" },
            { name: "Ursus Cooler Cireșe", price: "15 RON" },
            { name: "Ursus Cooler Lămâie", price: "15 RON" },
            { name: "Ursus Cooler Ananas și Guava", price: "15 RON" },
            { name: "Ursus Cooler Grepfrut", price: "15 RON" },
            { name: "Dacic Fresh Ciders", price: "13 RON" },
            { name: "Dacic Zmeură", price: "13 RON" },
            { name: "Dacic Afine", price: "13 RON" },
            { name: "Dacic Căpșuni și Frăguțe", price: "13 RON" },
            { name: "Dacic Cherry", price: "13 RON" },
            { name: "Corona", price: "16 RON" }
        ]
    };

    function generateMenuItems(menuItems, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = menuItems.map(item => `
            <div class="menu-item">
                <h4>${item.name}</h4>
                <span>${item.price}</span>
            </div>
        `).join('');
    }

    generateMenuItems(products.bere, "bereMenu");
    generateMenuItems(products.sticla, "sticlaMenu");
});
