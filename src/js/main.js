import $ from "jquery"
import slick from "slick-carousel"

let slideCustomer = $(".slide-customer");

slideCustomer.slick({
  dots: true,
  arrows: false,
  infinite: false,
  // waitForAnimate: false,
  speed: 1000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
      }
    },
  ]
});

$('.slick-current .slide-customer__head').addClass('active');

$(slideCustomer).on('afterChange', function(event, slick, currentSlide) {
    
  $('.slick-slide .slide-customer__head').removeClass('active');
  $('.slick-current .slide-customer__head').addClass('active');
});