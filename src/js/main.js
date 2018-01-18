$(function () {
  'use strict';

  const $navHeader = $('.header_nav'),
    $header = $('.header'),
    headerOffset = $navHeader.offset().top,
    headerHeight = $navHeader.height();

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll >= headerOffset) {
      $navHeader.addClass('fixed-header');
      $header.css('margin-bottom', headerHeight);
    } else {
      $navHeader.removeClass('fixed-header');
      $header.css('margin-bottom', '');
    }
  });
});
