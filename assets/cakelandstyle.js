$(".slider_container").slick({
  dots: true,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  speed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closFullImg() {
  fullImgBox.style.display = "none";
}
