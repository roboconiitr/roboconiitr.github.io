
function showQview(n){
	document.getElementsByClassName("qview")[n].style.display="flex";
	$(".container").fadeTo(500,0.1);
	var i=0;
	document.getElementsByClassName("qview")[n].style.zIndex=999; 
	document.getElementsByClassName("qview")[n].style.transform="scale(1)";
	document.getElementsByClassName("qview")[n].style.opacity=1;
	document.getElementsByClassName("qview")[n].style.filter="brightness(1)";
}

function hideQview(n){
	var i=0;
	document.getElementsByClassName("qview")[n].style.transform="scale(2)";
	document.getElementsByClassName("qview")[n].style.opacity=0.4;
	$(".container").fadeTo(500,1);
	var delay=50; 
	setTimeout(function() {
			document.getElementsByClassName("qview")[n].style.display="none";

	}, delay);	    
}


function electronic(){
		$(".libnav").slideToggle(500);
		document.getElementsByClassName("electronics")[0].style.visibility="visible";
		document.getElementsByClassName("electronics")[0].style.transform="scale(1)";
		document.getElementsByClassName("programming")[0].style.transform="scale(0)";
		document.getElementsByClassName("mechanical")[0].style.transform="scale(0)";
	setTimeout(function() {
			document.getElementsByClassName("programming")[0].style.visibility="hidden";
			document.getElementsByClassName("mechanical")[0].style.visibility="hidden";
	}, 500);
}

function mech(){
	$(".libnav").slideToggle(500);
	document.getElementsByClassName("mechanical")[0].style.visibility="visible";
	document.getElementsByClassName("mechanical")[0].style.transform="scale(1)";
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
	document.getElementsByClassName("mechanical")[0].style.transform="scale(0)";
	setTimeout(function() {
			document.getElementsByClassName("electronics")[0].style.visibility="hidden";
			document.getElementsByClassName("mechanical")[0].style.visibility="hidden";
	}, 500);
}

function showhidenav(){
	$(".libnav").slideToggle(500);
}
ids=location.hash.slice(1);
console.log(ids);
document.getElementsByClassName(ids)[0].style.visibility="visible";
document.getElementsByClassName(ids)[0].style.transform="scale(1)";


