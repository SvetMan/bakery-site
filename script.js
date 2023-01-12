"use strict";
$(document).ready(function() {
    $(".nav").on("click", "a", function(event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

          $('body,html').animate({ scrollTop: top }, 700);
    });
});
