$(function(){

    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/left_arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/right-arrow.svg" alt=""></button>',
		autoplay: true,
		autoplaySpeed: 5000,
	});


	$('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	$('.menu-btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	})


});