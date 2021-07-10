const panels = document.querySelectorAll('.panel')
panels.forEach(elm=>{
    elm.addEventListener('click',()=>{
        removeActiveClass();
        elm.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(elm=>{
        elm.classList.remove('active');
    })
}

const butt = document.getElementById("clear")
butt.addEventListener('click',()=>removeActiveClass())

