let controller = new ScrollMagic.Controller()

// EXAMPLE 1
let box = document.querySelector('.box')
let boxAnimation = anime({
  targets: box,
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})
// triggerHook:
//   'onEnter' (1), 'onCenter' (0.5), 'onLeave' (0)
//   или числом от 1 до 0
new ScrollMagic.Scene({
  triggerElement: box
})
.addTo(controller)
.on('enter', function() {
  boxAnimation.play()
})







//
