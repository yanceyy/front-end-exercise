const leftSide = document.querySelector(".ps5");
const rightSide = document.querySelector(".xbox");
const container = document.querySelector(".container");

leftSide.addEventListener("mouseover",()=>{
    container.classList.add("hover-ps5");
})


leftSide.addEventListener("mouseout",()=>{
    container.classList.remove("hover-ps5")
})



rightSide.addEventListener("mouseover",()=>{
    container.classList.add("hover-xbox")
})


rightSide.addEventListener("mouseout",()=>{
    container.classList.remove("hover-xbox")
})