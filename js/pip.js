$(document).ready(function(){

	// The current page route (e.g. about/)
	var navTarget = $('body').attr('data-page-url');
	navTarget = navTarget.replace(/\/+$/, "");

	// Switch active link states
	$('.active-link').removeClass('active-link');
	$('a[href="' + navTarget + '"]').addClass('active-link');

	// Toggle header menu
    $(document).on('click', '.js-menu-toggle', function (){
		if ( $('body').hasClass('menu--open') ) {
			$('body').removeClass('menu--open');
		} else {
			$('body').addClass('menu--open');
		}
	});

	$(document).on('click', '.menu__list__item__link', function (){
		// If menu is open when you click a link on mobile
		if ( $('.menu').hasClass('menu--open') ) {
			$('.menu').removeClass('menu--open');
		}
	});
  
});