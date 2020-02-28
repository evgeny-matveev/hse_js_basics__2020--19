let numberOfRects = 10

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

  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
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

    elStyle.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
    elStyle.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }

  document.body.append(div)
}









//
