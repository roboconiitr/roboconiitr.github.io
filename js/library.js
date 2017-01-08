
function showQview(n){
	document.getElementsByClassName("qview")[n].style.display="flex";
	$(".container").fadeTo(500,0.1);
	var i=0;
	document.getElementsByClassName("qview")[n].style.zIndex=999; 
	document.getElementsByClassName("qview")[n].style.transform="scale(1)";
	document.getElementsByClassName("qview")[n].style.opacity=1;
	document.getElementsByClassName("qview")[n].style.filter="brightness(1)";
	/*var ele=$(".qviewele");
	for(i=0;i<ele.length;i++){
	   ele[i].style.opacity=0;
	}*/
	//ele[n].style.opacity=0;
	/*document.getElementsByClassName("outfocus")[n].style.zIndex=99;
    document.getElementsByClassName("outfocus")[n].style.opacity=1;*/
	//ele[n].style.opacity=1;
	
	/*switch (n) {
		case 0:
			document.getElementsByClassName("qviewimgdiv")[0].style.background="#e0e1e3 url("./images/omniwheel.jpg") no-repeat";
			document.getElementsByClassName("imghead")[0].innerHTML="OMNI WHEELS";
			document.getElementsByClassName("imageinfo")[0].innerHTML="Omni wheels or poly wheels, similar to Mecanum wheels, are wheels with small discs around the circumference which are perpendicular to the rolling direction. The effect is that the wheel will roll with full force, but will also slide laterally with great ease, employed in holonomic drive systems.";
			break;
		default : 
			break;	
	}*/
}

function hideQview(n){
	var i=0;
	//document.getElementsByClassName("qview")[n].style.zIndex=-1; 
	/*var ele=$(".qviewele");
	for(i=0;i<ele.length;i++){
	   ele[i].style.opacity=0;
	}*/
	//ele[n].style.opacity=1;
	document.getElementsByClassName("qview")[n].style.transform="scale(2)";
	document.getElementsByClassName("qview")[n].style.opacity=0.4;
	/*document.getElementsByClassName("outfocus")[n].style.zIndex=-1;
    document.getElementsByClassName("outfocus")[n].style.opacity=0;*/
	$(".container").fadeTo(500,1);
	var delay=50; //1 second

	setTimeout(function() {
			document.getElementsByClassName("qview")[n].style.display="none";

	}, delay);	
	//document.getElementsByClassName("qview")[n].style.display="none";

    
}


function electronic(){
		$(".libnav").slideToggle(500);
		document.getElementsByClassName("electronics")[0].style.visibility="visible";
		document.getElementsByClassName("electronics")[0].style.transform="scale(1)";
		document.getElementsByClassName("programming")[0].style.transform="scale(0)";
		document.getElementsByClassName("machenical")[0].style.transform="scale(0)";
	setTimeout(function() {
			document.getElementsByClassName("programming")[0].style.visibility="hidden";
			document.getElementsByClassName("machenical")[0].style.visibility="hidden";
	}, 500);
}

function mech(){
	$(".libnav").slideToggle(500);
	document.getElementsByClassName("machenical")[0].style.visibility="visible";
	document.getElementsByClassName("machenical")[0].style.transform="scale(1)";
	document.getElementsByClassName("programming")[0].style.transform="scale(0)";
	document.getElementsByClassName("electronics")[0].style.transform="scale(0)";
	setTimeout(function() {
			document.getElementsByClassName("programming")[0].style.visibility="hidden";
			document.getElementsByClassName("electronics")[0].style.visibility="hidden";
	}, 500);
}

function program(){
	$(".libnav").slideToggle(500);
	document.getElementsByClassName("programming")[0].style.visibility="visible";
	document.getElementsByClassName("programming")[0].style.transform="scale(1)";
	document.getElementsByClassName("electronics")[0].style.transform="scale(0)";
	document.getElementsByClassName("machenical")[0].style.transform="scale(0)";
	setTimeout(function() {
			document.getElementsByClassName("electronics")[0].style.visibility="hidden";
			document.getElementsByClassName("machenical")[0].style.visibility="hidden";
	}, 500);
}

function showhidenav(){
	//alert("wtf");
	//document.getElementsByClassName("libnav")[0].style.visibility="visible";
	$(".libnav").slideToggle(500);
	//document.getElementsByClassName("libnav")[0].style.z-index="1000";
}
/*function hidelibnav(){
	alert("wtf");
	document.getElementsByClassName("libnav")[0].style.visibility="hidden";
	//document.getElementsByClassName("libnav")[0].style.z-index="1000";
}*/


