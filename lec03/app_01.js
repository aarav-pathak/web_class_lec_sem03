let ans=document.querySelector('h1');

let i=0;



ans.addEventListener('click',()=>{

    if(!i){

    ans.style.color='red';
    ans.innerHTML='Mouse Over Event';
    i++;
    }

    else{
        ans.style.color='black';
        ans.innerHTML='Lec 03';
        i=0;
    }
})


