document.addEventListener('DOMContentLoaded', () => {
		const narghileaItems = [
			{ nume: "Alien Twist", descriere: "(Limetă înghețată)", pret: "80 RON" },
			{ nume: "Richman", descriere: "(Înghețată de zmeură)", pret: "80 RON" },
			{ nume: "Blue Bay", descriere: "(Afine, mentă)", pret: "80 RON" },
			{ nume: "Waterfall", descriere: "(Pepene roșu)", pret: "80 RON" },
			{ nume: "Sexy Green", descriere: "(Mentă)", pret: "80 RON" },
			{ nume: "Seduction", descriere: "(Pepene galben, piersică)", pret: "80 RON" },
			{ nume: "Red Blast", descriere: "(Mentă, zmeură)", pret: "80 RON" },
			{ nume: "Mambo", descriere: "(Căpșuni, kiwi, cocos, piersică)", pret: "80 RON" },
			{ nume: "French Kiss", descriere: "(Struguri, mentă)", pret: "80 RON" },
			{ nume: "Indian Summer", descriere: "(Mango)", pret: "80 RON" },
			{ nume: "Power of Love", descriere: "(Pepene galben, fructul pasiunii, mentă)", pret: "80 RON" },
			{ nume: "Bahama Mama", descriere: "(Ananas, banane, cocos)", pret: "80 RON" },
			{ nume: "Over the Rainbow", descriere: "(Pere, mentă)", pret: "80 RON" },
			{ nume: "American Pie", descriere: "(Mere)", pret: "80 RON" },
			{ nume: "Bikini Sunset", descriere: "(Pepene galben, bubble gum)", pret: "80 RON" },
			{ nume: "Cool Sunrise", descriere: "(Piersică)", pret: "80 RON" },
			{ nume: "Copa Cabana", descriere: "(Pina Colada)", pret: "80 RON" },
			{ nume: "Love 69", descriere: "(Fructul pasiunii, pepene roșu, piersică)", pret: "80 RON" },
			{ nume: "Miss Mango", descriere: "(Mango, fructul pasiunii, piersică)", pret: "80 RON" },
			{ nume: "Honeymoon", descriere: "(Pepene roșu, pepene galben, mere)", pret: "80 RON" },
			{ nume: "Tutti Frutti", descriere: "(Căpșuni, afine, zmeură)", pret: "80 RON" },
			{ nume: "Mister Grape", descriere: "(Struguri, afine)", pret: "80 RON" },
			{ nume: "Lemon & Mint", descriere: "(Lămâie, mentă)", pret: "80 RON" },
			{ nume: "Watermelon", descriere: "(Pepene roșu)", pret: "80 RON" },
			{ nume: "Mint", descriere: "(Mentă)", pret: "80 RON" },
			{ nume: "Lady Killer", descriere: "(Fructe de pădure, pepene galben, mango, mentă)", pret: "80 RON" },
			{ nume: "Mi Amor", descriere: "(Ananas, banană, mentă)", pret: "80 RON" },
			{ nume: "Love 66", descriere: "(Pepene roșu, pepene galben, fructul pasiunii, mentă)", pret: "80 RON" },
			{ nume: "Milkey Mouse", descriere: "(Lapte condensat)", pret: "80 RON" },
			{ nume: "Belgian Waffles", descriere: "(Vafe)", pret: "80 RON" },
			{ nume: "Lemon Cake", descriere: "(Lămâie, cookies)", pret: "80 RON" },
			{ nume: "Pineapple", descriere: "(Ananas)", pret: "80 RON" },
			{ nume: "Lime Spiced Peach", descriere: "(Lime, piersică)", pret: "80 RON" },
			{ nume: "Moscow Night", descriere: "(Mure, lichior, zmeură, afine)", pret: "80 RON" },
			{ nume: "Jelibon", descriere: "(Marmeladă, fructe de pădure)", pret: "80 RON" }
		];

		const extranItems = [
			{ nume: "Ice Bazooka", descriere: "O șipcă de narghilea înghețat care răcește aerul inhalat, oferind o experiență revigorantă.", pret: "15 RON" },
			{ nume: "Extra Furtun", descriere: "Fiecare narghilea vine cu un singur furtun, dar se pot atașa până la patru furtune pentru o experiență socială.", pret: "5 RON" },
			{ nume: "Schimbare Cap", descriere: "Înlocuirea creuzetului cu tutun proaspăt și cărbuni noi, pentru o sesiune de narghilea impecabilă.", pret: "40 RON" }
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

		renderItems(narghileaItems, 'narghilea-items');
		renderItems(extranItems, 'extran-items');
});
