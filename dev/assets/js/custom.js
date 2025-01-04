window.addEventListener("load", function (event) {

	const btnBurger = document.querySelector('.btn-burger')
	const mobileContainer = document.querySelector('.mobile-container')
	const linkBack = document.querySelector('.history-back')
	const wigetUserPercent = document.querySelectorAll('.wiget-user__percent')

	const navLinks = document.querySelectorAll('.nav-link');
	const currentPage = window.location.pathname.split('/').pop();

	navLinks.forEach(link => {
		if (link.getAttribute('href') === currentPage) {
			link.classList.add('active');
		}
	});

	wigetUserPercent.forEach(item => {
        let string = item.textContent
        let stringComa = /,/gi;
        let stringPercent = /%/gi;
        let refactoringString = string.replace(stringComa, '.').replace(stringPercent, '')
        let val = Number(refactoringString)

        if(val > 0) {
            item.classList.add('wiget-user__percent_totop')
        } else if (val < 0) {
            item.classList.add('wiget-user__percent_tobottom')
        } else {
            item.classList.add('wiget-user__percent_zero')
        }

    })


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

	linkBack ? historyBack() : null;
	document.querySelector('.wiget') ? installWiget() : null;
	document.querySelector('.tabs') ? installTabs() : null;
	document.querySelector('.accordion') ? accordionInstall() : null;
})

$(document).ready(function() {
	$('select').niceSelect();
});

$('.input-size').mask('0000x0000');

