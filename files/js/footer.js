//menu handling
$('.nav-link').click(function () {
    $('.nav-link img').remove();
    $(this).append('<img class="d-none d-lg-block menu-link" width="20px" src="./files/img/icons/trojkat_stopka_gora.svg">');
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


positionPhoneContact();
$(window).resize(function () {
    positionPhoneContact();
});

function positionPhoneContact() {
    if ($(window).width() > 1600) {
        $('.sticky-contact').css('right', ($(window).width() - 1600) / 2 + 'px');
    }
    $('.sticky-contact').addClass('d-md-block');
}

//footer
let maxScroll = $(document).height() - $(window).height();
$(window).scroll(function (event) {
    let currentScroll = $(window).scrollTop();
    let scrollToHidFooter = maxScroll * 0.8;
    let scrollToOpenFooter = maxScroll * 0.95;

    if (currentScroll > scrollToOpenFooter) {
        $('#collapsableFooter').collapse('show')
    }
    if (currentScroll > scrollToHidFooter && currentScroll < scrollToOpenFooter) {
        $('#collapsableFooter').collapse('hide')
    }
});


