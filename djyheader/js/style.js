'use strict';

$(function () {
  $('.big').hover(function () {
    $(this).find('.des').css("display", "block");
    //$(this).find('.des').slideDown();
  }, function () {
    $(this).find('.des').css("display", "none");
    //  $(this).find('.des').slideUp();
  });
});