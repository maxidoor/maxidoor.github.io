//footer
let maxScroll = $(document).height() - $(window).height();
$(window).scroll(function(event){
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