$(function() {
	//EqualHeights
$(".news-item h4").equalHeights();
// Custom JS
//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", "png");
		});
	};
//SuperFish
	$(".sf-menu").superfish({
		delay: 300,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo('#mobile-menu');
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children('ul').removeClass("sf-menu")
	.parent().mmenu({
		extensions : [ 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Menu"
		}
	});

	$(".hamburger").click(function() {
		$(this).addClass("on");
	});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".hamburger").removeClass("on");
	});

//Owl-carousel pasrtners
	$(".partners").owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		smartSpeed: 700,
		items: 4,
		dots: true,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
		}
	});

//Owl-carousel fotos
	$(".fotos").owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		loop: true,
		smartSpeed: 700,
		items: 5,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			505: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			},
		}
	});
// Accordion menu
	$(".menu-list").find('.accordion-toggle').click(function() {
		$(this).toggleClass("active-tab").find("span").toggleClass("icon-minus icon-plus");
		$(this).next().toggleClass("open").slideToggle("fast");
		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not($(this)).removeClass("active-tab").find("span").removeClass("icon-minus").addClass("icon-plus")
	}); 

// Accordion fitness-filter
		$(".nav").find('.plus-1').click(function() {
		$(this).find("span").toggleClass("icon-minus icon-plus");
		$(".nav .plus-1").not($(this)).find("span").removeClass("icon-minus").addClass("icon-plus")
	}); 

		$(".nav").find('.plus-2').click(function() {
		$(this).find("span").toggleClass("icon-minus icon-plus");
		$(".nav .plus-2").not($(this)).find("span").removeClass("icon-minus").addClass("icon-plus")
	});

		$(".nav").find('.plus-3').click(function() {
		$(this).find("span").toggleClass("icon-minus icon-plus");
		$(".nav .plus-3").not($(this)).find("span").removeClass("icon-minus").addClass("icon-plus")
	});

		$(".nav").find('.plus-4').click(function() {
		$(this).find("span").toggleClass("icon-minus icon-plus");
		$(".nav .plus-4").not($(this)).find("span").removeClass("icon-minus").addClass("icon-plus")
	});

		$(".nav").find('.plus-5').click(function() {
		$(this).find("span").toggleClass("icon-minus icon-plus");
		$(".nav .plus-5").not($(this)).find("span").removeClass("icon-minus").addClass("icon-plus")
	});

});


 