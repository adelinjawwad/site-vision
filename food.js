document.addEventListener('DOMContentLoaded', () => {
	// Datele pentru burgeri
	const burgerItems = [
		{ nume: "Black Angus Supreme Burger 500-550 GR", descriere: "Chiflă albă, sos burger, sos alb, carne de burger Black Angus, o felie de cheddar, maioneză, ceapă caramelizată, roșie, bacon, trei inele de ceapă, cartofi prăjiți.", pret: "55 RON" },
		{ nume: "Ultimate Prime Burger 450-500 GR", descriere: "Chiflă albă, sos burger, sos alb, salată, carne de burger Black Angus, o felie de cheddar, sos sweet chili, ardei gras roșu, ceapă, roșie, bacon, trei inele de ceapă, cartofi prăjiți.", pret: "55 RON" },
		{ nume: "Burger Vision Deluxe 550-600 GR", descriere: "Chiflă neagră, sos burger, sos alb, salată, carne de burger Kettle, o felie de cheddar, ardei gras la grătar, ceapă caramelizată, bacon, trei inele de ceapă, cartofi prăjiți.", pret: "58 RON" },
		{ nume: "Burger Vision Deluxe v2.0 550-600 GR", descriere: "Chiflă neagră, sos burger, sos alb, sos de ceapă, salată, carne de burger Kettle, o felie de cheddar, ardei gras roșu, ceapă, bacon, trei inele de ceapă, cartofi prăjiți.", pret: "58 RON" },
		{ nume: "Chicken Royal Burger 350-400 GR", descriere: "Chiflă albă, sos burger, sos alb, pui la grătar, sos sweet chili, ardei gras roșu, sos miere și muștar, roșie, trei inele de ceapă, cartofi prăjiți.", pret: "50 RON" },
		{ nume: "Crispy Chicken Bliss 350-400 GR", descriere: "Chiflă albă, sos burger, sos alb, șnițel de pui, sos sweet chili, ardei gras roșu, sos miere și muștar, roșie, trei inele de ceapă, cartofi prăjiți.", pret: "55 RON" },
		{ nume: "BBQ Pulled Pork Burger 500-550 GR", descriere: "Chiflă neagră, sos burger, maioneză, carne pulled pork (fâșii gătite lent de porc), sos BBQ, sos de usturoi, castraveți murați, brânză cheddar, bacon prăjit, jalapeño, trei inele de ceapă, cartofi prăjiți.", pret: "60 RON" },
		{ nume: "Smash Burger 500-550 GR", descriere: "Chiflă albă (glazurată cu ou), două bucăți de carne smash, două felii de cheddar, salată verde, sos de usturoi, castraveți murați, maioneză, trei inele de ceapă, cartofi prăjiți.", pret: "55 RON" }
	];

	// Datele pentru goodies
	const goodiesItems = [
		{ nume: "Chicken Prestige 450-500 GR", descriere: "Șnițel Palermo, cremă de brânză, sos guacamole, chipsuri tortilla, cartofi prăjiți, sos la alegere.", pret: "57 RON" },
		{ nume: "Royal Chicken Șnițel 450-500 GR", descriere: "Șnițel Palermo, cașcaval, salată de roșii, cartofi prăjiți, sos la alegere.", pret: "52 RON" },
		{ nume: "Crispy Deluxe 350-400 GR", descriere: "4 crispy, cartofi prăjiți, salată de roșii, sos la alegere.", pret: "42 RON" },
		{ nume: "Cartofi Pulled Pork 400 GR", descriere: "Cartofi prăjiți, fâșii de carne de porc, sos de usturoi.", pret: "40 RON" },
		{ nume: "Magic Mici 250-300 GR", descriere: "4 mici (mari), cartofi prăjiți, muștar / ketchup, 2 felii de pâine.", pret: "40 RON" },
		{ nume: "Cartofi cu Cheddar, Bacon & Jalapeño 300-350 GR", descriere: "Cartofi prăjiți zig-zag, bacon prăjit, jalapeño, sos cheddar.", pret: "32 RON" },
		{ nume: "Cartofi cu Cheddar & Bacon 250-300 GR", descriere: "Cartofi prăjiți zig-zag, bacon prăjit, sos cheddar.", pret: "30 RON" },
		{ nume: "Cartofi Feta 250-300 GR", descriere: "Cartofi prăjiți zig-zag, brânză feta.", pret: "27 RON" },
		{ nume: "Cartofi Feta & Bacon 300-350 GR", descriere: "Cartofi prăjiți zig-zag, brânză feta, bacon prăjit.", pret: "32 RON" },
		{ nume: "Cartofi Prăjiți Zig-Zag 250-300 GR", descriere: "Ketchup, usturoi, sos de ceapă.", pret: "27 RON" },
		{ nume: "Nachos 250-300 GR", descriere: "Picant / Nepicant, cheese dip, dip guacamole, salsa dip (1 sos la alegere).", pret: "27 RON" }
	];

	// Funcție generală pentru a genera elemente
	function renderItems(items, containerId) {
		const container = document.getElementById(containerId);
		items.forEach(item => {
			const itemElement = document.createElement('div');
			itemElement.className = 'menu-item';
			itemElement.innerHTML = `
				<h3>${item.nume}</h3>
				<p>${item.descriere}</p>
				<span>${item.pret}</span>
			`;
			container.appendChild(itemElement);
		});
	}

	// Generăm itemele pentru burgeri și goodies
	renderItems(burgerItems, 'burger-items');
	renderItems(goodiesItems, 'goodies-items');
});
