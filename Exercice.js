function rectHeight(){
  var heightPx = $('#rectangle').css('height');
  heightRect = heightPx.split('p').shift();
  var height = parseInt(heightRect);
  if (heightRect < 100){
    height += 10;
    $('#rectangle').css('height',(height+'px'));
  } else{
    height = 10;
    $('#rectangle').css('height',(height+'px'));
  }
}

$('#greenButton').click(function(){
  $('#rectangle').removeClass('bg-primary').addClass('bg-success');z
});

$('#hideButton').click(function(){
  $('#rectangle').hide();
});

$('#showButton').click(function(){
  $('#rectangle').show();
});

$('#resetButton').click(function(){
  location.reload();
});

$('#heightButton').click(function(){
  rectHeight();
});
