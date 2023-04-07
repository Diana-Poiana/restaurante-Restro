$(function () {

  //menu a navigation scroll

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  //slick sliders

  $('.hero__presentation-photos').slick({
    prevArrow: '<button type="button" class="hero__slick hero__slick-prev"><span class="sr-only">desplazarse hacia atrás</span><svg width="76" height="32"><use xlink: href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="hero__slick hero__slick-next"><span class="sr-only">desplazarse hacia adelante</span><svg width="76" height="32"><use xlink: href="images/sprite.svg#arrow-right"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',

    responsive: [{
      breakpoint: 1201,
      settings: {
        prevArrow: '<button type="button" class="hero__slick hero__slick-prev"><span class="sr-only">desplazarse hacia atrás</span><svg width="76" height="32"><use xlink: href="images/sprite.svg#angle-left"></use></svg></button>',
        nextArrow: '<button type="button" class="hero__slick hero__slick-next"><span class="sr-only">desplazarse hacia adelante</span><svg width="76" height="32"><use xlink: href="images/sprite.svg#angle-right"></use></svg></button>',
      }
    },

    {
      breakpoint: 769,
      settings: {
        prevArrow: '<button type="button" class="hero__slick hero__slick-prev"><span class="sr-only">desplazarse hacia atrás</span><svg width="22" height="17"><use xlink: href="images/sprite.svg#angle-left"></use></svg></button>',
        nextArrow: '<button type="button" class="hero__slick hero__slick-next"><span class="sr-only">desplazarse hacia adelante</span><svg width="22" height="17"><use xlink: href="images/sprite.svg#angle-right"></use></svg></button>',
        autoplay: false,
      }
    },

    ]
  });

  $('.customer-review__list').slick({
    prevArrow: '<button type="button" class="customer-review__slick customer-review__slick-prev"><span class="sr-only">desplazarse hacia atrás</span></button>',
    nextArrow: '<button type="button" class="customer-review__slick customer-review__slick-next active"><span class="sr-only">desplazarse hacia adelante</span></button>',
  });

  //hero-slider active button

  $('.hero__slick').on('click', function () {

    $('.hero__slick').removeClass('active');
    $(this).addClass('active');

  });

  //review-slider active button

  $('.customer-review__slick').on('click', function () {

    $('.customer-review__slick').removeClass('active');
    $(this).addClass('active');

  });

  //menu btn

  $('.menu__nav-button, .mobile-menu__link, .menu__nav-link').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  });

});

//menu header move on scroll

window.onscroll = function () {
  if ($(this).scrollTop() >= '40') {
    $('.menu').addClass('scroll');
  } else {
    $('.menu').removeClass('scroll');
  }
};






