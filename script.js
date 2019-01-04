const button = document.createElement("button")
button.innerHTML = "random"
document.body.appendChild(button)
const text = document.createElement("div")
document.body.appendChild(text)
const btn = document.querySelector("button")
const div = document.querySelector("div")
const generator = () => {
    let number = "";
    const numbers = "1234567890";
    while (numbers.length < 1) {
        numbers += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    let letters = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    while (letters.length < 1) {
        letters += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    const indexNum = Math.floor(Math.random() * numbers.length)
    div.innerHTML = `${letters[Math.floor(Math.random() * letters.length)]} ${numbers[indexNum]}`
}
btn.addEventListener("click", generator)

