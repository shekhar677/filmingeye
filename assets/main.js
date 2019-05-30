
// smooth scroll
$("html").easeScroll();

// scroll progressbar
$('body').scrollgress({
  height: '2px',
  color: '#ff0000',
});

  // preloader js

  $(window).on('load', function(){
    $('.preloader').fadeOut();
    // AOS
    AOS.init();
    $('body').removeClass('preloader-site');
  });


// custom functions
$(document).ready(function(){

  // preloader scroll hide
  var Body = $('body');
  Body.addClass('preloader-site');

  //initialize swiper when document ready

  // Awards slider
  var mySwiper = new Swiper ('.awards-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
    spaceBetween: 20,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,

    // auto play
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // Mentions slider
  var mySwiper = new Swiper ('.mentions-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
    spaceBetween: 20,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,

    // auto play
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // Testimonial slider
  var mySwiper = new Swiper ('.testimonial-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
    spaceBetween: 20,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: false,

    // auto play
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // menu btn animation function
  $(".menu-btn").click(function(){
    // toggle active class
    $("#bar1, #bar2, #bar3").toggleClass("active");

    // check if menu has .active class
    if( $("#bar2").hasClass("active") ) {

      // set the width of bar2 when menu is active
      $("#bar2").removeAttr("width").attr("width", "45.25");

      // bring the menu-items panel when menu-btn has active class
      $(".menu-panel").css({"transform": "translateX(0%)"});
      
      // staggering effect of list items
      var duration = 140;
      $('.menu-panel li').each(function(i) {
        var $item = $(this);
        setTimeout(function() {
          $item.addClass('open-panel');
        }, duration*i);
      });

      // hide scroll progress when menu-panel is open
      $(".scrollgress").css({ "opacity": "0" });

    } else {
      // if menu doesn't have active class bring back to original condition
      $("#bar2").attr("width", "51.45");
      $(".menu-panel").css({"transform": "translateX(150%)"});
      $('.menu-panel li').each(function(i) {
        $(this).removeClass('open-panel');
      });

      // show scroll progress when menu-panel is closed
      $(".scrollgress").css({ "opacity": "1" });
    }
  });
  
  // when clicked on list items of menu-panel
  $('.menu-panel li').each(function() {
    $(this).click(function() {
      
      $("#bar2").attr("width", "51.45");
      $(".menu-panel").css({"transform": "translateX(150%)"});
      $('.menu-panel li').each(function(i) {
        $(this).removeClass('open-panel');
      });
      
      // show scroll progress when menu-panel is closed
      $(".scrollgress").css({ "opacity": "1" });
      $("#bar1, #bar2, #bar3").toggleClass("active");
    });
  });

  // scroll to function
  $('#move-to-about').on('click', function() {
    const box = $('#about').position().top;
    $('html, body').animate({
      scrollTop: box - 59
    }, 900);
  });

    $('#home-link').on('click', function() {
    const box = $('#first-div').position().top;
    $('html, body').animate({
      scrollTop: box - 59
    }, 900);
  });
  
  $('#move-to-services-section-btn').on('click', function() {
    const box = $('#services-section').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#move-to-our-works').on('click', function() {
    const box = $('#our-works').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#move-to-believe-btn').on('click', function() {
    const box = $('#believe-content').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });
      
  $('#about-link').on('click', function() {
    const box = $('#about').position().top;
    $('html, body').animate({
      scrollTop: box - 59
    }, 900);
  });
      
  $('#showreel-link').on('click', function() {
    const box = $('#showreel').position().top;
    $('html, body').animate({
      scrollTop: box - 59
    }, 900);
  });

  $('#services-link').on('click', function() {
    const box = $('#services').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#believe-link').on('click', function() {
    const box = $('#believe').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#works-link').on('click', function() {
    const box = $('#works').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#awards-link').on('click', function() {
    const box = $('#awards').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#mentions-link').on('click', function() {
    const box = $('#mentions').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#testimonial-link').on('click', function() {
    const box = $('#testimonial').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#gallery-link').on('click', function() {
    const box = $('#gallery').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });

  $('#contact-link').on('click', function() {
    const box = $('#contact').position().top;
    $('html, body').animate({
      scrollTop: box - 58
    }, 900);
  });
  
  // move to top
  $('.showHide').on('click', function() {
    const box = $('#first-div').position().top;

    $('html, body').animate({
      scrollTop: box
    }, 1500);
  });

  // show and hide the move to top button
  var p = $( ".passedMe" );
  var offset = p.offset();
  offset = offset.top;

  $(window).scroll(function () {  
    if ($(window).scrollTop()   >  offset ) {
      $('.showHide').fadeIn();
    }
    else {
      $('.showHide').fadeOut();
    }
  });


  // modal functions
    // function to open modal
    var modalBtns = [...document.querySelectorAll(".button")];
    modalBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.getAttribute('data-modal');
      document.getElementById(modal).classList.add('modal-visible');
    }
  });
  
  // function to close modal
  var closeBtns = [...document.querySelectorAll(".close")];
  closeBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.closest('.modal');
      modal.classList.remove("modal-visible");
    }
    });

    // close modal when cliked outside
    window.onclick = function(event) {
      if (event.target.classList[0] == "modal") {
        event.target.classList.remove("modal-visible");
        event.target.classList.add("modal-invisible");
      }
    }

});