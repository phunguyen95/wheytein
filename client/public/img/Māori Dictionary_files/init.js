$(function () {

	/* ****************************************
		Plugins
	**************************************** */	
	
	// slider
	if($('.slider li').length > 1) {
		$('.slider').bxSlider({
			auto: true,
			pause: 6000,
			speed: 2000,
			mode: 'fade',
			controls: false,
			pager: false
		});
	}

	$("select").selectBoxIt({
		native: true
	});

	$(".various").fancybox({
		maxWidth	: 540,
		maxHeight	: 600,
		fitToView	: false,
		width		: '90%',
		height		: 'auto',
		padding		: 0,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		width		: '80%',
		padding		: 0,
		helpers 	: { title : { type : 'over' } }, // helpers
		beforeShow 	: function() {
			var photo_credit = $(this.element).attr('data-credit');
			this.title = (this.title ? '' + this.title + '' : '');
			if(photo_credit) {
				this.title += "<br><span class='sml'>Photo courtesy of "+$(this.element).attr('data-credit')+"</span>";
			}
		} // beforeShow
	});

	// show thanks popup
	// if(Cookies.get('thanks-msg') == undefined) {
	// 	if($("#thanks").length) {
	//     	$.fancybox.open("#thanks");
	//     	Cookies.set('thanks-msg', '1', { expires: 365 });
	//     }
 //    }

	initUniform = function() {
        $("input[type=checkbox], input[type=radio]").uniform();
    }
	
	initUniform();

	/* ****************************************
		Mobile
	**************************************** */	

	$(window).on("load resize", function() {


		// Navigation
		// variables
		var nav =  $("nav"),
			body = $("body"),
			active = "menu-active";

		if ( $(window).width() < 760) {

			// Hide on mobile
			nav.hide();

			// Mobile menu init
			$("#button-menu").click(function(e){
				//alert("clicked");
				e.preventDefault();
				nav.fadeIn(200);
				body.addClass(active);
			});

			$("a.button-close").click(function(e){
				e.preventDefault();
				nav.fadeOut(200);
				body.removeClass(active);
			});

		} else {
			body.removeClass(active);
			nav.show();
		}

	});

	// Filter
	// variables
	var filter = $("a.dropdown"),
		content = ".expand-content",
		close = $(".expand-content .icon-close"),
		speed = 100;

	
	filter.on("click touch", function(e){
		e.preventDefault();

		if($("div.filter").hasClass("active")){
			$(this).parents("li").removeClass("active");
			$("div.filter").removeClass("active");
			$(this).next(content).slideUp(speed);
		} else {
			$(this).parents("li").addClass("active");
			$("div.filter").addClass("active");
			$(this).next(content).slideDown(speed);
		}
	});
	

	close.on("click touch", function(e){
		e.preventDefault();
		filter.parents("li").removeClass("active");
		$("div.filter").removeClass("active");
		$(content).slideUp(speed);
	});
	
});