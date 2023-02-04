const pointer_circle = document.querySelector('.circle')

document.addEventListener('mousemove',(e)=>{
    pointer_circle.style.top = (e.clientY-26)+"px"
    pointer_circle.style.left = (e.clientX-26)+'px'
})

// Introducing rellax

