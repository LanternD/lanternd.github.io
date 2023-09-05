function tocGenerator(container) {

    function initHeading() {
        var h2 = [];
        var h3 = [];
        var h2index = 0;

        $.each($('.entry h2, .entry h3'), function(index, item) {
            if (item.tagName.toLowerCase() == 'h2') {
                var h2item = {};
                h2item.name = $(item).text();
                h2item.id = $(item).attr('id');

                h2.push(h2item);
                h2index++;
            } else {
                var h3item = {};
                h3item.name = $(item).text();
                h3item.id = $(item).attr('id');

                if (!h3[h2index - 1]) {
                    h3[h2index - 1] = [];
                }
                h3[h2index - 1].push(h3item);
            }
        });
        return {
            h2: h2,
            h3: h3
        };
    }

    function genTmpl() {
        var h1txt = $('h1').text();
        var tmpl = '<ul><li class="h1" id="toc-title"><a href="#' + h1txt + ' "data-dismiss="modal">' + h1txt + '</a></li>';

        var heading = initHeading();

        var h2 = heading.h2;
        var h3 = heading.h3;

        for (var i = 0; i < h2.length; i++) {
            tmpl += '<li class="toc-h2"><a href="#' + h2[i].id + '"data-dismiss="modal" data-id="' + h2[i].id + '">⌬ ' + h2[i].name + '</a></li>';

            if (h3[i]) {
                for (var j = 0; j < h3[i].length; j++) {
                    tmpl += '<li class="toc-h3"><a href="#' + h3[i][j].id + '"data-dismiss="modal" data-id="' + h3[i][j].id + '"> ↪ ' + h3[i][j].name + '</a></li>';
                }
            }
        }
        tmpl += '</ul>';

        return tmpl;
    }

    (function genIndex() {
        var tmpl = genTmpl();

        if ($(container).has('#top-toc-table').length > 0) {
            return;
        } else {
            var indexCon = '<div id="top-toc-table" class="top-nav"></div>';

            $(container).append(indexCon);

            $('#top-toc-table')
                .append($(tmpl))
                .delegate('a', 'click', function(e) {
                    e.preventDefault();
                    $('#myNavbar').removeClass('in');
                    var selector = $(this).attr('data-id') ? '#' + $(this).attr('data-id') : 'h1';
                    var scrollNum = $(selector).offset().top;
                    var narrow_screen = $(this).width() < 1025 ? true : false;
                    if (narrow_screen) {
                        v_offset = 60;
                    } else {
                        v_offset = 30;
                    }

                    $('body, html').animate({
                        scrollTop: scrollNum - v_offset
                    }, 400, 'swing');
                });
        }
    })();

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

}
