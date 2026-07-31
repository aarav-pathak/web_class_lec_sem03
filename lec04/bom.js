let h1=document.body.querySelector('h1');
let btn=document.body.querySelector('button')

h1.addEventListener('click',()=>{
        window.alert('mausisiga*nd')
        window.confirm('all good bitch')

        let name=window.prompt('write your name')

        h1.innerText=name;
        
    })

btn.addEventListener('click',()=>{

    window.open('https://kaizen-mirai.vercel.app/', '_blank')   
})
