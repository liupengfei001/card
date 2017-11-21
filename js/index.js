$(document).ready(function(){
            autoPlayMusic();
            audioAutoPlay();
        });
        function audioAutoPlay() {
            var audio = document.getElementById('audio');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        }
        function autoPlayMusic() {
            function musicInBrowserHandler() {
                musicPlay(true);
                document.body.removeEventListener('touchstart', musicInBrowserHandler);
            }
            document.body.addEventListener('touchstart', musicInBrowserHandler);
            function musicInWeixinHandler() {
                musicPlay(true);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    musicPlay(true);
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        function musicPlay(isPlay) {
            var media = document.querySelector('#audio');
            if (isPlay && media.paused) {
                media.play();
            }
            if (!isPlay && !media.paused) {
                media.pause();
            }
        }
        var mySwiper = new Swiper ('.swiper-container', {
			direction: "vertical",
			loop:true,
			onInit: function(swiper){
				swiperAnimateCache(swiper);  
				swiperAnimate(swiper); 
			}, 
			onSlideChangeEnd: function(swiper){ 
				swiperAnimate(swiper); 
			} 
		})
        $('.music').click(function(){
        	var media = $('#audio')[0];
         	$('.music').toggleClass("active");
         	if (media.paused) {
                media.play();
            }else{
            	media.pause();
            }
        },false)