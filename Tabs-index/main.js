$(document).ready(function(){

	$('.tabs__control-link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs__controls-item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();
		
		contentItem.eq(itemPosition)
		.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
		
	});
});