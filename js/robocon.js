

/*function to show each year robocon page*/
function showrobocon(n){
	var a=document.getElementsByClassName('navpage')[0];
	$(".Robocon"+n+"").slideToggle(500);
	$(".nav").fadeToggle(400); 
	setTimeout(function(){
	if(a.style.maxHeight=='none'|| a.style.maxHeight==''){
		$(".navpage").css("max-height","100vh");
	}
	else{
		$(".navpage").css("max-height","none");
	}
},0);
}

