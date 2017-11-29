// Initialize your app
var myApp = new Framework7({
	// Default title for modals
    modalTitle: 'Framework7',
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    name: 'right'
});






myApp.swiper('.swiper-container', {
	pagination:'.swiper-container .swiper-pagination',
    speed: 400,
    spaceBetween: 20,
	slidesPerView: 2
	
});  


 

