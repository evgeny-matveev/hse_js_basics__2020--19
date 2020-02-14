let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play


let propsAnim01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnim01.play


let valsAnim01 = anime({
  targets: '.vals .triangle',
  translateX: 500,
  autoplay: false,
  easing: 'easeInOutQuint',
  delay: anime.stagger(100),
  rotate: anime.stagger([-270, 270])
})
let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnim01.play

let path = anime.path('path')
let svgMotion = anime({
  targets: '.svgAnim .triangle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  loop: true
})





//
