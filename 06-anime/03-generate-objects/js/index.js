let numberOfRects = 5

for (let i = 0; i < numberOfRects; i += 1) {
  let div = document.createElement('div')

  if (anime.random(0,100) % 2 === 0) {
    let size = `${anime.random(0,500)}px`
    div.style.width = size
    div.style.height = size
    div.style.borderRadius = '100%'
  } else {
    div.style.width = `${anime.random(0,500)}px`
    div.style.height = `${anime.random(0,500)}px`
  }

  div.style.background = getRGBcolor()
  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  div.onmouseenter = function(e) {
    let elStyle = e.target.style
    let elWidthNum = Number(elStyle.width.slice(0,-2))
    let elHeightNum = Number(elStyle.height.slice(0,-2))

    if (elWidthNum === elHeightNum) {
      let size = `${anime.random(0,500)}px`
      elStyle.width = size
      elStyle.height = size
    } else {
      elStyle.width = `${anime.random(0,500)}px`
      elStyle.height = `${anime.random(0,500)}px`
    }

    elStyle.background = getRGBcolor()
    elStyle.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }

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

let wordsNum = 20
for (let i=0; i<wordsNum; i++) {
  let p = document.createElement('p')
  let word = Math.random().toString(36).slice(-10)

  word.split('').forEach(letter => {
    let span = document.createElement('span')
    span.innerText = letter
    span.style.fontFamily = fonts[anime.random(0,10)]
    span.style.fontSize = `${anime.random(0,5)}vw`
    span.style.color = getRGBcolor()
    p.append(span)
  })

  p.style.transform = `translate(${anime.random(0,80)}vw,${anime.random(0,80)}vh) rotate(${anime.random(0,360)}deg)`

  document.body.append(p)
}

function getRGBcolor() {
  return `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}







//
