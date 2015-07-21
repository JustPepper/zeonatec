$(document).scroll(function() {
	var height = $('.top-bar').height();
	var scroll = $(document).scrollTop();
	if (scroll > height) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	};
});


$.fn.animateInOut = function( animation1, animation2 ) {
	var animationIn = animation1;
	var animationOut = animation2;
	if ($(this).hasClass('clicked')) {
		$(this).addClass(animationOut + ' ' + 'animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(animationOut + ' ' + 'animated clicked').hide();
		});
	} else {
		$(this).addClass(animationIn + ' ' + 'animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(animationIn + ' ' + 'animated').addClass('clicked');
			$('.form-wrapper').append('<div class="overlay"></div>');
		});
	};

}


$('#contact').click(function() {
	event.preventDefault();
	$('.form-popup').animateInOut('bounceInDown', 'bounceOutUp');
});


 $(document).click(function(e) {
  if(e.target.class!="form"){  // if click is not in 'mydiv'
    console.log('clicked');
  }
});