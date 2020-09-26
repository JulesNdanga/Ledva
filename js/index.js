$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

//ferme le modale lorsqu'on click dessus
$('.fermer').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
});