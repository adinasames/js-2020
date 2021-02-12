let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)


function startGame() {
    startButton.classList.add("hidden")
    let interval = 1000
    setInterval(createNewLetter, interval);
}



function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

// cod ascii aleatoriu intre 65 si 90
function randomLetter() {
    let randomCode = 65 + randomNumber(25)
    //convertim codul ascii in caracterul asociat 
    return String.fromChartCode(randomCode)
}


function randomColor() {
    let red = randomNumber(255)
    let green = randomNumber (255)
    let blue = randomNumber (255)

    return `rgb(${red},${green},${blue})`
}


function randomPosition() {
    let position = randomNumber(90)
    return `${position}%`
}

function createNewLetter() {
    let letter = randomLetter
    let color = randomColor
    let top = randomPosition
    let right = randomPosition
    let div = document.createElement("div")
    div.classList.add("letter")
    // setam textul din interiorul div-ului (litera aleatorie)
    div.innerText = letter
    div.style.backgroundColor = color
    div.style.top = top
    div.style.right = right
    // setam o clasa cu valoarea literei aleatorii
    div.classList.add("letter")
    //adaugam elementul div in body
    document.querySelector("body").appendChild(div)
}

