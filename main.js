function menu() {
    var menu = document.getElementById("menu");
    var open = document.getElementById("menu_icon");
    var close = document.getElementById("close_icon");
    
    menu.classList.toggle("show-menu");
    open.classList.toggle("show-open");
    close.classList.toggle("show-close");
}

$( document ).ready(function() {

	$('.new-info').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplaySpeed: 2000
	});

	$('.new-info-mobile').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplaySpeed: 2000
	});

	$('.main-content').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		autoplaySpeed: 4000,
		vertical: true
	});

});