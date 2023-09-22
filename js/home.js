$(function() {

    var currentURL = window.location.pathname;

    // Find all <a> elements within the menu and loop through them
    $('.artical-cate li a').each(function () {
        // Check if their href attributes match the current URL
        if ($(this).attr('href') === currentURL) {
            // If there's a match, add the "on" class to the parent <li> element
            $(this).parent().addClass('on');
        }
    });


    function animateBar($item, noAni) {
        var spanLeft = $item.find('span').offset().left;
        var conLeft = $item.parent().offset().left;
        var left = spanLeft - conLeft;
        var width = $item.find('span').width() + 8;

        if (noAni) {
            $('#cateBar').css({
                left: left,
                width: width
            });
        } else {
            $('#cateBar').stop().animate({
                left: left,
                width: width
            }, 300);
        }
    }

    var waitForFinalEvent = (function() {
        var timers = {};
        return function(callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    $('.artical-cate li').mouseenter(function() {
        animateBar($(this));
    }).mouseleave(function() {
        animateBar($('.artical-cate .on'));
    });

    $(window).resize(function(e) {
        waitForFinalEvent(function() {
            animateBar($('.artical-cate .on'));
        });
    });
    animateBar($('.artical-cate .on'), true);
});
