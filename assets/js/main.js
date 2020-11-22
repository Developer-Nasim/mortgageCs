(function($) {
	"use strict";
   
	// owlCarousel
	$(".testimonial-slider").owlCarousel({
	  loop: true,
	  margin: 10,
	  items: 4,
	  navText: [
		'<i class="far fa-angle-left"></i>',
		'<i class="far fa-angle-right"></i>'
	  ],
	  nav: true,
	  dots: false,
	  autoplay:true,
	  responsive: {
		0: {
		  items: 1, 
		  nav: false
		},
		767: {
		  items: 2
		},
		992: {
		  items: 4
		}
	  }
	});
   
	// scrollToTop
	$.scrollUp({
	  scrollName: "scrollUp", // Element ID
	  topDistance: "300", // Distance from top before showing element (px)
	  topSpeed: 300, // Speed back to top (ms)
	  animation: "fade", // Fade, slide, none
	  animationInSpeed: 200, // Animation in speed (ms)
	  animationOutSpeed: 200, // Animation out speed (ms)
	  scrollText: '<i class="far fa-long-arrow-alt-up"></i>', // Text for element
	  activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	}); 
  })(jQuery);
  