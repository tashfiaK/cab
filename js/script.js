$(document).ready(function(){
    $('.r_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
  $(document).ready(function(){
    $('.t_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
  $('.counter').counterUp();
//   jQuery(document).ready(function($) {
//         $('.counter').counterUp({
//             delay: 10,
//             time: 1500
//         })
//     })