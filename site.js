 baguetteBox.run('.gallery');
$('.mobile_menu_click').click(function(){ 
    $('.menu__category').removeClass("choose");
    $('.menu__category').toggleClass("open");
 });
 $('.menu__category').click(function(){
    $('.menu__category').addClass("choose");
    $('.menu__category').removeClass("open");
});


