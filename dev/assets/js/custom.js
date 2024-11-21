window.addEventListener("load", function (event) {

	const btnBurger = document.querySelector('.btn-burger')
	const mobileContainer = document.querySelector('.mobile-container')

	const togleMobileMenu =()=> {
		mobileContainer.classList.toggle('show')
		btnBurger.classList.toggle('active')
	}

	btnBurger.addEventListener('click', togleMobileMenu)

	const bannerSlider = new Swiper('.banner-slider', {
		slidesPerView: 2,
		speed: 700,
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const carouselWeekly = new Swiper('.carousel-weekly', {
		speed: 700,
		spaceBetween: 40,
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.weekly-button-next',
			prevEl: '.weekly-button-prev',
		}
	});
	document.querySelector('.wiget') ? installWiget() : null
})
