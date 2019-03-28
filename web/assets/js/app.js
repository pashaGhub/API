$(function() {
  $('#burger').on('click', function() {
    $('#side-menu').toggleClass('side-menu--closed');
    $('body').toggleClass('sidenav--closed');

  })

  let basename = $('#side-menu').find('li.active span').text();
  $('#basename')
  .text(basename)
  .attr('href', `/${basename.toLowerCase()}.html`);

  $('#activities').on('click', function() {
    $('#activities-menu').toggleClass('activities-menu--active');
  })


})
