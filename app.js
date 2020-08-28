$(document).ready(function () {
  // popolo dinamicamnete il container nel dom di quadrati colorati
  for (var i = 0; i < 36; i++) {
    $(".container").append('<div class="quadrati"></div>');
  };
  // funzione 
  $(".quadrati").on("click", function () {
    var square = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (risposta) {
        var risposta = risposta.response;
        square.text(risposta);
        if (risposta <= 5) {
          square.addClass("yellow");
          } else {
          square.addClass("green");
          }
        square.off('click');
      },
      error: function () {
        alert("si e verificato un errore");
      },
    });
  });
  // refresh tavola 
  $('.button').click(function(){
    location.reload();
  });
});
