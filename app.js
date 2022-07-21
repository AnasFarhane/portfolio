

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
        video.find("video").attr("src", "./img/" + $(this).attr("id") + ".mp4")
        video.fadeIn('slow')
        return false;
    })

});
