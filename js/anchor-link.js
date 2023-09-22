(function () {
    // Re-assign ID to each element
    var current_h2_id = "";
    var h2index = 0;
    $('.entry h2, .entry h3').each(function (index, item) {
        if (item.tagName.toLowerCase() == 'h2') {
            var h2item = {};
            h2item.name = $(item).text();
            h2item.id = h2item.name.replace(/[\s<>#?"'&=+%\/]/g, '-').toLowerCase();
            current_h2_id = h2item.id;
            item.setAttribute("id", h2item.id);

            h2index++;
        } else {
            var h3item = {};
            h3item.name = $(item).text();
            h3item.id = current_h2_id + '-' + h3item.name.replace(/[\s<>#?"'&=+%\/]/g, '-').toLowerCase();
            item.setAttribute("id", h3item.id);
        }
    });
    $(".entry h2").addClass("page-h2");
    $(".entry h3").addClass("page-h3");

    var narrow_screen = $(window).width() < 992 ? true : false;
    console.log("Is it narrow_screen?: " + narrow_screen);

    if (!narrow_screen) {
        console.log("Generate sidebar navigation TOC");

        function initHeading() {
            var h2 = [];
            var h3 = [];
            var h2index = 0;

            $('.entry h2, .entry h3').each(function (index, item) {
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
            var tmpl = '<ul><li class="h1" id="toc-title"><a href="#' + h1txt + '">' + h1txt + '</a></li>';

            var heading = initHeading();
            var h2 = heading.h2;
            var h3 = heading.h3;
            for (var i = 0; i < h2.length; i++) {
                tmpl += '<li class="side h2" id="tocIndex"><a href="#' + h2[i].id + '" data-id="id-' + h2[i].id + '">⌬ ' + h2[i].name + '</a></li>';

                if (h3[i]) {
                    for (var j = 0; j < h3[i].length; j++) {
                        tmpl += '<li class="side h3" id="tocIndex"><a href="#' + h3[i][j].id + '" data-id="id-' + h3[i][j].id + '">↪ ' + h3[i][j].name + '</a></li>';
                    }
                }
            }
            tmpl += '</ul>';

            return tmpl;
        }

        function genIndex() {
            var tmpl = genTmpl();
            var indexCon = '<div id="menuIndex" class="sidenav"></div>';

            $('#content').append(indexCon);

            // Jump to header link when clicking on the sidebar TOC item
            $('#menuIndex').append($(tmpl)).on('click', 'a', function (e) {
                e.preventDefault();

                var selector = $(this).attr('data-id') ? $(this).attr('data-id').replace(/^id-/, '#') : 'h1';
                var verticalScrollPosition = $(selector).offset().top;

                $('body, html').animate({
                    scrollTop: verticalScrollPosition - 40
                }, 400, 'swing');
            });
        }

        var waitForFinalEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout(timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();

        if ($('.entry h2').length > 2) {
            genIndex();

            // Highlight sidebar TOC item w.r.t page offset
            $(window).on('load', function () {
                var scrollTopList = [];
                const tocIndexItems = $('#tocIndex > a');
                const anchorLinks = [];

                // Select h2 and h3 elements
                const headings = $('.entry h2, .entry h3');

                // Loop through the headings to calculate offset positions
                headings.each(function () {
                    const offset = $(this).offset().top;
                    scrollTopList.push(offset);
                });

                var sideTocTop = $('#menuIndex').offset().top;
                var sideTocLeft = $('#menuIndex').offset().left;

                $(window).on('scroll', function () {
                    waitForFinalEvent(function () {
                        var length = scrollTopList.length;
                        var index;
                        var nowTop = $(window).scrollTop();

                        if (nowTop + 60 > scrollTopList[length - 1]) {
                            index = length - 1;
                        } else {
                            for (var i = 0; i < length; i++) {
                                if (nowTop + 60 <= scrollTopList[i]) {
                                    index = i;
                                    break;
                                }
                            }
                        }
                        $('#menuIndex li').removeClass('on'); // Remove from all items
                        $('#menuIndex li').eq(index).addClass('on'); // for highlighting

                        // Keep the side TOC stick to the top edge.
                        if (nowTop + 20 > sideTocTop) {
                            $('#menuIndex').css({
                                position: 'fixed',
                                top: '20px',
                                left: sideTocLeft
                            });
                        } else {
                            $('#menuIndex').css({
                                position: 'static',
                                top: 0,
                                left: 0
                            });
                        }
                    });
                });

                $(window).on('resize', function () {
                    $('#menuIndex').css({
                        position: 'static',
                        top: 0,
                        left: 0
                    });

                    sideTocTop = $('#menuIndex').offset().top;
                    sideTocLeft = $('#menuIndex').offset().left;

                    $(window).trigger('scroll');
                    $('#menuIndex').css('max-height', $(window).height() - 80);
                });

                // Calculate screen height
                // $('#menuIndex').css('max-height', $(window).height() - 80);
            });

            // Adjust vertical position when visiting a page with an anchor link.
            window.addEventListener('DOMContentLoaded', function () {
                const hash = window.location.hash;

                if (hash) {
                    const targetId = decodeURIComponent(hash.substring(1));
                    const targetElement = document.getElementById(targetId);
                    console.log("Jump to anchor link " + targetId);

                    if (targetElement) {
                        const offset = targetElement.getBoundingClientRect().top + window.scrollY - 60;
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
    } else {
        // Narrow screen
        console.log("Processing for narrow screen.");
        $(document).ready(function () {
            console.log("Narrow screen configuration to be added.");
        });
    }
})();
