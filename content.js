function checkad() {
        let ad=false;
        try {
               ad=document.querySelector("div.ad-showing"); 
                ad= true;
        } catch (error) {
                ad=false;
        }
        if (ad) {
        //Ad is active as a video 
        document.getElementsByTagName("video")[0].playbackRate = 16;
        try {
                document.querySelector('.ytp-skip-ad-button').click();
        } catch (error) {
                
        }
     } 
}
setInterval(checkad, 100);
