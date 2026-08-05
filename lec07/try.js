
let p={
    name:'aarav',
    dispaly:function(){
        console.log(this.name)
    }
}

let q={
    name:'rashtra',
    dispaly:function(){
        console.log(this.name)
    }
}



p.dispaly.call(q)

