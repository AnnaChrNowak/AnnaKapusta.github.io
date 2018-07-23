// Variables

var button = '<a class="btn btn-warning btn-xs go-codepen" href="link" target="_blank" role="button">Go To C<i class="fab fa-codepen"></i>DEPEN </a>'

var mySpinner = ' <!--Spinner-->\n' +
    '  <div class="my-spin">\n' +
    '    <div class="lds-css ng-scope">\n' +
    '  <div class="lds-eclipse spin">\n' +
    '    <div class="inside-spin"></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '  </div>';


// Collapse Header
$('.port-item').click(function() {
  $('.collapse').collapse('hide');
});


// Toggle Pictures
$(document).on('click', '[data-toggle="lightbox"]', function(e) {
  var linkToCodepen = $(this).attr('link-to-codepen');
  e.preventDefault();
  $(this).ekkoLightbox();
  $('.ekko-lightbox-container').prepend(button.replace('link', linkToCodepen));

})


// Validation Contact
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateName(name) {

    if (name !== ""){
      return true;
    }else{
      return false;
    }
}

function validateText(text) {

    if (text !== ""){
      return true;
    }else{
      return false;
    }
}

function validate() {
  var email = $('.input-email').val();
  var name = $('.input-name').val();
  var text = $('.input-text').val();
  var $sendButton = $('.send-button');

  if (validateEmail(email) && validateName(name) && validateText(text)){
    $sendButton.removeClass('disabled');
    $sendButton.attr('type', 'submit');
  } else {
    $sendButton.addClass('disabled');
    $sendButton.attr('type', "");
  }
}

$(".input-email").keyup(validate);
$(".input-name").keyup(validate);
$(".input-text").keyup(validate);


// Send Email
window.onload = function() {

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      $('body').prepend(mySpinner);

      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('anna_kapusta95_gmail_com', 'contact_form', this, 'user_cyV4qnGxkgpQ1s2Hr9M1F')
      .then(function(response) {
       $('.my-spin').remove();
       $('#myModal').modal('show');
       $(".input-name").val("");
       $(".input-email").val("");
       $(".input-text").val("");
       $(".send-button").addClass('disabled');

    }, function(error) {
       $('.my-spin').remove();
       $('#myError').modal('show');
    });
  });
};

