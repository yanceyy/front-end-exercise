const remained=document.querySelector(".remained")
const remainedWater = document.getElementById("ramainedWater")
const drinked=document.querySelector(".drinked")
const drinkerWater = document.getElementById("drinkerWater")
const bottles = document.querySelector(".bottles")
const NUM_BOTTLES = 8
let currentDrinkCups=0;


/* create the bottles and bind click event */
function createBottom(i){
    const bottle =  document.createElement("div")
    bottle.className = "bottle"
    bottle.innerHTML= "<p>250 ml</p>"
    bottle.addEventListener(
        'click',()=>{
            let currentClickIndex=i;
            if(currentDrinkCups===i){
                currentClickIndex=i-1;
            }

            const remainedValue = (1-currentClickIndex/8)*100+"%";
            const drinkedValue = currentClickIndex/8*100+"%";
            // change the height the two inner container
            remained.style.height = remainedValue;
            drinked.style.height =  drinkedValue;
            drinkerWater.innerText = drinkedValue;
            
            remainedWater.innerText = (2-0.25*currentClickIndex)+"L";
            
            for(let j=0;j<bottles.children.length;j++){
                bottles.children[j].classList.remove("active")
            }
            for(let j=0;j<currentClickIndex;j++){
                bottles.children[j].classList.add("active")
            }
            currentDrinkCups=currentClickIndex;}
    )
    return bottle
}

for(let i=1;i<NUM_BOTTLES+1;i++){
    bottles.appendChild(createBottom(i))
}