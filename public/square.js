$(document).ready(function() {
 
// grab the select elements' container.
// 'form' will do nicely in this case
var count=0;
var prices=0;

$('form').
  // `on` lets us specify 3 things:
  // the event we are watching for ('change'),
  // the element we are watching on ('select'), and
  // the function to call when our the element changes (our anonymous function, here)
  on('change', 'select', function(){
    $('form').append($('form').find('div').first().html());

    $("#drink_image").append('<img height= "83" width="83" src=/' +
        $('option:selected', this).attr('value') + '.jpg />'
      );

    count+=1;
    $('#drinks').text(count);

    prices += parseInt($('option:selected', this).attr('data-price'));

    var total=Math.round(prices)/100;
    total=total.toFixed(2);
    $('#cost').text('$' + total);


  });
  
  

  $('#submit').click(function(){
    $.post('/shop', $('form').serialize(), function(){
      $("#checkout_message").html("Thanks! Will be ready in 10 minutes.");
    });
    $(this).fadeOut(1000);
  });

});


