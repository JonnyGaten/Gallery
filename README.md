# Required files
* slick.css
* slick-lightbox.css
* slick.js (unminified - amended some code)
* slick-lightbox.js

# How to use
Simply add the CSS and JS files to your project. You must have the basic (Bootstrap, jQuery etc) on your project for this to work.


## In your HTML/PHP file
Set up your slider, the below is a WP PHP method using ACF. Look at http://kenwheeler.github.io/slick/ for help on how to do this with raw HTML.

```
<div id="gallery">

  <?php

  if( have_rows('gallery') ):

    while ( have_rows('gallery') ) : the_row();?>

      <div class="item"><img src="<?php the_sub_field('gallery_image');?>"></div>

    <?php endwhile;

  else :

  endif;

  ?>

</div>
```   
## In your main JS file
Initialize your sliders. Options for this can be found at http://kenwheeler.github.io/slick/
```
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
```
Then you will need to set up the slick Lightbox JS. For help visit https://github.com/mreq/slick-lightbox. Do this via the below:
```
$('#gallery').slickLightbox({

  src: 'src',
  itemSelector: '.item img'

});
```

# Notice
The slick.js file is unminified. This is because amends had to be made. The amends allow 2 rows of slider to become 1 on mobile.


# Styling
I've added the styling for the slick dots, arrows etc. This is all editable in style.css.  This will be in SASS soon.
