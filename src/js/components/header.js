const header = () => {
	const selectors = {
		header: '.header',
		burger: '.js-burger-triger',
		catalog: '.js-catalog',
		catalogBack: '.js-catalog-back',
		bodyMod: 'body--open_menu',
		headerMod: 'header--open_catalog',
	};

	const header = document.querySelector(selectors.header);
	const burger = document.querySelector(selectors.burger);

	if (burger) {
		burger.addEventListener('click', () => {
			document.body.classList.toggle(selectors.bodyMod);
		});
	}

	const catalog = document.querySelector(selectors.catalog);

	if (catalog) {
		catalog.addEventListener('click', () => {
			header.classList.toggle(selectors.headerMod);
		});
	}
	const catalogBack = document.querySelector(selectors.catalogBack);

	if (catalogBack) {
		catalogBack.addEventListener('click', () => {
			if (header.classList.contains(selectors.headerMod)) {
				header.classList.remove(selectors.headerMod);
			}
		});
	}

};

export default header;
