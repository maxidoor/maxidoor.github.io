var GALLERY_IMGS_LOCATION = './files/img/realizacje/';

$(document).ready(function () {
    prepareGallery('suspenzo', 9);
});

function prepareGallery(name, count) {
    $('#realizacje-content .carousel-inner').empty();
    for (const element of getImages(name, count)) {
        $('<div class="carousel-item"><img class="carousel-img" src="' + element + '"></div>')
            .appendTo('#realizacje-content .carousel-inner');
    }
    $('#realizacje-content .carousel-item').first().addClass('active');
    $('#realizacje-content .carousel-indicators > li').first().addClass('active');
    $('#carouselIndicators').carousel();
}

function getImages(name, count) {
    let type = name + '/';
    let imgs = [];
    for (let i = 1; i <= count; i++) {
        imgs.push(GALLERY_IMGS_LOCATION + type + i + '.png')
    }
    return imgs;
}

$('#galler-link-1').click(function (e) {
    e.preventDefault();
    prepareGallery('suspenzo', 9);
});

$('#galler-link-2').click(function (e) {
    e.preventDefault();
    prepareGallery('tim_grey', 9);
});

$('#galler-link-3').click(function (e) {
    e.preventDefault();
    prepareGallery('wegielek', 9);
});

$('#galler-link-4').click(function (e) {
    e.preventDefault();
    prepareGallery('inne', 3);
});


// a[aria-expanded=true] .footer-button-up {
//     display: none;
//   }
//   a[aria-expanded=false] .footer-button-down {
//     display: none;
//   }

//footer
$(window).scroll(function(event){
    let scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 2600) {
        $('#collapsableFooter').collapse('show')
    }
    if (scroll < 2600 && scroll > 2500) {
        $('#collapsableFooter').collapse('hide')
    }
 });