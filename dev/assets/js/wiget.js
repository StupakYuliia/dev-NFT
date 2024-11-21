function installWiget() {
	const customWigetsMenu = document.querySelectorAll('[data-custom-wiget="menu"]')
	const openButtons = document.querySelectorAll('[data-custom-wiget="open-button"]')

	openButtons.forEach(btn => {
		btn.addEventListener('click', function(){
			btn.closest('.layout-menu').classList.toggle('show')
		})
	})

	function closeAllWigetMenu() {
		customWigetsMenu.forEach(item => {
			document.addEventListener('click', function(event) {
				const inBoundaries = event.composedPath().includes(item);
				!inBoundaries ? item.classList.remove('show') : null
			})
		})
	}
	closeAllWigetMenu();

	let date = new Date(Date.now() + 86400e3 * 365);
	date = date.toUTCString();

	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}


	customWigetsMenu.forEach((menu, index) => {

		let wigetCookie = getCookie('layoutCase-' + (index + 1))
		const wiget = menu.closest('.wiget');
		const itemList = wiget.querySelector('[data-layout="list"]');
		const itemGrid = wiget.querySelector('[data-layout="grid"]');

		if(wigetCookie === 'grid') {
			wiget.classList.add('grid');
			itemGrid.classList.add('active');
			itemList.classList.remove('active');

		} else if(wigetCookie === 'list') {
			wiget.classList.add('list');
			itemGrid.classList.remove('active');
			itemList.classList.add('active');
		}

		menu.addEventListener('click', function() {
			const dataLayout = menu.querySelectorAll('[data-layout]')
			dataLayout.forEach(item =>{
				item.addEventListener('click', function() {
					const wiget = item.closest('.wiget')
					const thisNavigation = item.closest('.layout-case')
					const thisNavigationItem = thisNavigation.querySelectorAll('.layout-case__item')

					thisNavigationItem.forEach(navItem => {
						navItem.classList.remove('active')
					})

					item.classList.add('active')
					const dataLayoutValue = item.getAttribute('data-layout')

					/*toggel grid or list*/
					if(dataLayoutValue === 'grid') {
						wiget.classList.add('grid');
						wiget.classList.remove('list');
					} else if(dataLayoutValue === 'list') {
						wiget.classList.add('list');
						wiget.classList.remove('grid');
					}

					let layoutCase = 'layoutCase-' + (index + 1);
					let wigetLayoutCookie = document.cookie = layoutCase + "=" + dataLayoutValue + "; expires=" + date

					//document.cookie === (layoutCase + '=grid') ? wiget.classList.add('grid') : null
					})
				})
			})
		})

}
