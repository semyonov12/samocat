$(document).ready(function () {
	$('.main__menu').click(function (event) {
		$('.header__list').addClass('active');
		$('body').addClass('lock');
		$('.qw').addClass('l');
	});

	$('.header__close').click(function (event) {
		$('.header__list').removeClass('active');
		$('body').removeClass('lock');
		$('.qw').removeClass('l');
	});



	$('.accordion__trigger').click(function () {
		$(this).toggleClass('open');
		$(this).next('.accordion__content').slideToggle();
	});

	if ($(window).width() <= '768') {
		$('.footer__bd').click(function () {
			$(this).next('.footer__list').slideToggle();
		});
	};
	

	$('.main__slider').slick({
		arrows: false,
		dots: true
	});

	$('.brends__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		infinite: false,
	});


	$('.brends__slider-mobile').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		infinite: false,
	});


	$('.slider-new').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	let filter = $("[data-filter]");

	filter.click(function (e) {
		e.preventDefault();

		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {

				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		};

		
	})

});
