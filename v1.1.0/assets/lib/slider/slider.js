function slider(id,pause,animationSpeed,obj) {
	
	/*
		slider() : Loads image carousel to element with id
		---------------------------------------------------------------
		id : ID of element into which slider will be loaded
		pause : time interval (in seconds) between slide change
		animationSpeed : time interval (in seconds) for slides to change
		obj : JSON object containing url, title, and description information
	*/
	
	
	// Initialize Slider
	initSlider();
    var interval;
    var currentSlide = 1;
    pause = pause*1000;
    animationSpeed = animationSpeed*1000;
    
    
    // Cache DOM elements
    var $slider 		= $('#slider');
    var $slides 		= $('.slide', $slider);
    var $slideContainer = $('.slides', $slider);
    var $w_init 		= $('html').width(); 
 
    
    // Initialize width & margins
    var slide_width = $slider.width();
    $slides.width(slide_width);
    $slideContainer.width(slide_width*(obj.length+2));
    var margin = slide_width;
	$slideContainer.css('margin-left','-'+margin+'px');
	
    
    function initSlider(){
	    
	    // Initialize slider HTML from JSON object
	    
	    var n_slides = obj.length+2;
	    
	    // Create Skeleton
		var slider_html =  '<div id="slider"><div class="prev-slide"><img src="./assets/img/gallery/left.png" alt="..." width="40" height="40"></div><div class="next-slide"><img src="./assets/img/gallery/right-arrow.png" alt="..." width="40" height="40"></div><ul id="slides" class="slides"></ul></div>';
		
		// Assemble Slides
		var slides_html='', j;
		for(var i=0; i<n_slides; i++){
			
			if(i==0) j=n_slides-2; else if(i==n_slides-1) j=1; else j=i;
			slides_html += '<li class="slide"><div class="slide-img" style="background-image:url('+obj[j-1]['url']+')">&nbsp;</div><div class="slide-info"><div class="brand-img" style="background-image:url('+obj[j-1]['img']+')">&nbsp;</div><div class="slide-description">'+obj[j-1]['description']+' <footer class="blockquote-footer"><span class="h6 text-uppercase">'+obj[j-1]['footer']+'</span></blockquote></div></div></li>';
		}
		
		// Create Slider
		$(id).html(slider_html);
		$('#slides').html(slides_html);	    
    }


    function startSlider() {
	    
	    // Engage slider auto-scroll
	    
	   	//-console.log('slider started');
        interval = setInterval(function() {
	        
            $slideContainer.animate({'margin-left': '-='+slide_width}, animationSpeed, function() {
	           
	            currentSlide++;
                if(currentSlide === $slides.length-1) {
                    currentSlide = 1;
                    margin = slide_width;
                    $slideContainer.css('margin-left', '-'+margin+'px');
                }
                //-console.log('slide: '+currentSlide);
                
            });
        }, pause);
        
    }
    
    
    function nextSlide() {
	    
	    // Manual scroll to next slide

        $slideContainer.animate({'margin-left': '-='+slide_width}, animationSpeed, function() {

			currentSlide++;
	        if(currentSlide === $slides.length-1) {
		        console.log('reset');
	            currentSlide = 1;
	            margin = slide_width;
	            $slideContainer.css('margin-left', '-'+margin+'px');
	        }
			console.log('next slide --> '+currentSlide);
	    });
	    
	    // Reset the slide interval
	    clearInterval(interval);
	    startSlider();

    }
    
    
    function prevSlide() {
	    
	    // Manual scroll to previous slide

        $slideContainer.animate({'margin-left': '+='+slide_width}, animationSpeed, function() {

			currentSlide--;
	        if(currentSlide === 0) {
		        console.log('reset');
	            currentSlide = $slides.length-2;
	            margin = slide_width*currentSlide-1;
	            $slideContainer.css('margin-left', '-'+margin+'px');
	        }
			console.log('previous slide --> '+currentSlide);
	    });
	    
	    // Reset the slide interval
	    clearInterval(interval);
	    startSlider();

    }
 
 
    function pauseSlider() {
	    
	    // Stops Slider Auto-scroll (on mouseover)
	    
        clearInterval(interval);
        console.log('slider paused');
        
    }
	
	
	// Mouseover Events
    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


	// Next Slide 
	$(".next-slide").click(function(){ nextSlide(); });
	
	
	// Previous Slide
	$(".prev-slide").click(function(){ prevSlide(); });
	
	
	// On Window Resize
	$(window).resize(function() {	
		
		var w = $('html').width();
		if(w != $w_init){ // window width has been changed
			
			// Re-initialize slider, slide-width, and margin
			slide_width = $slider.width();
			$slides.width(slide_width);
			margin = slide_width*currentSlide;
			$slideContainer.css('margin-left', '-'+margin+'px');
			$w_init = w;
		}	
			
	});
	
	
	// Run Slider
	startSlider();
    

}; // slider()
