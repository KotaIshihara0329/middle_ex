// Swiper JS
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 25,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 2000,
    effect: "slide",
    touchStartPreventDefault: false,
    passiveListeners: false,
    breakpoints: {
        500: {
            slidesPerView: 2.3,
            spaceBetween: 36
        },
        700: {
            slidesPerView: 2.6,
            spaceBetween: 36
        },
        1000: {
            slidesPerView: 3.7,
            spaceBetween: 56
        }
    },
});

swiper.on('click', function (){
    swiper.slideToClickedSlide(swiper.clickedIndex);
});








let nav = document.querySelector("#navArea");
let btn = document.querySelector(".button");
let mask = document.querySelector("#mask");
let btn2 = document.querySelector(".buttonclose");
let btn3 = document.querySelector(".buttonclose2");
let btn4 = document.querySelector(".buttonclose3");


btn.onclick = () => {
        nav.classList.toggle("open");    

   
    
};


btn2.onclick = () => {
    nav.classList.toggle("open");
};
btn3.onclick = () => {
    nav.classList.toggle("open");
};
btn4.onclick = () => {
    nav.classList.toggle("open");
};




let contact = document.querySelector('#contact')

//$(".button").click(function()){
//    $(".open nav").css("right", "0");
//}
//$(".button2").click(function(){
//    $(".open nav").css("right", "-500rem");
//})




$(function(){

    $('a[href^="#"]').click(function(){
        // 移動先を50px上にずらす
        var adjust = 94;
        // スクロールの速度
        var speed = 500; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整
        var position = target.offset().top - adjust;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;

    });


    // ドロワーメニュー作成

    $('.question').click(function(){
        var $answer = $(this).find('.faq__answer');

        if($answer.hasClass('ouvre')) {
            $answer.removeClass('ouvre');
            $answer.slideUp();

        } else {
            $answer.addClass('ouvre');
            $answer.slideDown();
        }

    });



    $('#contact').submit(function (event) {
        var formData = $('#contact').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdUQ64MthR8Lya8NEdDhOD5ADXGTbWdSC8Vq5uF9g2mWWK2Eg/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".contact__btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

});



