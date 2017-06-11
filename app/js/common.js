$(function() {
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
	});
});
