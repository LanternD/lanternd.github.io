$(document).ready(function() {

    // Google Code Highlight class
    $('pre').addClass('prettyprint linenums');
    $('.post-description').removeClass("prettyprint linenums");

    $.getScript('/js/prettify/prettify.js', function() {
        prettyPrint();
    });

    // Add a small icon to all the external hyperlinks.
    $('.entry a').each(function(index, element) {
        var href = $(this).attr('href');
        if (href) {
            if (href.indexOf('#') == 0) {} else if (href.indexOf('/') == 0 || href.toLowerCase().indexOf('dlyang.me') > -1) {} else if ($(element).has('img').length) {} else {
                $(this).attr('target', '_blank');
                $(this).addClass('external');
            }
        }
    });

    if (/css3-animation/.test(location.href)) {
        $("head").append("<link rel='stylesheet' type='text/css' href='/css/css3-ani.css'/>");
        $.getScript('/js/css3-ani.js', function() {});
    }

    // Get the target element
    const $targetElement = $('.pop-text');

    // Show the text from the data-tooltip attribute in the pop info box
    $targetElement.on('mouseover', function() {
        const tooltipText = $(this).data('data-tooltip');
        const $infoBox = $('<div class="info-box"></div>').text(tooltipText);
        $('body').append($infoBox);
    });

    // Hide the pop info box when the mouse moves away from the target element
    $targetElement.on('mouseout', function() {
        $('.info-box').remove();
    });

    return 0;

});
