$(document).on('ready', function() {
  
  if(window.innerWidth > 1024) {
    $(".variable").slick({
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true
    });
  } else {
    $(".variable").slick({
      dots: true,
      arrows: false,
      infinite: true,
      variableWidth: true
    });
  }    
  
      
  window.addEventListener('resize', function(event) {
      if(window.innerWidth > 1024) {
          console.log('>1024')
        $(".variable").slick('unslick');
        $(".variable").slick({
          dots: false,
          arrows: true,
          infinite: true,
          variableWidth: true
        });
      } else {
        $(".variable").slick('unslick');
        $(".variable").slick({
          dots: true,
          arrows: false,
          infinite: true,
          variableWidth: true
        });
      }
  });
});