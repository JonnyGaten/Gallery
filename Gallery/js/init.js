$(document).ready(function() {
    
    $('#gallery').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        rows:2,
        dots:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows:1,
                }
            }
        ]

    });

    $('#gallery').slickLightbox({

        src: 'src',
        itemSelector: '.item img'

    });

});