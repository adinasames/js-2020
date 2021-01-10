let dacia = {
    make: "Dacia",
    model: "1310",
    year: 1978,
    color: "green",
    mileage: 525737,
    maxSpeed: 180,
    paint: function(color) {
        this.color = color
    }

}

dacia.paint("galben")

console.log(dacia)