$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("active");
    $(".nav-list").toggleClass("active");
    $(".header-nav,.overlay").fadeToggle(300);
    $("body").toggleClass("overflow");
  });
  if ($(window).width() <= 991) {
    $(".nav-list a").on("click", function (e) {
      $(".menu-btn").removeClass("active");
      $(".nav-list").removeClass("active");
      $(".header-nav,.overlay").fadeOut(300);
      $("body").removeClass("overflow");
    });
  }
  /************************************ Fixed Header ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
  /************************************ Services Sliders ************************************/
  var services_1Swiper = new Swiper(".services-slider.services-1 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".services-slider.services-1 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-slider.services-1 .swiper-btn-next",
      prevEl: ".services-slider.services-1 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var services_2Swiper = new Swiper(".services-slider.services-2 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".services-slider.services-2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-slider.services-2 .swiper-btn-next",
      prevEl: ".services-slider.services-2 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var services_3Swiper = new Swiper(".services-slider.services-3 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".services-slider.services-3 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-slider.services-3 .swiper-btn-next",
      prevEl: ".services-slider.services-3 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Products Sliders ************************************/
  var products_1Swiper = new Swiper(".products-slider.products-1 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider.products-1 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-slider.products-1 .swiper-btn-next",
      prevEl: ".products-slider.products-1 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var products_2Swiper = new Swiper(".products-slider.products-2 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider.products-2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-slider.products-2 .swiper-btn-next",
      prevEl: ".products-slider.products-2 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var products_3Swiper = new Swiper(".products-slider.products-3 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider.products-3 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-slider.products-3 .swiper-btn-next",
      prevEl: ".products-slider.products-3 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var products_4Swiper = new Swiper(".products-slider.products-4 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider.products-4 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-slider.products-4 .swiper-btn-next",
      prevEl: ".products-slider.products-4 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var products_5Swiper = new Swiper(".products-slider.products-5 .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider.products-5 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-slider.products-5 .swiper-btn-next",
      prevEl: ".products-slider.products-5 .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Partners Slider ************************************/
  var partnersSwiper = new Swiper(".partners-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partners-slider .swiper-btn-next",
      prevEl: ".partners-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Projects Slider ************************************/
  var projectsSwiper = new Swiper(".projects-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-slider .swiper-btn-next",
      prevEl: ".projects-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Clients Slider ************************************/
  var clientsSwiper = new Swiper(".clients-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".clients-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients-slider .swiper-btn-next",
      prevEl: ".clients-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Testimonials Sliders ************************************/
  var testimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-section .swiper-btn-next",
      prevEl: ".testimonials-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Scroll Arrows ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".scroll-btn").on("click", function (e) {
    $(document).off("scroll");

    var target = "#about";
    menu = target;
    $target = $(target);
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      500,
      "swing"
    );
  });

  /************************************ Scroll Arrows ************************************/
  $(".more-information-btn").click(function (e) {
    var text = $(this)
      .parents(".information-section")
      .find(".information-paragraph p");
    var height = text.prop("scrollHeight");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      text.css("display", "block").height(height);
    } else {
      text.height(148);
    }
  });
});
