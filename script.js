// Copyright (C) 2021 Alex C
//jQuery

$(document).ready(function() {

  //Smooth scrolling
  var scrollButton = $('.shortcut');

  scrollButton.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 750);
  });

  //Header Position
  $(window).scroll(function() {
    var pageScroll = $(window).scrollTop();
    console.log(pageScroll);

    if(pageScroll >= $(window).height()) {
      $('header').css('background-color', 'black');
    } else {
      $('header').css('background-color', 'transparent');
    }
  });
});
