$(document).ready(function(){

	$("#work button").click(function(){
		$(".w-mail").fadeIn();
	});

	$(".menu-services").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services").offset().top
	    }, 2000);
	});

	$(".menu-port").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#team").offset().top
	    }, 2000);
	});

	$(".menu-clients").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#clients").offset().top
	    }, 2000);
	});

	$(".menu-career").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#work").offset().top
	    }, 2000);
	});

	$(".menu-contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("footer").offset().top
	    }, 2000);
	});

	$('.teamPage nav').addClass("headBackground");
	$('.teamPage nav').css({padding: '5px 0px 5px 0px'});
	$('.teamPage nav section').css({maxWidth: '1100px'});
	$('.teamPage .menu li').css({padding: '0px 15px 0px 15px'});

	$(".menu-block").click(function(){
		$(".menu").slideToggle();
	});

});

$(document).scroll(function(){

	if( $(this).scrollTop() > 500 )
	{
		$('nav').addClass("headBackground");
		// $(".head-logo-text").css({background: 'url(images/icons/logo-red-medium.png) no-repeat', backgroundSize: '60px 60px'});
		$('nav').css({padding: '5px 0px 5px 0px'});
		$('nav section').css({maxWidth: '1100px'});
		$('.menu li').css({padding: '0px 15px 0px 15px'});
	}
	else
	{
		$('nav').removeClass("headBackground");
		$('nav').css({padding: '15px 0px 15px 0px'});
		$('nav section').css({maxWidth: '1200px'});
		$('.menu li').css({padding: '0px 15px 15px 15px'});

		$('.teamPage nav').addClass("headBackground");
	$('.teamPage nav').css({padding: '5px 0px 5px 0px'});
	$('.teamPage nav section').css({maxWidth: '1100px'});
	$('.teamPage .menu li').css({padding: '0px 15px 0px 15px'});
	}

});

