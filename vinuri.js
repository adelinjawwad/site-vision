document.addEventListener('DOMContentLoaded', () => {
	const cramaServe = [
		{ nume: "Terra Romana (Rosé Sec)", pret: "135 RON" },
		{ nume: "Terra Romana Chardonnay (Alb Sec)", pret: "135 RON" },
		{ nume: "Terra Romana Milenium (Roșu Sec)", pret: "180 RON" },
		{ nume: "Cuvée Sissi (Rosé Sec)", pret: "165 RON" },
		{ nume: "Cuvée Pacs (Alb Sec)", pret: "165 RON" },
		{ nume: "Cuvée Charlotte (Roșu Sec)", pret: "230 RON" }
	];

	const vinariaPurcari = [
		{ nume: "Rosé de Purcari (Rosé Sec)", pret: "140 RON" },
		{ nume: "Sauvignon Blanc de Purcari (Alb Sec)", pret: "140 RON" },
		{ nume: "Chardonnay de Purcari (Alb Sec)", pret: "140 RON" }
	];

	const vieVinVinjuMare = [
		{ nume: "Prince Vlad Fetească Neagră (Roșu Sec)", pret: "110 RON" },
		{ nume: "Mirage (Rosé Sec)", pret: "105 RON" },
		{ nume: "Prince Vlad Cabernet Sauvignon (Roșu Sec)", pret: "110 RON" },
		{ nume: "Prince Vlad Chardonnay (Alb Sec)", pret: "110 RON" },
		{ nume: "Mirage Fetească Neagră & Syrah (Roșu Sec)", pret: "110 RON" }
	];

	const ballaGeza = [
		{ nume: "Mustoasă de Măderat (Alb Sec)", pret: "125 RON" },
		{ nume: "Roze Cuvée (Rosé Sec)", pret: "125 RON" },
		{ nume: "Cadarca (Roșu Sec)", pret: "135 RON" }
	];

	const crameleRecas = [
		{ nume: "Muse White (Alb Demisec)", pret: "175 RON" },
		{ nume: "Muse Night (Rosé Demisec)", pret: "175 RON" },
		{ nume: "Selene Syrah (Roșu Sec)", pret: "200 RON" },
		{ nume: "R.R Tămâioasă Românească (Alb Demidulce)", pret: "120 RON" },
		{ nume: "Regno Recaș (Rosé Demisec)", pret: "120 RON" },
		{ nume: "Regno Recaș (Roșu Sec)", pret: "120 RON" }
	];

	const domeniileUrlati = [
		{ nume: "SAAC Cuvee (Alb Sec)", pret: "130 RON" },
		{ nume: "SAAC Cuvee (Rosé Sec)", pret: "130 RON" },
		{ nume: "Fetească Neagră (Roşu Sec)", pret: "95 RON" },
		{ nume: "Fetească Albă (Alb Sec)", pret: "95 RON" },
		{ nume: "Fetească Neagră (Rosé Sec)", pret: "95 RON" },
		{ nume: "INCANTATION Cabernet Sauvignon & Fetească Neagră (Roşu Sec)", pret: "150 RON" }
	];

	const cramaLaSalina = [
		{ nume: "Issa Sauvignon Blanc (Alb Sec)", pret: "135 RON" },
		{ nume: "Issa Pinot Noir (Rosé Sec)", pret: "135 RON" }
	];

	const cramaJidvei = [
		{ nume: "Mysterium (Rhein Riesling & Sauvignon Blanc) (Alb Sec)", pret: "110 RON" },
		{ nume: "Mysterium (Cabernet Sauvignon & Pinot Noir & Syrah) (Rosé Sec)", pret: "110 RON" },
		{ nume: "Doc Castel Muscat Ottonel (Alb Demidulce)", pret: "125 RON" },
		{ nume: "Iluziv Roze (Rosé Sec)", pret: "90 RON" },
		{ nume: "Iluziv (Sauvignon Blanc & Riesling Italian & Muscat Ottonel) (Alb Sec)", pret: "90 RON" },
		{ nume: "Iluziv (Traminer Roz & Pinot Gris & Chardonnay) (Alb Sec)", pret: "90 RON" },
		{ nume: "Navigo SIAJ Chardonnay (Alb Sec)", pret: "95 RON" },
		{ nume: "Navigo SIAJ Merlot (Roșu Sec)", pret: "100 RON" },
		{ nume: "Navigo SIAJ Rosé (Rosé Sec)", pret: "95 RON" },
	];

	const prosecco = [
		{ nume: "Prosecco DOC (Alb Spumant)", pret: "140 RON" },
		{ nume: "Terre Di Marca Prosecco Bio (Alb)", pret: "135 RON" },
		{ nume: "Terre Di Marca Prosecco Bio (Rosé)", pret: "135 RON" },
		{ nume: "Petro Vaselo Bendis Nadir (Alb)", pret: "140 RON" },
		{ nume: "Petro Vaselo Bendis Nadir (Rosé)", pret: "140 RON" },
		{ nume: "Rotari Cuvée 28 (Alb)", pret: "160 RON" },
		{ nume: "Spumante Maeli (Alb)", pret: "160 RON" },
		{ nume: "Zeppelin Pelin Frizzante (Alb)", pret: "90 RON" },
		{ nume: "Zeppelin Pelin Frizzante (Rosé)", pret: "90 RON" },
		{ nume: "Mysterium Alb (Alb)", pret: "335 RON" },
		{ nume: "Mysterium Roze (Rosé)", pret: "335 RON" },
		{ nume: "Scintti FR (Alb)", pret: "80 RON" },
		{ nume: "Scintti Roze Syrah (Rosé)", pret: "80 RON" },
		{ nume: "Scintti Extra Dry Muscat Ottonel (Alb)", pret: "80 RON" }
	];

	const vinLaPahar = [
		{ nume: "Vin la pahar (Roșu/Alb/Rosé)", pret: "18 RON" },
		{ nume: "Spritz (Vin alb cu apă minerală)", pret: "20 RON" },
		{ nume: "Prosecco", pret: "21 RON" }
	];

	function renderItems(items, containerId) {
		const container = document.getElementById(containerId);
		container.innerHTML = ''; // Clear previous content
		items.forEach(item => {
			const itemDiv = document.createElement('div');
			itemDiv.className = 'menu-item';
			itemDiv.innerHTML = `
				<h4>${item.nume}</h4>
				<p class="price">${item.pret}</p>
			`;
			container.appendChild(itemDiv);
		});
	}

		renderItems(cramaServe, 'crama-serve');
		renderItems(vinariaPurcari, 'vinaria-purcari');
		renderItems(vieVinVinjuMare, 'vie-vin-vinju-mare');
		renderItems(ballaGeza, 'balla-geza');
		renderItems(crameleRecas, 'cramele-recas');
		renderItems(domeniileUrlati, 'domeniile-urlati');
		renderItems(cramaLaSalina, 'crama-la-salina');
		renderItems(cramaJidvei, 'crama-jidvei');
		renderItems(prosecco, 'prosecco');
		renderItems(vinLaPahar, 'vin-la-pahar');
	});