// var isMobile = detectMobile()
//
// $(window).resize(function () {
//   isMobile = detectMobile()
// })
//
// function detectMobile() {
//   if (window.innerWidth <= 1024) {
//     return true
//   } else {
//     return false
//   }
// }
//
//
//
//
//
// //  DOCUMENT READY
// $(document).ready(function () {
//   if ( !isMobile ) {
//     createPrlx()
//   }
// })
// // x - document ready




// CREATE PRLX EFFECT TO ALL data-depth ITEMS
function createPrlx() {
  var elm = $('*[data-depth]')

  var prlxController = new ScrollMagic.Controller()


  for (var i = 0; i < elm.length; i++) {
    var depth     = +(elm[i].getAttribute('data-depth')); //covert to integer
    var trigger   = elm[i].hasAttribute('data-trigger') ? elm[i].getAttribute('data-trigger') : elm[i].parentNode;
    var offset    = elm[i].hasAttribute('data-offset')  ?   +(elm[i].getAttribute('data-offset')) : 0;
    var duration  = elm[i].hasAttribute('data-duration')  ?   +(elm[i].getAttribute('data-duration')) : 1500;
    var dir       = elm[i].hasAttribute('data-direction')   ?   1 : -1;
    var posY      = elm[i].hasAttribute('data-posY') ? +(elm[i].getAttribute('data-posY')) : 0;

    elm[i].style.transform = 'translateY(' + posY + 'px)';

    var smItem = new ScrollMagic.Scene({
      triggerElement: trigger,
      triggerHook: 'onEnter',
      duration: duration,
      offset: offset
    }).setTween(
      TweenMax.to( elm[i], 1, {y: (1000 * depth) * dir , ease:Linear.easeNone})
    ).addTo(prlxController)
      // .addIndicators()


  }
  // x - for loop
}
// x - create ptlx effect
