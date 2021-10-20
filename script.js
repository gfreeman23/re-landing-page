$(document).ready(function() {

  //BTT
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".btt").fadeIn();
    } else {
      $(".btt").fadeOut();
    }
  });
  $(".btt").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  //NAV - JUMP TO SECTION
  $("a[href^=\\#]").on("click", function(event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate({
        scrollTop: target.offset().top - 130
      }, 800);
    }
  });

  // READ MORE/LESS
  $(".read-more-button").click(function() {
    $(".read-more-dots, .read-more-content").toggle();
    $(this).toggleClass("active-link");
    if($(".read-more-button.active-link").is(":visible")) {
      $(".read-more-button").html("Read Less <i class='fas fa-caret-up'></i>");
    } else {
      $(".read-more-button").html("Read More <i class='fas fa-caret-down'></i>");
    }
  });
  
});
