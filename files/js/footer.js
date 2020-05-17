//menu handling
$('.nav-link').click(function () {
    $('.nav-link img').remove();
    $(this).append('<img class="d-none d-lg-block menu-link" width="20px" src="./files/img/icons/trojkat_stopka_gora.svg">');
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


