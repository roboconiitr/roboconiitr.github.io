document.getElementById("open-btn").addEventListener('click',function openNav(){
	document.getElementById("navbar").style.width = "10%";
	document.getElementById("main").style.marginLeft = "10%";
	document.getElementById("main").style.backgroundColor="rgba(0,0,0,0.9)";
	document.getElementById("head-img").style.position = "relative";
});


document.getElementById("close-btn").addEventListener('click',function closeNav(){
	document.getElementById("navbar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.backgroundColor="transparent";
	document.getElementById("head-img").style.position ="static";
});