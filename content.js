let count = 80;
function checkad() {
	count++
	if(count>100){
		console.log("it is working")
		count = 0;
	}
	
	if(document.querySelector("div.ad-showing")!=null){
		console.log("ad is showing");
		document.getElementsByTagName("video")[0].playbackRate = 16;
		document.getElementsByTagName("video")[0].muted=true
        	try {
                	document.querySelector('.ytp-skip-ad-button').click();
        	} catch (error) {
                
        	}
	}

}
setInterval(checkad, 100);
