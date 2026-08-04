class Car{

    ///public view

    price;
    color;
    model_no;
    company;
    speed;

    constructor(company){
        this.company=company;
    }

    // display(speed,year){
    //     this.speed=speed;
    //     this.year=year;
    // }

    // display(price,color,model){
    //   this.price= price;
    // this.color=color;
    // this.model_no=model;

    // }

    start(){
        console.log('Car is Starting..');
    }
    stop(){
        console.log('Car is stopping..');
    }
}
//////implemented via encapsulation........
// let bmw=new Car(40000,'red',323);

// let audi=new Car(132000,'grey',3345)


// console.log(bmw)
// console.log(audi)



///implemented via polymorphism;

let tata=new Car('Tata-Motors');
let rolls=new Car(200,2019)
let maybach=new Car(40000,'black',435)

console.log(tata,rolls,maybach)
