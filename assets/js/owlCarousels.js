/*
*
* ==========================================
*            Home Slider
* ==========================================
*
*/

    $(document).ready(function () {
        $('#home-silder').owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [992, 1],
            itemsTablet: [768, 1],
            itemsMobile: [450, 1],
            autoPlay: 10000,
            pagination: true,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    });

    $(document).ready(function () {
        $('#testimonial').owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [450, 1],
            autoPlay: 10000,
            pagination: true,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    });

    $(document).ready(function () {
        $('#blog').owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [450, 1],
            autoPlay: 10000,
            pagination: false,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    });

    $(document).ready(function () {
        $('#product').owlCarousel({
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [450, 1],
            autoPlay: 10000,
            pagination: false,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    });

/*
*
* ==========================================
*            Single Products Page
* ==========================================
*
*/
$(document).ready(function(){
	$('#additional_silder_products_images').owlCarousel({	
		items:5,
		itemsDesktop:[1199,3],
		itemsDesktopSmall:[992,2],
		itemsTablet:[768,3],
		itemsMobile:[600,2],
		autoPlay: 6000,
		pagination: false,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>']
	});
});

$(document).ready(function(){
	$('#related_product').owlCarousel({	
		items: 4,
		itemsDesktop:[1199,3],
		itemsDesktopSmall:[992,3],
		itemsTablet:[768,2],
		itemsMobile:[450,1],
		autoPlay: 10000,
		pagination: false,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

$(window).load(function() {
	$('.sp-wrap').smoothproducts();
});
