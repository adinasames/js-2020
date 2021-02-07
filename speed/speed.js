let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)


function startGame() {
    startButton.classList.add("hidden")
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


function 