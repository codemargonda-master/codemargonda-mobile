$('.sp').on('click', function(e){
	var wrapperId = $(this).attr('href');
	var dec = 0;

	if (wrapperId == '#web-content') dec = 50;

	var wrapper = $(wrapperId);

	$('body').animate({
		scrollTop : wrapper.offset().top - dec
	}, 1300, 'easeInOutExpo');

	e.preventDefault();
});