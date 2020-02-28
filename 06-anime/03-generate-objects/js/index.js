let numberOfRects = 5
let wordsNum = 5

for (let i = 0; i < numberOfRects; i += 1) {
  let div = document.createElement('div')

  if (anime.random(0,1) % 2 === 0) {
    let size = `${anime.random(50,350)}px`
    div.style.width = size
    div.style.height = size
    div.style.borderRadius = '100%'
  } else {
    div.style.width = `${anime.random(50,500)}px`
    div.style.height = `${anime.random(50,500)}px`
  }

  div.style.background = getRGBcolor()
  div.style.transform = `translate(${anime.random(5,85)}vw,${anime.random(5,100)}vh) rotate(${anime.random(0,360)}deg)`

  div.onmouseenter = function(e) {
    let elStyle = e.target.style
    let elWidthNum = Number(elStyle.width.slice(0,-2))
    let elHeightNum = Number(elStyle.height.slice(0,-2))

    if (elWidthNum === elHeightNum) {
      let size = `${anime.random(50,350)}px`
      elStyle.width = size
      elStyle.height = size
    } else {
      elStyle.width = `${anime.random(50,500)}px`
      elStyle.height = `${anime.random(50,500)}px`
    }

    elStyle.background = getRGBcolor()
    elStyle.transform = `translate(${anime.random(5,85)}vw,${anime.random(5,100)}vh) rotate(${anime.random(0,360)}deg)`
  }

  setInterval(function () {
    div.style.transform = `translate(${anime.random(5,85)}vw,${anime.random(5,100)}vh) rotate(${anime.random(0,360)}deg)`
  }, 1800);

  document.body.append(div)
}

let fonts = [
  'Amatic SC',
  'Bonbon',
  'Delius Unicase',
  'Gloria Hallelujah',
  'Homemade Apple',
  'Indie Flower',
  'Mansalva',
  'Petit Formal Script',
  'Shadows Into Light',
  'Waiting for the Sunrise'
]

for (let i=0; i<wordsNum; i++) {
  let p = document.createElement('p')
  let word = Math.random().toString(36).slice(-10)

  word.split('').forEach(letter => {
    let span = document.createElement('span')
    span.style.fontFamily = fonts[anime.random(0,10)]
    span.style.fontSize = `${anime.random(3,15)}vw`
    span.style.color = getRGBcolor()
    span.innerText = letter
    setInterval(function () {
      span.style.fontSize = `${anime.random(3,15)}vw`
      span.style.color = getRGBcolor()
    }, 500);
    p.append(span)
  })

  p.style.transform = `translate(${anime.random(5,85)}vw,${anime.random(5,100)}vh) rotate(${anime.random(0,360)}deg)`

  setInterval(function () {
    p.style.transform = `translate(${anime.random(5,85)}vw,${anime.random(5,100)}vh) rotate(${anime.random(0,360)}deg)`
  }, 1500);

  document.body.append(p)
}

function getRGBcolor() {
  return `rgb(${anime.random(50,255)},${anime.random(50,255)},${anime.random(50,255)})`
}




//
