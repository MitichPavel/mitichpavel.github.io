window.addEventListener('DOMContentLoaded', () => {
	// Hamburger menu
	const hamburgerMenu = () => {
		const menu = document.querySelector('.nav__list'),
			  menuItem = document.querySelectorAll('.nav__item'),
			  hamburger = document.querySelector('.hamburger'),
			  body = document.querySelector('body'),
			  dash1 = hamburger.querySelector('.hamburger__dash_1'),
			  dash3 = hamburger.querySelector('.hamburger__dash_3');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('nav__list_active');
			// Adding of animation
			dash1.classList.toggle('downAndRotate');
			dash3.classList.toggle('upAndRotate');

			body.classList.toggle('body_fixed');
		});

		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('nav__list_active');
				// Adding of animation
				dash1.classList.toggle('downAndRotate');
				dash3.classList.toggle('upAndRotate');

				body.classList.toggle('body_fixed');
			});
		});
	};
	hamburgerMenu();

	// Swiper slider
	const swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 4000,	
		},
		speed: 800,
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//WOW JS
	new WOW().init();

	// Modal
	const modal = () => {
		function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
			const trigger = document.querySelectorAll(triggerSelector),
				  modal = document.querySelector(modalSelector),
				  close = document.querySelector(closeSelector);
			trigger.forEach(item => {
				item.addEventListener('click', (e) => {
					if(e.target) {
						e.preventDefault();
					}
	
					modal.classList.add('modal_visible');
					modal.querySelector('.modal__content')
						.classList.add('modal__content_visible');
					document.querySelector('body').style.overflow = 'hidden';
				});
			});
			close.addEventListener('click', () => {
				modal.classList.remove('modal_visible');
				modal.querySelector('.modal__content')
					.classList.remove('modal__content_visible');
				document.querySelector('body').style.overflow = '';
			});
			modal.addEventListener('click', (e) => {
				if(e.target === modal && closeClickOverlay) {
					modal.classList.remove('modal_visible');
					modal.querySelector('.modal__content')
						.classList.remove('modal__content_visible');
					document.querySelector('body').style.overflow = '';
				}
			});
		}
		bindModal('.offers__more', '.modal', '.modal__close');
	};
	modal();
});