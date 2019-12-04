$(document).ready(function (){

  $('.btn-call,.btn-call-mobile').click(function() {

    var html = `<div id="call-modal" class="modal">
                  <div class="call-modal-msg"></div>
                  <form class="form-block" action="#" method="post">
                    <label class="form-block__label" for="itemName">Имя *</label>
                    <input class="form-block__input" id="itemName" type="text" name="itemName" placeholder="Имя" required>
                    <label class="form-block__label" for="itemPhone">Телефон *</label>
                    <input class="form-block__input" id="itemPhone" type="number" name="itemPhone" placeholder="Номер телефона, только цифры!" required>
                    <input class="form-block__submit btn-submit" type="submit" value="Отправить">
                  </form>
                </div>`;
                
   $(html).appendTo('body').modal({
     escapeClose: false,
     clickClose: false,
     fadeDuration: 300
   });
   
   $('form').submit(function() {      
     $.post(
       'https://echo.htmlacademy.ru',
       $('form').serialize(),
       function() {
          $('form').remove();
          $('.call-modal-msg').html('<h4>Спасибо!</h4><p>Ваш запрос отправлен!<br>Ожидайте звонка в течение 10 минут!</p>');     
       }
     );
     return false;
   });
   
  });
  
  $('.btn-more').click(function() {

    var html = `<div id="order-modal" class="modal">
                  <div class="order-modal-msg"></div>
                  <form class="form-block">
                    <label class="form-block__label" for="itemName">Имя *</label>
                    <input class="form-block__input" id="itemName" type="text" name="itemName" placeholder="Имя" required>
                    <label class="form-block__label" for="itemPhone">Телефон *</label>
                    <input class="form-block__input" id="itemPhone" type="number" name="itemPhone" placeholder="Номер телефона, только цифры!" required>
                    <label class="form-block__label" for="itemEmail">Email *</label>
                    <input class="form-block__input" id="itemEmail" type="email" name="itemEmail" placeholder="email@email.ru" required>
                    <input class="form-block__submit btn-submit" type="submit" value="Отправить">
                  </form>
                </div>`;
                
    $(html).appendTo('body').modal({
      escapeClose: false,
      clickClose: false,
      fadeDuration: 300
    });
    
    $('form').submit(function() {      
      $.post(
        'https://echo.htmlacademy.ru',
        $('form').serialize(),
        function() {
          $('form').remove();
          $('.order-modal-msg').html('<h4>Спасибо!</h4><p>Ваш запрос отправлен!<br>Ожидайте ответа в течение 10 минут!</p>');     
        }
      );
      return false;
   });
      
  });   
   
});
  