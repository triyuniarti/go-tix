$(document).ready(function(){
	var navbar = $('.navbar');
	var navH = navbar.height();
	$(window).scroll(function(){
		if($(this).scrollTop() > navH){
			navbar.addClass('is-sticky');
		}else{
			navbar.removeClass('is-sticky');
		}
	});

	// loading
	$('body').css('overflow','hidden');
	var animator = anime.timeline();
	animator	
	.add({
		targets: '#loading svg .b',
		scale: [{value: 15},{value: 1}],
		rotateZ: [{value: 360},{value: 0}],
		duration: 5000,
		offset: '-=1000',
		easing: 'easeOutExpo',
		complete: function(anim){
			if(anim.completed == true){
				$('#loading svg .a').addClass('in');
			}
		}
	})
	.add({
		targets: '#loading svg .a',
		rotate: 10,
		translateX: 50,
		duration: 800,
		offset: '-=500',
		easing: 'easeOutExpo'
	})
	.add({
		targets: '#loading svg',
		opacity: 0,
		duration: 1000,		
		easing: 'linear',
		complete: function(anim){
			if(anim.completed == true){
				$('#loading').fadeOut(800,function(){
					$('body').removeAttr('style');
					$(this).remove();
				});
			}
		}		
	})

	// Slider
	var slideIndex = 0;
	var interval = 5000;
	showSlides();
	function showSlides(){
		var slides = document.getElementsByClassName('slide-item');
		for(var i = 0;i < slides.length;i++){
			slides[i].classList.remove('active');
		}

		slideIndex++;

		if(slideIndex > slides.length){
			slideIndex = 1;
		}

		slides[slideIndex - 1].classList.add('active');
		setTimeout(showSlides,interval);
	}
	// End Slider

	// Img As Background
	$('.img-bg--js img').each(function(key,value){
		var src = $(this).attr('src');
		$(this).parent().css({
			backgroundImage: 'url('+src+')'
		})
		$(this).css('visibility','hidden');
	});
	// End Img As Background

	$('.navbar-toggle').click(function(){
		$(this).find('span').toggleClass('flaticon-menu flaticon-cancel');
		$('.sidebar-on--mobile').toggleClass('open');
		checkSidebar();
	});	
	
	function checkSidebar(){
		if($('.sidebar-on--mobile').hasClass('open')){
			$('body').css('overflow','hidden');
		}else{
			$('body').removeAttr('style');
		}
	}
	// End Sidebar on Mobile

	// Tabs Section
	var tabInit = $('.section-tab--content').attr('id');
	sectionTab(tabInit);	
	$('.nav-section--tabs > li a').click(function(){
		$('.nav-section--tabs li').removeClass('active');
		var a = $(this).attr('data-tab');
		$(this).parent().addClass('active');
		sectionTab(a);
	});
	
	function sectionTab(name){
		var section = $('.section-tab--content');
		var _name = name;		
		section.each(function(){			
			var tabname = $(this).attr('id');
			if(_name == tabname){
				$(this).addClass('section-active');
			}else{
				$(this).removeClass('section-active');
			}
		});
	}

	$('.nav-tabs-menu a').click(function(){
		var a = $(this).attr('data-tab');
		var b = $(this).attr('data-target');
		tabContent(b,a);
		$('#'+b).find('.nav-tabs-menu li').removeClass('active');
		$(this).parent().addClass('active');
	});	

	function tabContent(parent,target){
		var c = $('#'+parent);
		c.each(function(){
			var tab = $(this).find('.tab-content');
			tab.each(function(){
				var d = $(this);
				if(target == d.attr('id')){
					d.addClass('active-content');					
				}else{
					d.removeClass('active-content');
				}				
			});
		});
	}
	// End Tabs Section

});