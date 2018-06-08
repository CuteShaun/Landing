$(document).ready(function() {
  var closemenu = $(".navigation_link").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке

    $(".");
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function() {
  $(".navigation__link").on("click", function() {
    $(".navigation__checkbox").prop("checked", false);

    var id = $(this).attr("href");

    top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 150000);

    divLocation = $("#myDiv").offset();
  });
});
