
var time = 3000
time = time + 1000
var message = 'Bine ai venit'
var isLate = true

setTimeout(welcome, time)

function welcome() {
    alert(message)
    alert("Welcome!")
}

if (isLate) {
    alert("Go Home")
}

if (isLate) {
    alert("Go Home")
} else {
    alert("continue")
}

