$(document).ready(function () {
   "use strict";


   function slideRight() {
      $("#greetings").addClass("slideY");
   }

   function slideLeft() {
      $("#header-text").addClass("slideY");
   }

   setTimeout(slideRight, 500);
   setTimeout(slideLeft, 1000);


   var scrollTrigger = 500;
   var backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
         $(".up").fadeIn("slow");
      } else {
         $(".up").fadeOut("slow");
      }
   }
   backToTop();
   $(window).on('scroll', function () {
      backToTop();
   });


   var body = $("html, body");
   $(".up").click(function (e) {
      e.preventDefault();
      body.animate({
         scrollTop: 0
      }, 500, 'swing');

   });

   // Animations
   $(window).scroll(function () {
      $(".slide-animation").each(function () {
         var pos = $(this).offset().top;

         var winTop = $(window).scrollTop();
         if (pos < winTop + 600) {
            $(this).addClass("slideY");
         }
      });
   });

   // Add smooth scrolling to all links in navbar
   $(".navbar a").on('click', function (event) {
      if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 900, function () {

            window.location.hash = hash;
         });
      }
   });

});
