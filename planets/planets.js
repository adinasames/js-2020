let button = document.getElementById("check")

button.addEventListener("click", function () {
    let planet = document.getElementById("redplanet")

    planet.innerText = "Alien invasion"
    planet.classList.add("alert")
    planet.classList.add("important")
})

document.getElementById("reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")

        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")
    })

// planet.style.color = "red"
// planet.style.fontWeight = "bold"
// planet.remove()


document.getElementById("greenplanet")
    .addEventListener("click", function () {
        greenplanet.classList.add("alert")
    })

    document.getElementById("reset")
    .addEventListener("click", function () {
        greenplanet.classList.remove("alert")
    })