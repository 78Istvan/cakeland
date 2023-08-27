$(".slider_container").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider_nav",
});
$(".slider_nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider_container",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
