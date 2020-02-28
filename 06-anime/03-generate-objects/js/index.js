let numberOfRects = 10

for (let i = 0; i < numberOfRects; i += 1) {
  let rect = document.createElement('div')
  rect.style.width = `${anime.random(0,500)}px`
  rect.style.height = `${anime.random(0,500)}px`
  rect.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  rect.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  document.body.append(rect)
}
