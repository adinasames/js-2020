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