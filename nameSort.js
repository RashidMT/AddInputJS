let list = document.querySelector('.list1')
let newName = document.querySelector('.newname')
let newAge = document.querySelector('.newage')
let newScore = document.querySelector('.newscore')
let addBtn = document.querySelector('.addBtn')

let database = [
{name: "shohruh", age: "22", score: "75", time: "19.40"},
{name: "nodir", age: "22", score: "75", time: "20.00"},
{name: "Lola", age: "22", score: "75", time: "20.02"},
{name: "John", age: "22", score: "75", time: "20.20"},
{name: "Mary", age: "22", score: "75", time: "20.30"}
]

function renderer (data) {
	list.innerHTML = null

	for (let n of data) {
	let item = document.createElement('li')
	let name = document.createElement('p')
	let age = document.createElement('div')
	let score = document.createElement('span')
	let newTime = document.createElement('time')
	let button = document.createElement('button')


	item.classList.add('item')
	name.textContent = n.name
	age.textContent = n.age
	score.textContent = n.score	
	newTime.textContent = n.time
	button.textContent = "delete"

	item.appendChild(name)
	item.appendChild(age)
	item.appendChild(score)
	item.appendChild(newTime)
	item.appendChild(button)

	list.prepend(item)
	

	button.addEventListener('click', (event) => {
		item.remove()
	})
	}
}

renderer(database)

addBtn.addEventListener('click', (event) => {
	if (newName.value !== "" && newAge.value !== "" && newScore.value !== "") {
		let name = newName.value
		let age = newAge.value
		let score = newScore.value
		let date = new Date()
		let newTime = date.getHours() + ":" +  date.getMinutes()
		let newData = {name, age, score, time:newTime}
		database.push(newData)
		renderer(database)
	}
})