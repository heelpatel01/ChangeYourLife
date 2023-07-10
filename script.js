const btn=document.querySelector('.clickMe');
const quote=document.querySelector('.quote');

const random=Math.floor(Math.random()*5);

btn.addEventListener('click',()=>
{
    
    fetch('data.json').then((res)=>res.json()).then((data)=>{
        const random=Math.floor(Math.random()*(data.length));
        console.log(random)
        quote.innerHTML=data[random].quote;
    }).catch((err)=>quote.innerHTML=err);
})

