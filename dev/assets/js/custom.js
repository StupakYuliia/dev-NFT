const btnBurger = document.querySelector('.btn-burger')
const mobileContainer = document.querySelector('.mobile-container')

const togleMobileMenu =()=> {
	mobileContainer.classList.toggle('show')
	btnBurger.classList.toggle('active')
}

btnBurger.addEventListener('click', togleMobileMenu)
