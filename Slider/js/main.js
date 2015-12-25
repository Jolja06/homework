var slider = (function(){
//публичные методы
	return {
//приватные методы
		init: function(){

			var _this = this;

			$('.slider__controls-button').on('click', function(e){
				e.preventDefault();

				var
					$this = $(this),
					slides = $this.closest('.slider').find('.slider__item'),
					activeSlide = slides.filter('.active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					firstSlide = slides.first(),
					lastSlide = slides.last();

				if ($this.hasClass('slider__controls-button_next'))	{

					if(nextSlide.length){
						_this.moveSlide(nextSlide, 'forward');
					} else {
						_this.moveSlide(firstSlide, 'forward');
					}

					

				} else {
					

					if(prevSlide.length) {
						_this.moveSlide(prevSlide, 'backward');
					} else{
						_this.moveSlide(lastSlide, 'backward');
					}
				}
			}); 

		},

		moveSlide: function(slide, direction){

			var 
				container = slide.closest('.slider'),
				slides = container.find('.slider__item'),
				activeSlide = slides.filter('.active'),
				slideWidth = slides.width(),
				duration = 500,
				reqCssPosition = 0,
				reqSlideStrafe = 0;

			if (direction === 'forward'){
				reqCssPosition = slideWidth;
				reqSlideStrafe = -slideWidth;
			
			}  else if (direction === 'backward'){
				reqCssPosition = -slideWidth;
				reqSlideStrafe = slideWidth;
			}	

			slide.css('left', reqCssPosition).addClass('inslide');

			var movableSlide = slides.filter('.inslide');

			activeSlide.animate({left: reqSlideStrafe}, duration);

			movableSlide.animate({left: 0}, duration, function(){
				var $this = $(this);

				slides.css('left', '-40px').removeClass('active');

				$this.toggleClass('inslide active');
			});


		}

	}


}());

$(document).ready(function(){
	if($('.slider').length){
		slider.init();
	}
});