var numberOfBubbles = 50
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble()
}

function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    // bubble.style.borderColor = "rgb(" + red + "," + green + "," + bule +")"    
    bubble.style.borderColor = `rgb(${red}, ${green}, ${blue})`
    let x = randomNumber(100)
    let delay = randomNumber(7000)
    // bubble.style.left = x + "vw"  
    bubble.style.left = `${x}vw`
    bubble.style.animationDelay = `${delay}ms`
    let size = randomNumber(3) + 0.5
    bubble.style.height = bubble.style.width = `${size}em`
    document.querySelector("body").appendChild(bubble)
}

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

// let text = "acesta \"este un text\npe mai multe linii"

// let text 2 = `acesta "este un text
// pe mai multe linii`


