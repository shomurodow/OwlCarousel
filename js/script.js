const owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 30,
  items: 4,
  loop: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    440: {
      items: 2,
      margin: 20,
    },
    769: {
      items: 3,
      margin: 20,
    },
    990: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 39) {
    owl.trigger("next.owl.carousel");
  } else if (event.keyCode === 37) {
    owl.trigger("prev.owl.carousel");
  }
});
