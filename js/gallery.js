/*Js function to show gallery pages on click*/
function showme(n){
	document.getElementsByClassName('nav')[0].style.visibility="hidden";
	var x=document.getElementsByClassName("gallery")[n];
	x.style.visibility="visible";
	x.style.transform="translateX(0)";
	document.getElementsByClassName('navpage')[0].style.maxHeight="100vh";
}

/*Function to close the opened gallery page on closebutton click*/
function closeme(n){
	document.getElementsByClassName('nav')[0].style.visibility="visible";
	var x=document.getElementsByClassName("gallery")[n];
	document.getElementsByClassName('navpage')[0].style.maxHeight="none";
	x.style.transform="translateX(100%)";
	x.style.visibility="hidden";
}

/*show the full image on click in the gallery page*/
function maximage(ele){
	var a=document.getElementsByClassName("viewimage")[0];
	a.src=ele.src;
	$(".fullimage").slideToggle(300,function(){});
}
/*Close the opened full image on close button click*/
function closefs(){
	$(".fullimage").slideToggle(300,function(){});
}

/*viewing previous image*/
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
/*view nxt image on forward click*/
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