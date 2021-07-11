const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight/5 * 4  /* tell the element to appear when also at the bottom of the window */
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top /* provide position relative to the viewpoint */
        if (boxTop<triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}