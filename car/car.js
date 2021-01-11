let dacia = {
    make: "Dacia",
    model: "1310",
    year: 1978,
    color: "green",
    mileage: 525737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,
    paint(color) {
        this.color = color
    },
    move(distance) {
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
        this.batteryCharge -= consumption 
        this.mileage += distance
        }
    },
    recharge(){
        this.batteryCharge = this.batteryCapacity
    },
    distanceToEmpty() {
       return 100 * this.batteryCharge / this.averageConsumption
    }
}

dacia.paint("galben")
dacia.move(100)
console.log(Math.round(dacia.distanceToEmpty()))
dacia.move(100)
console.log(dacia.distanceToEmpty())
console.log(dacia)