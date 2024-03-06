class SwebsCar {
    constructor(EngineStarted, Model, Color, Speedometer) {
        this.EngineStarted = false;
        this.Model = Model;
        this.color = Color;
        this.Speedometer = 0;
    }

    startEngine() {
        this.EngineStarted = true;
        console.log("The Engine is on");
    }

    move() {
        if (this.EngineStarted == true) {
            this.Speedometer = this.Speedometer + 10;
            return `Speed is ${this.Speedometer}km`;
        }
        else {
            return "Turn on the Car";
        }
    }

    brake(){
        this.Speedometer = this.Speedometer--;
        return `Speed Reduced, Speedometer is ${this.Speedometer}km`;
    }

    OffEngine(){
    this.EngineStarted = false;
    console.log("The Engine is off")
}
}

const cathCar = new SwebsCar();
console.log(cathCar.startEngine());
console.log(cathCar.move());
console.log(cathCar.brake());
console.log(cathCar.OffEngine());