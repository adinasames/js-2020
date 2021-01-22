let bubbles = [60, 59, 48, 71, 53, 47, 64, 45, 51, 70]

let fruits = ["mere", "pere", "mango", "castravete", "ananas"]

console.log(bubbles.sort())
max = bubbles.pop()

fruits.sort()
fruits.reverse()

bubbles[0]
fruits[2]



console.log(max)
console.log(fruits)


for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}


for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}

fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
});

for (const fruit in fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}


let colors = ["red" , "orange" , "green"]

// adauga la sfarsit
colors.push("blue")

// elimina la inceput
colors.shift("red")

// adauga la inceput
colors.unshift("red")

// taie si/sau inlocuieste
colors.splice(1, 0, "blue")

// adauga intr-un nou array
let newColors = colors.concat(["magenta", "yellow"])





let numbers = [1, 2, 3]

// aduna
numbers.map(num => num + 1)

// acelasi lucru cu functia scrisa:
// numbers.map (function(num) { return num +1 })

let names = ["anca", "valentina", "dragos", "catalin"]

names.map(name => name.toUpperCase())

// uppercase pe prima litera = A + nca 
names.map(name => name.charAt(0).toupperCase() + name.slice(1))




function capitalize(string) {return string.charAt(0).toupperCase() + string.slice(1) }

names.map(name => capitalize(name))




numbers.filter(num => num < 2 )

// impar 
numbers.filter(num => num % 2)

// par 
numbers.filter(num => num % 2 == 2)

// letters slipt 
"catalin".split("")


letters.join("")
letters.join("-")


// filtru pe ultima litera din array 
names.filter(name => name.split("").pop() === "a")



function lastLetter(string1) {return spring1.split("").pop() === "a" }

names.filter(name => lastLetter(name) === "a")



names.filter(name => lastLetter(name) === "a").map(name => capitalize(name))


// false 
names.every(name => lastLetter.Letter(name === "a"))

// true 
names.some(name => lastLetter.Letter(name === "a"))

// true or false 
names.includes("dragos")

// verifica daca exista numar international 
let phones = ["0754244085", "+40766200200", "+10722300300"]

phones.some(phone => phone.charAt(0) === "+" && phone.charAt(1,2) !== "40")
// sau 
phones.some(phone => phone.charAt(0) === "+" && phone.slice(1, 3) !== "40")

