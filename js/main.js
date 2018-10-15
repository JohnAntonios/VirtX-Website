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

    //360 video
    (function() {
        var containerSelector = '#container360';
        this.viewer = new Kaleidoscope.Video({
            source: 'vr.mp4',
            containerId: containerSelector,
            height: window.innerHeight,
            width: window.innerWidth,
            loop: true,
            autoplay: true
        });
        this.viewer.render();
        window.onresize = function() {
            this.viewer.setSize({height: window.innerHeight, width: window.innerWidth});
        }.bind(this);
        document.querySelector(containerSelector).addEventListener('touchend', this.viewer.play.bind(this.viewer));
        document.body.addEventListener('click', function() {
            this.viewer.play();
        }.bind(this));
    })();

    // Arrow click disappear.

    $('.arrow-clicker').click(function(){
        $('.arrow-clicker').fadeOut("slow");
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);

        if (scroll < 850) {
            $('.arrow-clicker').fadeIn("slow");
        } else {
            $('.arrow-clicker').fadeOut("slow");
        }
    });
});