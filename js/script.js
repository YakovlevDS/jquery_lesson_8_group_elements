jQuery(function($) {
	
	//$('ul').children('.current').css({'border':'1px solid red'});
	//$('.el-2').closest($('.full-width-container')).css({'border':'1px solid red'});
	
	
	//$('ul').css({'border':'1px solid red'}).find('li.current').remove();	
	//$('ul li.current').remove();
	
	///$('label.name').nextAll('label.phone').css({'border':'1px solid red'});
	//$('label.name').nextUntil('label.message').css({'border':'1px solid red'});
	
	//$('p').offsetParent().css({'border':'1px solid red'});
	//$('p').parent('.address').css({'border':'1px solid red'});
	//$('li.current').parents('.grid_12').css({'border':'1px solid red'});
	//$('li.current').parentsUntil('.grid_12').css({'border':'1px solid red'});
	
	//$('label.phone').prevAll('label.email').css({'border':'1px solid red'});
	//$('label.message').prevUntil('label.name').css({'border':'1px solid red'});
	$('label.phone').siblings('label.name').css({'border':'1px solid red'});
});
