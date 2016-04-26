$(function() {
    $('.bxslider').bxSlider({
        pager: false,
    });
});


$(function() {
    var $bxcontrols = $('.bx-controls-direction');

    $('.bx-wrapper').on("mouseenter", function(){
        $bxcontrols.addClass('bx-active');
    })
        .on("mouseleave", function(){
            $bxcontrols.removeClass('bx-active');
        });
});


$(function() {
    var $tab = $('.tab-item');

    $tab.on('click', function() {
        var attr = $(this).attr('data-index');
        $tab.removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.content').css('display','none');
        $('.content[data-index = '+attr+']').css('display','block');
    });
})