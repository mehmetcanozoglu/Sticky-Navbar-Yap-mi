let nav = document.querySelector('.nav')

let add = 100;

window.addEventListener('scroll', ()=>{
  if(window.scrollY > nav.offsetHeight + add){
    nav.classList.add('move')
  }else{
    nav.classList.remove('move')
  }
})