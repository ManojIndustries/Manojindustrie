const click = document.querySelector('#click')
const comname = document.querySelector('#comname')

click.addEventListener('click',()=>{
    comname.classList.toggle('vibrate-1')
})