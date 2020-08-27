$(document).ready(function () {
    // popolo dinamicamnete il container nel dom di quadrati colorati
    for(var i=0;i<36;i++){
        $('.container').append('<div class="quadrati"></div>');
    }
  $(".quadrati").click(function () {
      var square = $(this);
      $.ajax(
          {
      'url': "https://flynn.boolean.careers/exercises/api/random/int",
      'method': "GET",
      'success': function (risposta) {
          var risposta = risposta.response;
          console.log(risposta);
          if (risposta <= 5){
              square.addClass('green');
              square.append(risposta);
            }else{
            square.addClass('yellow');
            square.append(risposta);
            };
        },
      error: function () {
        alert("si e verificato un errore");
      }
    });
  });
});
