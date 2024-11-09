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
    slidesPerView: 3,
	centeredSlides: true,
    loop: true,
	navigation: {
		nextEl: '.weekly-button-next',
		prevEl: '.weekly-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 14,
			centeredSlides: true,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
			centeredSlides: true,
		},
		// when window width is >= 1025px
		1025: {
			slidesPerView: 3,
			spaceBetween: 40,
			centeredSlides: true,
		},
	}
});
