$(document).ready(function(){
	$('.slider-image').slick({
		infinte: true,
		slidesToShow:1,
		slideToScroll:1,
		prevArrow:'.preview',
		nextArrow:'.next'

	});
	$(".toggle").click(function(){
		$(this).toggleClass("toggle-active");
		if($(this).hasClass("toggle-active")){
			$(".menu").addClass("menu-active");
		}
		else{
			$(".menu").removeClass("menu-active");
		}

	})
		
});
