$(function() {
  var headerOffset = $('.header_nav').offset().top;

  $(window).scroll(function() {
    var header = $('.header_nav'),
        scroll = $(window).scrollTop();

    if (scroll >= headerOffset) {
      header.addClass('fixed-header');
    } else {
      header.removeClass('fixed-header');
    }
  });
});
