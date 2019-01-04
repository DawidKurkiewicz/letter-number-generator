const button = document.createElement("button")
button.innerHTML = "random"
document.body.appendChild(button)
const text = document.createElement("div")
document.body.appendChild(text)
const btn = document.querySelector("button")
const div = document.querySelector("div")
const numbers = ['1', '2', '3', '4', '5', '6', '7']
const generator = () => {
const index = Math.floor(Math.random() * 7)
div.innerHTML = `a ${numbers[index]}`
}
btn.addEventListener("click", generator)