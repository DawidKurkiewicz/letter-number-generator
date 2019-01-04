const button = document.createElement("button")
button.innerHTML = "random"
document.body.appendChild(button)
const text = document.createElement("div")
document.body.appendChild(text)
const btn = document.querySelector("button")
const div = document.querySelector("div")
const numbers = ['1', '2', '3', '4', '5', '6', '7']
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const generator = () => {
    const indexNum = Math.floor(Math.random() * numbers.length)
    // const indexLet = Math.floor(Math.random() * letters.length)
    // div.innerHTML = `${letters[indexLet]} ${numbers[indexNum]}`
    div.innerHTML = `${letters[Math.floor(Math.random() * letters.length)]} ${numbers[indexNum]}`
}
btn.addEventListener("click", generator)