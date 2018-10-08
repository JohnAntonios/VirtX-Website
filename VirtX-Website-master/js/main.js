$(document).ready(function() {
    // Members carousel.
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 10,
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
});

