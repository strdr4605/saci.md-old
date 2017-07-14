$(document ).ready(function() {

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop()

    $('.poster').css({
      'transform': 'translate(0px, ' + wScroll / 1.5 + 'px)'
    })

    $('.slogan').css({
      'transform': 'translate(0px, ' + wScroll / 2.3 + 'px)'
    })
  })

  $('#products figure').each(function (i) {
    setTimeout(function () {
      $('#products figure').eq(i).addClass('is-showing')
    }, 150 * (i + 1))
  })

})
