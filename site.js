 baguetteBox.run('.gallery');

 $('.mobile-menu-click').click(function () {
     $(window).resize(function () {
         if ($(window).width() >= '814') {
             $('.menu-category').removeClass("open");
             $('#main, footer').removeClass("color-change");
             $(".one-line").removeClass("choose");
         }
     });
     $('.menu-category').removeClass("choose");
     $('.menu-category').toggleClass("open");
     $('#main, footer').toggleClass("color-change");
     $(".one-line").toggleClass("choose");
 });

 $('.menu-category').click(function () {
     $('.menu-category').addClass("choose");
     $('.menu-category').removeClass("open");
 });

 $('#main-heart').click(function () {
     $('.menu-category').removeClass("open");
 });

 $('.menu-item, #main-heart, .btn-details').click(function () {
     var id = $(this).attr('data-id');
     $('#main, footer').removeClass("color-change");
     $(".one-line").removeClass("choose");
     $('html, body').animate({
         scrollTop: ($('#' + id).offset().top - 50)
     }, 1000);
 });
