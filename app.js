	var $circle = $('.circle');
	var loadTime = 2;
	var animation = 'tada' + ' ' + loadTime +'s';
	$circle.hover(function(){
		$(this).toggleClass('showMe');
		$('.feed').toggle();
		$('.showMe .feed').css('-webkit-animation', animation);
		$('.loader').css('display', 'block').appendTo('.showMe .feed');
	
	});
function toggleMenu(){
	var $btn = $('.menu-link');
	var $menu = $('nav ul');
	var windowWidth = $(window).width();
	if (windowWidth < 900 ){
		$btn.on('click',function(){
			$(this).toggleClass('close');
			$menu.toggle();
		});
	}

	else if(windowWidth > 900){
		$menu.removeAttr('style');
	}
	
}

function menuHighlight(){
	var $menu = $('nav ul');
	var $menuItem =$menu.find('li');
	$menuItem.hover(
		function(){},
		function(){}
		);
}

$(document).ready(function(){
	toggleMenu();
	$(window).resize(toggleMenu);
});



