function installTabs() {
	const tabsContent = document.querySelectorAll('.tabs__content')
	const tabsButton = document.querySelectorAll('.tabs__button')

	// tabs.forEach((item, index) => {
	// 	item.classList.add('tabs-' + index)
	// })

	// tabsNav.forEach((item, index) => {
	// 	item.classList.add('tabs__nav-' + index)
	// })

	// tabsContent.forEach((item, index) => {
	// 	item.classList.add('tabs__content-' + index)
	// })

	// function addClass(selectors, className) {
	// 	selectors.forEach((item, index) => {
	// 		item.classList.add(className + index)
	// 	})
	// }

	// addClass(tabsNav, 'tabs__nav-')
	// addClass(tabsButton, 'tabs__button-')
	// addClass(tabsContent, 'tabs__content-')
	// addClass(tabs, 'tabs-')

	function addClass(selector, className) {
		selector.classList.add(className)
	}

	const addAttr = (selectors, attrName, attValue) => {
		selectors.forEach((item, index) => {
			item.setAttribute(attrName, attValue+index)
		})
	}
	addAttr(tabsButton, 'data-content', 'content-')
	addAttr(tabsContent, 'id', 'content-')



	tabsButton.forEach(btn => {
		btn.addEventListener('click', ()=> {
			const dataContent = btn.getAttribute('data-content')
			const thisTabs = btn.closest('.tabs')
			const thisContents = thisTabs.querySelector("#" + dataContent)

			thisTabs.querySelector('.tabs__content.active').classList.remove('active')
			thisTabs.querySelector('.tabs__button.active').classList.remove('active')

			addClass(thisContents, 'active')
			addClass(btn, 'active')
		})
	})

}
