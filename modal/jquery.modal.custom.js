$(document).ready(function (){

  $('.btn-call').click(function() {

    var html = `<div id="call-modal" class="modal">
                  <form class="form-block">
                    <label class="form-block__label" for="itemName">Имя *</label>
                    <input class="form-block__input" id="itemName" type="text" placeholder="Имя" required>
                    <label class="form-block__label" for="itemPhone">Телефон *</label>
                    <input class="form-block__input" id="itemPhone" type="number" placeholder="Номер телефона, только цифры!" required>
                    <input class="form-block__submit btn-submit" type="submit" value="Отправить">
                  </form>
                </div>`;
                
   $(html).appendTo('body').modal({
     escapeClose: false,
     clickClose: false,
     fadeDuration: 300
   });
   
  });
  
    $('.btn-more').click(function() {

    var html = `<div id="order-modal" class="modal">
                  <form class="form-block">
                    <label class="form-block__label" for="itemName">Имя *</label>
                    <input class="form-block__input" id="itemName" type="text" placeholder="Имя" required>
                    <label class="form-block__label" for="itemPhone">Телефон *</label>
                    <input class="form-block__input" id="itemPhone" type="number" placeholder="Номер телефона, только цифры!" required>
                    <label class="form-block__label" for="itemEmail">Email *</label>
                    <input class="form-block__input" id="itemEmail" type="email" placeholder="email@email.ru" required>
                    <input class="form-block__submit btn-submit" type="submit" value="Отправить">
                  </form>
                </div>`;
                
   $(html).appendTo('body').modal({
     escapeClose: false,
     clickClose: false,
     fadeDuration: 300
   });
   
  });
  
});
  