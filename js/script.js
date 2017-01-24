
$(document).ready(function(){


var $body = $("body");
var $preloader = $(".preloader");
var $navbar = $("#navbar");
var $main = $("#main");
var $navspan = $(".navspan");
var $header = $("header");
var $closebtn = $("#close-btn");
var $openbtn = $("#open-btn");
var $fabars = $(".fa-bars");
var $liblink = $(".lib a");
var $navbarlink = $("#navbar a");
var $up = $(".up");
var $gall = $(".gall");
var $loader = $(".loader");
var slideSpeed = 1000;
var width = 650;
var loopTime=5000;
var count = 1;
var $li = $(".slides li");
var $slides = $(".slides");
var interval;

/*closing navigation function*/
	function closeNav(){
		$navbar.css("width","0");
		$main.css("margin-left","0");
		$main.css("background","");
		$navspan.css("z-index","");
		$main.children().css("z-index","");
		$header.children().css("z-index","");
	}


/*open navigation function*/
	function openNav(){
		$navbar.css("width","15%");
		$main.css("margin-left","15%");	
		$main.css("background","rgba(0,0,0,0.9)");
		$navspan.css("z-index","-1");
		$main.children().css("z-index","-1");
		$header.children().css("z-index","-1");
	}
/*open-close nav button functions*/
	$openbtn.click(openNav);
	$closebtn.click(closeNav);
	$openbtn.mouseover(function(){
		$fabars.addClass("animated flip");
	});

	$openbtn.mouseout(function(){
		$fabars.removeClass("animated flip");
	});


/*animating scroll*/
	$navbarlink.bind("click",function(event){
		displayAll();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 999);

	   setTimeout(closeNav, 999);
	});

/*back to top function*/
	$up.click(function(){
	    $('html, body').animate({
	        scrollTop: 0
	    }, 1500);
	});

/*on scroll effects*/
	$up.hide();
	$(window).scroll(function(){
		if($(window).scrollTop()>510){
			$navspan.css("background-color","rgba(0, 0, 0, 0.8)");
			$up.slideDown(400);
		}else if($(window).scrollTop()>600){
			$gall.css("background-image","url('../img/joystick.jpg')");

		}else{
			$navspan.css("background-color","transparent");
			$up.slideUp(400);
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$(".testimonials").fadeIn(800);
		}
		if($(window).scrollTop()>1000){
			$(".robocon17").fadeIn(800);
		}
		if($(window).scrollTop()>1550){
			$(".lib_gal").fadeIn(800);
		}
		if($(window).scrollTop()>2200){
			$(".sponsors").fadeIn(800);
		}
		if($(window).scrollTop()>2800){
			$(".contact").animate({opacity: "1"},800);
		}

	});

/*preloader*/
	$body.css("overflow","hidden");
	//$(".loader").animate({bottom:"-200px"},4000);

	function offPreloader(){
		$preloader.animate({top:"-600px"},800,function(){
			$preloader.fadeOut();
			$body.css("overflow","auto");
	});
	}
	setTimeout(offPreloader,2000);



	function displayAll(){
		$(".testimonials,.robocon17,.lib_gal,.sponsors").fadeIn(800);
		$(".contact").animate({opacity: "1"},800);
	}

/*video animation*/
	$(".open_video").click(function(e){
		e.preventDefault();
		$(".video").css("transform","scale(1)");
	});
	$(".close_video").click(function(e){
		e.preventDefault();
		$(".video").css("transform","scale(0)");
	});

/*testimonial change fade loop*/
	setInterval(function(){
		$("#testi1").fadeOut(400,function(){
			$("#testi2").fadeIn(400,function(){
				$("#testi2").delay(6000).fadeOut(400,function(){
					$("#testi3").fadeIn(400,function(){
						$("#testi3").delay(6000).fadeOut(400,function(){
							$("#testi1").fadeIn().delay(6000);
						});
					});
				});
			});
		});

	},20400);

	/*small heading slide animation loop*/
	setInterval(function(){
		
		$(".smallHead1").delay(4000).animate({left:"-1000px"},800,function(){
			$(".smallHead1").hide();
			$(".smallHead2").animate({left:"0"},0);
			$(".smallHead2").fadeIn(400);
			$(".smallHead2").delay(4000).animate({left:"-1000px"},800,function(){
				$(".smallHead2").hide();
				$(".smallHead3").animate({left:"0"},0);
				$(".smallHead3").fadeIn(400);
				$(".smallHead3").delay(4000).animate({left:"-1000px"},800,function(){
					$(".smallHead3").hide();
					$(".smallHead1").animate({left:"0"},0);
					$(".smallHead1").fadeIn(400);
				});			
			});	
		});
		
	},15600);

/*gallery image slider*/
	function fSlide(){
		$slides.css("width","4000px");
		$slides.css("height","400px");
		$slides.animate({'margin-left':"-="+width},slideSpeed,function(){

			count++;
			if(count > $li.length){
				count = 1;
				$slides.animate({"margin-left":0},slideSpeed);
			}
		});
	}

 	function forward(){
 		clearInterval(interval);
		interval = setInterval(fSlide,loopTime);

	}
	forward();

});