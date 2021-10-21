const btn=document.querySelector('#btn-menu');
const menu=document.querySelector('#menu');


    btn.addEventListener('click',()=>{
        btn.classList.toggle('btnActivate');
        menu.classList.toggle('menuActivate');
    })