
$(document).ready(function() {
	$('.nav>li').bind('mouseover', openSubMenu);
	$('.nav>li').bind('mouseout', closeSubMenu);
	
	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');
	};
	
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');
	};

	
	
	var flag = 0;
	$('.email').hover(function(){
		if(flag == 0){
			$('.email').text($('.email').eq(0).text().split("").reverse().join(""));
			$('.email').css("direction","ltr");
			flag = 1;
		}
	},function(){
		//no out-hover
	});

	$('.email').hover(function(){
		if(flag == 0){
			$('.email').text($('.email').eq(0).text().split("").reverse().join(""));
			$('.email').css("direction","ltr");
			flag = 1;
		}
	});

			  

});
