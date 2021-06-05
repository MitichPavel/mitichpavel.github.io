window.onload = function(){
	const catalogData = [
		{
			src: 'img/catalog/sedona.jpg',
			alt: 'Sedona',
			name: 'Sedona',
			subtitle: 'Информационный сайт<br>для туристов',
			price: '8 900',
			options: {
				layout: 'adaptive',
				adds: [
					'carousel',
					'advantages',
					'gallery',
				],
			},
		},
		{
			src: 'img/catalog/pink.jpg',
			alt: 'Pink App',
			name: 'Pink App',
			subtitle: 'Продуктовый лендинг<br>приложения для iOS и Android',
			price: '10 900',
			options: {
				layout: 'static',
				adds: [
					'carousel',
					'gallery',
					'cart',
				],
			},
		},
		{
			src: 'img/catalog/barbershop.jpg',
			alt: 'Borodinski',
			name: 'Barbershop',
			subtitle: 'Сайт салона красоты.<br>Для мужчин, да.',
			price: '9 500',
			options: {
				layout: 'adaptive',
				adds: [
					'advantages',
					'gallery',
				],
			},
		},
		{
			src: 'img/catalog/mishka.jpg',
			alt: 'Mishka',
			name: 'MISHKA',
			subtitle: 'Интернет-магазин<br>вязаных игрушек',
			price: '9 900',
			options: {
				layout: 'adaptive',
				adds: [
					'advantages',
					'news',
					'gallery',
				],
			},
		},
		{
			src: 'img/catalog/aplus.jpg',
			alt: 'A Plus',
			name: 'A Plus',
			subtitle: 'Лендинг курсов повышения<br>квалификации',
			price: '12 200',
			options: {
				layout: 'liquid',
				adds: [
					'carousel',
					'advantages',
					'gallery',
				],
			},
		},
		{
			src: 'img/catalog/kvast.jpg',
			alt: 'Кваст',
			name: 'КВАСТ',
			subtitle: 'Промо-сайт производителя<br>крафтового кваса',
			price: '8 000',
			options: {
				layout: 'static',
				adds: [
					'carousel',
					'advantages',
					'cart',
				],
			},
		},
	];
	function render(card){
		const {options, src, alt, name, subtitle, price} = card;
		return `
		<div class="catalog__item ${[...options.adds, options.layout].join(' ')}">
			<img class="catalog__img" src="${src}" alt="${alt}">
			<div class="catalog__wrap">
				<div class="catalog__window">
					<div class="catalog__round"></div>
				</div>
				<div class="catalog__buy-now">
					<div class="catalog__item-name">${name}</div>
					<div class="catalog__item-subtitle">${subtitle}</div>
					<button class="btn btn_buy">
						<span class="price">${price}</span>
						<span class="currency"> руб.</span>
					</button>
				</div>
			</div>
		</div>
		`;
	}

	const $catalog = document.querySelector('.catalog__list');
	catalogData.forEach(card => {
		$catalog.insertAdjacentHTML('beforeend', render(card));
	});

	class IntutAdds {
		constructor(context) {
			this.catalog = Array.from(document.querySelector('.catalog__list'));
			this.context = context;
		}

		hide() {
			$catalog.innerHTML = '';
			this.catalog.forEach(card => {
				card.options.adds.forEach(add => {
					if(add === this.context.id){
						$catalog.insertAdjacentHTML('beforeend', render(card));
					}
				});
			});
			console.log(this.context.id);
		}
	}

	const adds = document.querySelectorAll('input[name=adds]');
	adds.forEach(input => {
		input.addEventListener('click', function(){
			console.log('Click');
			const checkedInput = new IntutAdds(this);
			checkedInput.hide();
		});
	});



	
	// function render(list){
	// 	catalog.forEach((item, i ) => {
	// 		const img = item.querySelector('.catalog__img');
	// 		img.src = list[i].src;
	// 		img.alt = list[i].alt;
	// 		const name = item.querySelector('.catalog__item-name');
	// 		name.textContent = list[i].name;
	// 		let subtitle = item.querySelector('.catalog__item-subtitle');
	// 		subtitle.innerHTML = list[i].subtitle;
	// 		let price = item.querySelector('.price');
	// 		price.innerHTML = list[i].price;
	// 	});
	// }
	// render(catalogData);


	// const addsInputs = document.querySelectorAll('input[name=adds]');
	// let adds = Array.from(addsInputs);
	// addsInputs.forEach(el => {
	// 	el.addEventListener('click', () => {
	// 		adds.forEach(add => {
	// 			const isCheckedAdd = add.checked;
	// 			const itemList = document.querySelectorAll('.catalog__item');
	// 			itemList.forEach(item => {
	// 				if(isCheckedAdd && !item.classList.contains(add.id)){
	// 					item.classList.add('hidden');
	// 				}
	// 			});
	// 		});
	// 	});
	// });
};