

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



$(document).ready(function(){

    $('.btn-con').on('click', ()=>{

    })
    $('.popup-btn').on('click', function(){
        $('.video-popup').fadeIn('slow');
        return false;
    });

    $('.popup-bg').on('click', function(){
        $('.video-popup').fadeOut('slow');
        return false;
    });
    $('.ytb').on("click",function(){
        let video = $('.video-popup')
        console.log("img/" + $(this).attr("id") + ".mp4")
        video.find("video").attr("src", "img/" + $(this).attr("id") + ".mp4")
        video.fadeIn('slow')
        return false;
    })
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'a5baf667b6105d26679b423cba1e7f797869f71d', { region: 'eu' });
});
