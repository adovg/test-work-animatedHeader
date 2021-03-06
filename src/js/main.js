
var height = $(".hero__content").height();
var width = $(".hero__content").width();

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;
var windowInnerHeight = document.documentElement.clientHeight;
var windowInnerWidth = document.documentElement.clientWidth;


$(window).bind('mousewheel DOMMouseScroll', function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

    // scroll up
    $(".hero__content").width(width -= 60);
    $(".hero__content").height(height -= 60);
    if (height <= 450) {
      $(".header").show();
      $(".menu__container").show();
      $(".hero__content").width(width = 450);
      $(".hero__content").height(height = 450);
      $(".navigation").hide();
      $(".about").hide();
      // width = 450;
    }

  }
  else {

    // scroll down
    $(".hero__content").width(width += 60);
    $(".hero__content").height(height += 60);
    if (height >= windowInnerHeight) {
      $(".header").hide();
      $(".menu__container").hide();
      $(".navigation").show();
      $(".about").show();
    }

  }
});




let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3 //coef start animation

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('-active');
      } else if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('-active');
      }
    }
  };

  /////get offset func 

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  //animOnScroll();
  setTimeout(() => { animOnScroll() }, 300);
};


$(".hero__arrow").on("click", function () {

  $([document.documentElement, document.body]).animate({
    scrollTop: $("#scroll-anchor").offset().top
  }, 1000);

});


