// var name = "Ivan"; устареыший вариант

// let number = 7; может когда-то изменить значение
// const pi = 3.14; когда значение не меняется

// let number = 4;
// const pi = 3.14;

// number = 8;

// let leftBorderWidth = 200;

// типы данных
// number
// string - "", '', ``
// true/false
// null
// undefined
// object
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// symbol

// alert(123);
// console.log(number);
// let answer = confirm ("Вам есть 18?");
// console.log(answer);

// let answer = prompt ("Вам есть 18?", "");
// console.log(answer);

// console.log(4+4);
// console.log(4+'gfhfhjfjfk'); конкатенация - склеивание строк
// console.log (4-'fhfhfhf'); NaN not a number

// let isChecked = true,
//     isClosed = false;

// console.log (isChecked && isClosed); оператор "и"
// console.log (isChecked || isClosed); оператор "или"

// if (2*4 == 8*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходите')
// }

// const num = 50;
// if (num < 49) {
//     console.log('неверно')
// } else if (num > 100) {
//     console.log('много')
// } else {
//     console.log('верно')
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i)
// // }
// function logging(a, b) {
//     console.log(a + b)
// }
// logging(3, 5);
// logging(4, 9);

$(document).ready(function(){
	$('.carousel__inner').slick({
		autoplay: true,
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function validateForms(form){
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неверный формат почты"
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+7 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

	// Smooth scroll and pageup

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();
});



// const slider = tns({
// 	container: '.carousel__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	controls: false,
// 	nav: false
// });

// document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
// });