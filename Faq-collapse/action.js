const btns = document.querySelectorAll('.fas');

btns.forEach(btn=>{
    btn.onclick = (event)=>{
        event = event || window.event;
        event.target.parentNode.classList.toggle('active')
        event.target.classList.toggle('fa-times-circle')
        event.target.classList.toggle('fa-angle-down')
    }
})