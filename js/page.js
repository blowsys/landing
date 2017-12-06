
$(document).ready(function(e) {
    $('#test').scrollToFixed({display: 'block'});
    $('.res-nav_click').click(function(){
        if ($('.main-nav').hasClass('opened')) {
            $('.main-nav').removeClass('opened').slideUp();
        } else {
            $('.main-nav').addClass('opened').slideDown();
        }
        return false
    });

});
/*====================================================*/
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100
    }
);
wow.init();
/*====================================================*/
$(window).load(function(){


    $('.main-nav li a, header a, .knowMore, .footer-logo a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 102
        }, 1500,'easeInOutExpo');
        event.preventDefault();
        if ($('.main-nav').hasClass('opened')) {
            $('.main-nav').removeClass('opened').slideUp();
        }
    });

});
/*====================================================*/

$(window).load(function(){


    var $container = $('.portfolioContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;


    $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });

    $(window).smartresize(function(){
        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width( columns * colW )
                .isotope('reLayout');
        }

    }).smartresize(); // trigger resize to set container width
    $('.portfolioFilter a').click(filterStack);
    setTimeout( clickRight(), 100 );

    function clickRight() {
        $('.portfolioFilter a.current').trigger('click');
    };

    function filterStack(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({

            filter: selector,
        });
        return false;
    }

});