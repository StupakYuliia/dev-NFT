const btnBurger = document.querySelector('.btn-burger')
const mobileContainer = document.querySelector('.mobile-container')

const togleMobileMenu =()=> {
	mobileContainer.classList.toggle('show')
	btnBurger.classList.toggle('active')
}

btnBurger.addEventListener('click', togleMobileMenu)

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	speed: 700,
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
