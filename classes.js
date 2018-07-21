class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = null
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color

}}
class Motorcycle extends Automobile {
    constructor(make, model, year){
        super(2)
        this.make = make;
        this.year = year;
        this.model = model;
    }
}

let harly = new Motorcycle("HarlyD", 1008, 2016)

class Sedan extends Automobile{
    constructor(make, model, year, door){
        super(4)
        this.make = make;
        this.model = model;
        this.year = year;
        this.door = 4;
    }
}

let Camry = new Sedan("Toyora", "Camry", 2005)
// console.log(Camry)



// var corolla = new Toyota("Toyota", "Corolla", 2000)
// // console.log(corolla.wheels)


// class Sedan extends Automobile(make, model, year){
//     constructor(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.doors = 4
// } }
// Sedan.prototype = new Automobile(4)

// function Camry(){

// }

// Camry.prototype = new Sedan("Toyota", "Camry", 9999)
// let Camry = new Camry()
// console.log(Camry.wheels, Camry.doors)
