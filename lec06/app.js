class Person {


    name;
    age;
    district;

    constructor(name, age, district) {

        this.name = name;
        this.age = age;
        this.district = district;

    }

    walk() {
        console.log(`${this.name}  is walking`)


    }

    run() {
        console.log(`${this.name}  is running`)
    }

}


let aman = new Person('aman', 221, 'ptanhi')
let aj = new Person('gb_roader', 222, 'gb_road')

console.log(aman,aj)