// 1
let secondName = "Иванов"
function logUser() {
  let name = "Иван"
  console.log(name + " " + secondName)
}
logUser()
console.log("secondName: " + secondName)
console.log("name: " + name)

// 2
function getFullName(name, secondName) {
  return `ИФ человека: ${name} ${secondName}`
}
console.log(getFullName("Марк", "Марков"))
let leoFullName = getFullName("Леонард", "Леонтьев")
console.log(leoFullName)

// 3
function sayHello(name = "stranger") {
  // if (name === undefined) {
  //   name = "stranger"
  // }
  // name = name || "stranger"
  // "Hello " + name + "!"
  alert(`Hello ${name}!`)
}
sayHello()

// 4
function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Варю ${cups} кофе с молоком...`)
  }
  return console.log(`Варю ${cups} кофе без добавок...`)
}
makeCoffee(22, true)
makeCoffee(10, false)







// EOF
