function showme(n){
	document.getElementsByClassName('nav')[0].style.visibility="hidden";
	var x=document.getElementsByClassName("gal10")[n];
	x.style.visibility="visible";
	x.style.transform="translateX(0)";
	document.getElementsByClassName('navpage')[0].style.maxHeight="100vh";
	//var y=document.getElementsByClassName("npage")[0];
	//setTimeout(function(){y.style.display="none";},500);

}

function closeme(n){
	document.getElementsByClassName('nav')[0].style.visibility="visible";
	var x=document.getElementsByClassName("gal10")[n];
	document.getElementsByClassName('navpage')[0].style.maxHeight="none";
	//var y=document.getElementsByClassName("npage")[0];
	x.style.transform="translateX(100%)";
	//y.style.display="block";
	x.style.visibility="hidden";
}

function maximage(ele){
	var a=document.getElementsByClassName("viewimage")[0];
	//var b=document.getElementsByClassName("fullimage")[0];
	//a.style.zIndex="10";
	a.src=ele.src;
	//b.style.display="flex";
	$(".fullimage").slideToggle(300,function(){});
}

function closefs(){
	//var b=document.getElementsByClassName("fullimage")[0];
	//b.style.display="none";
	$(".fullimage").slideToggle(300,function(){});
}

function preimg(a){
	var a=document.getElementsByClassName("viewimage")[0];	
	//a.src=window.curele.parentNode.previousSibling.img.getAttribute("src");
	var b=document.getElementsByClassName('back');
	//console.log(b);
	var i=0;
	//console.log(b.length);
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
	//a.src=window.curele.parentNode.previousSibling.img.getAttribute("src");
	var b=document.getElementsByClassName('back');
	//console.log(b);
	var i=0;
	//console.log(b.length);
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