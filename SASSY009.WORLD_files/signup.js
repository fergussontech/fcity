$(document).ready( function () {
// I only have one form on the page but you can be more specific if need be.
var $form = $('form');

if ( $form.length > 0 ) {
    $('form input[type="submit"]').bind('click', function ( event ) {
        if ( event ) event.preventDefault();
        // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
        if ( true ) { register($form); }
    });
  }
});

function register($form) {
  $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
      success     : function(data) {
          if (data.result != "success") {
            let result_string = data.msg;

            if(result_string.substring(0,1) == "0"){
              result_string = result_string.substring(4, result_string.length)
            }
            $('#mce-error-response').css("display","inline-block");
            $('#error-msg').html(result_string);
              // Something went wrong, do something to notify the user. maybe alert(data.msg);
          } else {
            $('#mce-success-response').css("display","inline-block");
            $('.remove').css("display","none");
            console.log(data);
              // It worked, carry on...
          }
      }
  });
}
