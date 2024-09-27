$(function(){

$(".gnb>li").mouseenter(function(){
  let i = $(this).index();
  console.log(i);
  $(".gnb>li>a").addClass("on");
  $(".topwrap").addClass("on");
  $(".subbg").addClass("on");
  $(".sub").removeClass("on");
  $(this).find(".sub").addClass("on");
  $(".toplogo>img").attr("src", "images/logo_on.png");
  $(".right .login a").addClass("on");
  $(".src>a>img").attr("src", "images/icon_search_on.png");
});

$(".top").mouseleave(function(){
  $(".gnb>li>a").removeClass("on");
  $(".topwrap").removeClass("on");
  $(".subbg").removeClass("on");
  $(".sub").removeClass("on");
  $(".toplogo>img").attr("src", "images/logo_white.png");
  $(".right .login a").removeClass("on");
  $(".src>a>img").attr("src", "images/icon_search_white.png");
});

});


var swiper = new Swiper(".mySwiper", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});



