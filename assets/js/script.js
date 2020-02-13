document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  };

});

bulmaCarousel.attach('#carousel-rx5', {
  slidesToScroll: 1,
  slidesToShow: 4
});

function calculate() {
  var arr = $.map($('input:checkbox:checked'), function(e, i) {
    return e.value;
  });
  $('span').text('the checked values are: ' + arr.join(','));
}

calculate();
$('div').delegate('input:checkbox', 'click', calculate);

var onloadCallback = function() {
  grecaptcha.render('g-recaptcha', {
    'sitekey' : '6LeXadgUAAAAADvJBjGQAiQPc0YQEoHNVIV-qtWd'
  });
};
onloadCallback();

$('form').on('submit', function(e) {
  if(grecaptcha.getResponse() == "") {
    e.preventDefault();
    alert("You shall not pass!");
  } else {
    alert("Thank you");
  }
});