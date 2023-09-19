$(".step").click( function() {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
  $("#line-progress").css("width", "25%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
  $("#line-progress").css("width", "50%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
  $("#line-progress").css("width", "75%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
  $("#line-progress").css("width", "100%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});







// var swiper = new Swiper(".mySwiper", {
//         loop: false,
//         spaceBetween: 0,
//         slidesPerView: 5,
//         mousewheel: true,
//         //freeMode: true,
//         //watchSlidesProgress: true,
//         breakpoints: {
//           767: {
//             slidesPerView: 8,
//             spaceBetween: 20,
//           },
//           992: {
//             slidesPerView: 10,
//             spaceBetween: 40,
//           },
//           1300: {
//             slidesPerView: 15,
//             spaceBetween: 0,
//           },
//         }
//       });
//       var swiper2 = new Swiper(".mySwiper2", {
//         loop: false,
//         spaceBetween: 0, 
//         slidesPerView: 1,
//         centeredSlides: true,
//         mousewheel: true,

//         speed: 1600,
//         parallax: true,
//         breakpoints: {
//           767: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//           },
//           992: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//           },
//           1300: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//           },
//         },
//         thumbs: {
//           swiper: swiper,
//         },
//         scrollbar: {
//           el: ".swiper-scrollbar",
//         } 
//       });