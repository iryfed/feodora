$(function() {

  $('.top-menu-mobile').on('click', function () {

    $(this).children().toggleClass('top-menu-mobile__item_hide');    
    $(this).toggleClass('menu-icon-close');
    $('.top-menu').slideToggle();

    $('.top-menu__link').on('click', function () {
        $('.top-menu').hide('slow');
        $('.top-menu-mobile').removeClass('menu-icon-close');
        $('.top-menu-mobile').children().removeClass('top-menu-mobile__item_hide');
    });

  });
  
  $('.top-menu__link').on('click', function () {
    
    $('.top-menu').children().removeClass('top-menu__link_active');
    $(this).addClass('top-menu__link_active');    
    
  });
  
  window.addEventListener('resize', function(event) {
    if( window.innerWidth > 1200) {
      $('.top-menu').css('display', 'block');
    } else {
      $('.top-menu').css('display', 'none');
    }
  });

});
