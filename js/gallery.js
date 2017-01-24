function showme(n){
	document.getElementsByClassName('nav')[0].style.visibility="hidden";
	var x=document.getElementsByClassName("gallery")[n];
	x.style.visibility="visible";
	x.style.transform="translateX(0)";
	document.getElementsByClassName('navpage')[0].style.maxHeight="100vh";
}

function closeme(n){
	document.getElementsByClassName('nav')[0].style.visibility="visible";
	var x=document.getElementsByClassName("gallery")[n];
	document.getElementsByClassName('navpage')[0].style.maxHeight="none";
	x.style.transform="translateX(100%)";
	x.style.visibility="hidden";
}

function maximage(ele){
	var a=document.getElementsByClassName("viewimage")[0];
	a.src=ele.src;
	$(".fullimage").slideToggle(300,function(){});
}

function closefs(){
	$(".fullimage").slideToggle(300,function(){});
}

function preimg(a){
	var a=document.getElementsByClassName("viewimage")[0];	
	var b=document.getElementsByClassName('back');
	var i=0;
	for (i=0;i<b.length;i++){
		if(b[i].src==a.src){
			if (i>0) {
				var p=i-1;
				a.src=b[p].src;
				console.log(p);
				break;
			}	
			else{
				alert("Sorry you are on the first picture ... so can't go back...");
				break;
			}
		}
	} 
}

function nxtimg(a){
	var a=document.getElementsByClassName("viewimage")[0];	
	var b=document.getElementsByClassName('back');
	var i=0;
	for (i=0;i<b.length;i++){
		if(b[i].src==a.src){
			if (i<b.length-1) {
				var p=i+1;
				a.src=b[p].src;
				console.log(p);
				break;
			}
			else{
				alert("Sorry You have reached the end of the gallery :: ");
				break;
			}	
		}
	} 
}