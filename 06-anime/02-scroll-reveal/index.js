let controller = new ScrollMagic.Controller()

// EXAMPLE 1
let box1 = document.querySelector('#box-1')
let box1Animation = anime({
  targets: box1,
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})
// triggerHook:
//   'onEnter' (1), 'onCenter' (0.5), 'onLeave' (0)
//   или числом от 1 до 0
new ScrollMagic.Scene({
  triggerElement: box1
})
.addTo(controller)
.on('enter', () => box1Animation.play())

// EXAMPLE 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80vw',
  rotate: '+=5turn',
  easing: 'linear',
  autoplay: false
})
let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', e => {
  box2Animation.seek(box2Animation.duration * e.progress)
})






//
