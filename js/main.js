$(document).ready(function() {
    var tweenTime = 4;

    svgFallBacks();
    hidePreloader();

    // Menu elevator animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 30
                }, 700);
                return false;
            }
        }
    });

    function svgFallBacks() {
        if (Modernizr && !Modernizr.svg) {
            $("img[src$='.svg']")
              .attr("src", $(this).data("fallback") );
        }
    }

    function hidePreloader() {
        var tl = new TimelineMax({
            paused: !0
        });
        tl.set('.preloader', {
            opacity: '1'
        }).addLabel('first').to('.preloader', .6, {
            delay: 1,
            opacity: '0',
            zIndex: '-1',
            ease: 'Power3.easeInOut'
        }).to('.circle-pulse', .5, {
            opacity: 0,
            ease: 'Power3.easeInOut'
        }, '+=.5').to('.preloader__progress span', 1, {
            width: '100%',
            ease: 'Power3.easeInOut'
        }, 'first+=.5');
        tl.duration(tweenTime).play();
        return tl
    }
});
