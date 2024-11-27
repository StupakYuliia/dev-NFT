window.addEventListener("load", function (event) {

	const btnBurger = document.querySelector('.btn-burger')
	const mobileContainer = document.querySelector('.mobile-container')
	const linkBack = document.querySelector('.history-back')

	function historyBack() {
		linkBack.addEventListener('click', function() {
			window.history.back()
		})
	}

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

	document.querySelector('.wiget') ? installWiget() : null;
	document.querySelector('.tabs') ? installTabs() : null;
	linkBack ? historyBack() : null;
})
