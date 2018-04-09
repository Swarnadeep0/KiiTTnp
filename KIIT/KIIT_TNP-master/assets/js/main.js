(function($){
	$(window).load(function(){

		// INITIALIZE ANIMSITION
		if($(".animsition").length){
			$(".animsition").animsition({
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body',
				unSupportCss          : [ 'animation-duration',
										  '-webkit-animation-duration',
										  '-o-animation-duration'
										],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slie',
				overlayParentElement  :   'body'
			});
		}
//Swarnadeep
    $.getJSON("./IEC_CR.json",function(data){
		if ($.fn.slick) {
		$.each(data.table,function(i,f)
		{
		$('.slider-nav').append("<div class='client-thumbnail'><img src="+f.img+"></div>");
		$('.slider-for').append("<div class='client-feedback-text text-center'><div class=fa><div class="+f.class+"><b class="+f.icon+" aria-hidden='true'>"+f.des+"</b></div></div><div class="+f.class1+"><h5>"+f.name+"</h5><p>"+f.Despara+"</p></div><div class='client-description text-center'><p><i class='fa fa-envelope' aria-hidden='true'> Email-id:</i>"+f.email+"</p><p><i class='fa fa-phone' aria-hidden='true'> Phone-no:</i>"+f.ph+"</p></div></div>")
		});
		$.each(data.table1,function(i,f)
		{
		$('.slider-navcr').append("<div class='cl-thumbnail'><img src="+f.img+"></div>");
		$('.slider-forcr').append("<div class='cl-feedback-text text-center'><div class='fa'><div class="+f.class+"><b class="+f.icon+" aria-hidden='true'>"+f.des+"</b><br><br><p class="+f.para+">"+f.Despara+"</p></div></div><div class="+f.class1+"><h5>"+f.name+"</h5></div><div class='cl-description text-center'><p><i class='fa fa-envelope' aria-hidden='true'> Email-id:</i>"+f.email+"</p><p><i class='fa fa-phone' aria-hidden='true'> Phone-no:</i>"+f.ph+"</p></div></div>")
		});
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
			dots: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
		$('.slider-forcr').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
			dots: true,
            asNavFor: '.slider-navcr'
        });
        $('.slider-navcr').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-forcr',
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
		}
	});
		// TABS
		$(".bottom-line").css({
			width : $(".tab nav a").first().width() + 20 + "px" // 20 = element's padding * 2
		});
		var _current_index = 0;
		$(".tab nav a").on('click', function(){
			e.preventDefault();
			// tab navigation styles
			var _this = $(this);
			var _index = _this.index();
			if(_current_index !== _index){
				$(".tab nav a").each(function(){
					if($(this).hasClass("current")) $(this).removeClass("current");
				});
				_this.addClass("current");
				$(".bottom-line").css({
					left : _this.offset().left - _this.parent().offset().left + "px",
					width : _this.width() + 20 + "px" // 20 = element's padding * 2
				});

				// show tab content
				$(".tab_single.shown").fadeOut(200);
				setTimeout(function(){
					$(".tab_single").eq(_index).fadeIn(200);
					$(".tab_single").eq(_index).addClass("shown");
				},200);

				_current_index = _index;
			}
		});

		// NAVBAR
		var _link = $("nav.desktop-nav ul.first-level").children("li");
		var shown = false;
		// show navbar
		$(".menu-icon").on( 'click', function(){
			var _this = $(this);
			$("nav.mobile-nav").slideToggle(200);
			if(!shown){
				_this.children("div").css("width","30px");
				shown = true;
			}else{
				_this.children("div").first().css("width","30px");
				_this.children("div").eq(1).css("width","15px");
				_this.children("div").eq(2).css("width","20px");
				shown = false;
			}
		});



		 // Contact form
  		var form = $('#main-contact-form');
  			form.submit(function(event){
    			event.preventDefault();
    			var form_status = $('<div class="form_status"></div>');
    			$.ajax({
      				url: $(this).attr('action'),
      					beforeSend: function(){
        				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      				}
    			}).done(function(data){
      				form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    			});
  			});



		// dropdown - desktop
		_link.on('hover', function(e) {
			e.preventDefault();
			var _this = $(this);
			if(_this.children("ul.second-level").html() !== undefined){
				if(e.type === "mouseenter"){
					_this.children("ul.second-level").slideDown(200);
				}else{
					_this.children("ul.second-level").slideUp(200);
				}
			}
		});
	/* swarnadeep */
		$("#owl-demo").owlCarousel({
		 autoPlay: 3000, //Set AutoPlay to 3 seconds
		 navigation:true,
		 itemsDesktop : [1199,1],
		 itemsDesktopSmall : [979,1],
	     responsive:true,
		 items:1
 		});
		/*swarnadeep */
		
		// dropdown - mobile
		$("nav.mobile-nav").html($("nav.desktop-nav").html()); // set navbar

		var mobile_link = $("nav.mobile-nav ul.first-level").children("li");
		mobile_link.children("a").on( 'click', function(e){
			var _this = $(this);
			var submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
			if(submenu_exists){
				e.preventDefault();
				$(".down").slideUp(200);
				if(_this.next("ul.second-level").hasClass("down")){
					_this.next("ul.second-level").removeClass("down");
				}else{
					$(".down").removeClass("down");
					_this.next("ul.second-level").slideDown(200);
					_this.next("ul.second-level").addClass("down");
				}
			}
		});

	});
})(jQuery);
