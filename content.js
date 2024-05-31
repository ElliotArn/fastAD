function checkad() {
        let ad=false;
        try {
               ad=document.querySelector("div.ad-showing"); 
        } catch (error) {
                ad=false;
        }
        if (ad) {
        //Ad is active as a video 
        document.getElementsByTagName("video")[0].playbackRate = 100;
        try {
                document.querySelector('.ytp-skip-ad-button').click();
        } catch (error) {
                
        }
     } 
}
setInterval(checkad, 100);
