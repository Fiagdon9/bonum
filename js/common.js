$(function() {

	// Custom JS
	// $(".top-line .sf-menu").superfish({
	// 	cssArrows: false,
	// 	hoverClass: 'no-class'
	// });
	$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
	});
});
