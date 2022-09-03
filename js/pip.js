$(document).ready(function(){

    $(document).on('click', '.js-menu-toggle', function (){

		// If already open
		if ( $('body').hasClass('menu--open') ) {
			$('body').removeClass('menu--open');
		}

		// If not open
		else {
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