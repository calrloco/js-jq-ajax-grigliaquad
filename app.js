$(document).ready(function () {
  // popolo dinamicamnete il container nel dom di quadrati colorati
  for (var i = 0; i < 36; i++) {
    $(".container").append('<div class="quadrati"></div>');
  }
  $(".quadrati").on("click", function () {
    var square = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (risposta) {
        var risposta = risposta.response;
        console.log(risposta);
        if (risposta <= 5) {
          square.addClass("green");
          square.append(risposta);
          square.unbind('click');
        } else {
          square.addClass("yellow");
          square.append(risposta);
          square.unbind('click');
        }
      },
      error: function () {
        alert("si e verificato un errore");
      },
    });
  });
  $('.button').click(function(){
     init();
  });
  function init() {
    var quadrati = $(".quadrati");
    quadrati.removeClass("yellow");
    quadrati.removeClass("green");
    quadrati.text('');
    location.reload();
  };
});
