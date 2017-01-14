function showrobocon(n){
	var a=document.getElementsByClassName('npage')[0];
	$(".Robocon"+n+"").slideToggle(500);
	console.log(a.style.display);
	if(a.style.display=='flex'|| a.style.display==''){
		$(".npage").css("display","none");
	}
	else{
		$(".npage").css("display","flex");
	}
}