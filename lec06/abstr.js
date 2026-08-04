class Car{

    start(){

        this.#injectfuel();
        this.#engine();

        setTimeout(()=>{
            console.log('car started successfully')

        },2000)

    }

    #injectfuel(){
        setTimeout(()=>{

            console.log("fuel is injected successfully...")
        },1000)

    }

    #engine(){
        setTimeout(()=>{

            console.log("engine is started...")
        },1500)
    }
}

let bmw=new Car();

bmw.start()