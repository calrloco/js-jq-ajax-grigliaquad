$(document).ready(function () {
    // popolo dinamicamnete il container nel dom di quadrati colorati
    for(var i=0;i<36;i++){
        $('.container').append('<div class="quadrati"></div>');
    }
  $(".quadrati").click(function () {
      $.ajax(
          {
      'url': "https://flynn.boolean.careers/exercises/api/random/int",
      'method': "GET",
      'succes': function (risposta) {
        console.log(risposta);
      },
      error: function () {
        alert("si e verificato un errore");
      },
    });
  });
});
