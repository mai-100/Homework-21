$(function () {
  'use strict'
   $(window).on('scroll',function() {
      var menuHeight= $('nav').height();   
      var scrollSize= $(window).scrollTop();
      
      if(scrollSize > menuHeight) {
         $('nav').addClass('animate');
      }else{
         $('nav').removeClass('animate');
      }
   })

   $('.banner_slider').slick({
      prevArrow: '<i class="fas fa-chevron-left banner_slider_icon"></i>',
      nextArrow: '<i class="fas fa-chevron-right banner_slider_icon"></i>',
      autoplay: true,
      autoplaySpeed: 1500,
      dots: true,
      dotsClass:'banner_slider_dots'
   });

   $(window).on('load', function(){
      $(".preloader").fadeOut(500)
   })

   $('.filter_container').filterizr();

   $('.gallery_content li').on('click', function() {
      $(this).addClass('active');
      $(this).siblings('.active').removeClass('active');
   })

   $('.event_timer_countdown').countdown('2022/03/26', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="event_countdown_timer"><span>%D</span> <span>%H</span> <span>%M</span> <span>%S</span></div>'
        + '<div class="event_count_down"><span>days</span><span>hr</span><span>min</span><span>sec</span></div>'));
   })

   $(window).on('scroll',function(){
      var scrollTop = $(this).scrollTop();

      if(scrollTop > 550){
         $('#backToTop').fadeIn(250)
      }else{
         $('#backToTop').fadeOut(250)
      }
   })

   $('#backToTop').on('click',function(){
      $('html, body').animate({
         scrollTop:0
      },700)
   })
})
