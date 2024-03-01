const button1 = document.querySelector("#btnStart");
const button2 = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const luck = document.querySelector(".luck")

const fortune = [
	"A vida trará coisas boas se tiver paciência.",
	"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
	"Não compense na ira o que lhe falta na razão.",
	"Se alguém está já cansado que não possa te dar um sorriso, deixa-lhe o teu.",
	"Defeitos e virtudes são apenas dois lados da mesma moeda.",
	"A maior de todas as torres começa no solo.",
	"Não há que ser forte. Há que ser flexível.",
	"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
	"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
	"A juventude não é uma época da vida, é um estado de espírito."
]
let randomNumber = getRandomNumber()

button1.addEventListener('click', handleGetFortune)
button2.addEventListener('click', handleRestart)

function handleGetFortune() {
	const luck = document.querySelector(".luck")
	luck.innerHTML = getFortune()
	randomNumber = getRandomNumber()
	toggleScreen()
}
function handleRestart() {
	
	luck.innerHTML = ""
	toggleScreen()
}
function getRandomNumber() {
	return Math.round(Math.random() * 10)
}
function getFortune() {
	return fortune[randomNumber]
}

function toggleScreen() {
	screen1.classList.toggle("hide")
	screen2.classList.toggle("hide")
}
