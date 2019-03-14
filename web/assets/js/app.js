$(function() {
  $('#burger').on('click', function() {
    $('#side-menu').toggleClass('side-menu--closed');
    $('body').toggleClass('sidenav--closed');
  })
})
