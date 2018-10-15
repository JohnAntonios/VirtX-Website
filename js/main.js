$(document).ready(function() {
    
    // Members carousel.
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    // Navbar interaction.
    $(function () {
        var lastScrollTop = 0;
        var $navbar = $('.navbar');
      
        $(window).scroll(function(event){
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            $navbar.fadeOut();
          } else {
            $navbar.fadeIn();
          }
          lastScrollTop = st;
        });
    });

    // 360 Video: Kaleidoscope.js
    (function() {
        var containerSelector = '#container360';
        this.viewer = new Kaleidoscope.Video({
            source: 'vr.mp4',
            containerId: containerSelector,
            height: window.innerHeight,
            width: window.innerWidth,
            autoplay: true,
            loop: true,

        });
        this.viewer.render();
        window.onresize = function() {
            this.viewer.setSize({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }.bind(this);
    })();
});

