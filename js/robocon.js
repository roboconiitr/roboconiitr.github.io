function showrobocon(n){
	var a=document.getElementsByClassName('navpage')[0];
	$(".Robocon"+n+"").slideToggle(500);
	console.log(a.style.display); 
	setTimeout(function(){
	if(a.style.maxHeight=='none'|| a.style.maxHeight==''){
		$(".navpage").css("max-height","100vh");

	}
	else{
		$(".navpage").css("max-height","none");
	}
},600);
}