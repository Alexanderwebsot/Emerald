$(document).ready(function () {
  
  $('.massage-slider').on('init', function(event, slick){
    AOS.init();
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.massage-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 8000,
    prevArrow: $('.massage-arrow_left'),
    nextArrow: $('.massage-arrow_right'),
    adaptiveHeight: true
   });

  $('.header-btn').on('click', function() {
    $('.modal-window-2').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.contacts-btn').on('click', function() {
    $('.modal-window-1').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('dark-window-active');
  })
})