let nav = document.querySelector("#navArea");
let btn = document.querySelector(".button");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");

    // HEllo!! Ivan!! Here!
    // After btn.clicked, #navArea will come open and the screen become white, but after c
    // lick the 特徴 or 価格　or 問い合わせ, I want this white backgroud close. But I don't know...
    
    
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


let contact = document.querySelector('#contact')






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

// Swiper JS
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    direction: 'horizontal',
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 2000,
    effect: "slide",
    touchStartPreventDefault: false,
    passiveListeners: true,
    breakpoints: {
        600: {
            slidesPerView: 2.5,
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





