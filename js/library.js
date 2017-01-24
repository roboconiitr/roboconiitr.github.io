/*Show quick view info div on click on the image*/
function showQview(n){
	var qview=document.getElementsByClassName("qview")[n]
	qview.style.display="flex";
	$(".container").fadeTo(500,0.1);
	var i=0;
	qview.style.zIndex=999; 
	qview.style.transform="scale(1)";
	qview.style.opacity=1;
	qview.style.filter="brightness(1)";
}
/*Hide quick view info div on close button click*/
function hideQview(n){
	var i=0;
	var qview=document.getElementsByClassName("qview")[n]
	qview.style.transform="scale(2)";
	qview.style.opacity=0.4;
	$(".container").fadeTo(500,1);
	var delay=50; 
	setTimeout(function() {
			qview.style.display="none";

	}, delay);	    
}

/*function to open electronic library section*/
function electronic(){
		$(".libnav").slideToggle(500);
		var electronics=document.getElementsByClassName("electronics")[0];
		var programming=document.getElementsByClassName("programming")[0];
		var mechanical=document.getElementsByClassName("mechanical")[0];
		electronics.style.visibility="visible";
		electronics.style.transform="scale(1)";
		programming.style.transform="scale(0)";
		mechanical.style.transform="scale(0)";
	setTimeout(function() {
			programming[0].style.visibility="hidden";
			mechanical.style.visibility="hidden";
	}, 500);
}

/*function to open mechanical library*/
function mech(){
	$(".libnav").slideToggle(500);
	var electronics=document.getElementsByClassName("electronics")[0];
	var programming=document.getElementsByClassName("programming")[0];
	var mechanical=document.getElementsByClassName("mechanical")[0];
	mechanical.style.visibility="visible";
	mechanical.style.transform="scale(1)";
	programming.style.transform="scale(0)";
	electronics.style.transform="scale(0)";
	setTimeout(function() {
			programming.style.visibility="hidden";
			electronics.style.visibility="hidden";
	}, 500);
}

/*function to open programming library*/
function program(){
	$(".libnav").slideToggle(500);
	var electronics=document.getElementsByClassName("electronics")[0];
	var programming=document.getElementsByClassName("programming")[0];
	var mechanical=document.getElementsByClassName("mechanical")[0];
	programming.style.visibility="visible";
	programming.style.transform="scale(1)";
	electronics.style.transform="scale(0)";
	mechanical.style.transform="scale(0)";
	setTimeout(function() {
			electronics.style.visibility="hidden";
			mechanical.style.visibility="hidden";
	}, 500);
}

/*function toggle library inner navigation*/
function showhidenav(){
	$(".libnav").slideToggle(500);
}
ids=location.hash.slice(1);
console.log(ids);
document.getElementsByClassName(ids)[0].style.visibility="visible";
document.getElementsByClassName(ids)[0].style.transform="scale(1)";


