
$(document).ready(function(){
	$('.your-class').slick({
		autoplay:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplaySpeed:3000,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 1140,
				settings: {
					autoplay:true,
					autoplaySpeed:3000,
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					autoplay:true,
					autoplaySpeed:3000,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					autoplay:true,
					autoplaySpeed:3000,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});