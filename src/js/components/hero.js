import Swiper, { Pagination } from 'swiper/swiper-bundle';

const hero = () => {
	Swiper.use([Pagination]);

	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper('.js-hero-slider', {
		slidesPerView: 1,
		// effect: 'fade',
		// fadeEffect: {
		// 	crossFade: true
		// },
		speed: 1000,

		breakpoints: {
			320: {
				pagination: {
					el: '.js-hero-pagination',
					clickable: true,
						renderBullet: function (index, className) {
							return `<span class="${className}"></span>`;
						},
				},
			},
			1400: {
				pagination: {
					el: '.js-hero-pagination',
					clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '">' + ('0' + [index + 1]) + '</span>';
						},
				},
			}
		}
	});
};

export default hero;
