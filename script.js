const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

// if navbar is already open or not
if(bar){
    bar.addEventListener('click', () =>{  // means if anyone click on bar then this thing should happen
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
    // now since we cut hence we remove the navbar
}
