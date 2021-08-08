class todolist {
    constructor() {
        this.input = document.querySelector(".todoInput")
        this.list = document.querySelector(".list")

        /*
         get stored items from localstorage
         if empty the set []
         */
        let items = localStorage.getItem('todos')
        this.items =[]
        if(items){
            this.items = JSON.parse(items)
        }
        this.renderList()

        /*
         enter event and add item to list
         */
        this.input.onkeydown=(event)=>{
            if(event.keyCode === 13){
                this.items.push({value:this.input.value,finished:false})
                this.input.value=""
                this.renderList()
                this.updatelocalStorage()
            }
        }
    }

    /*
    render the all list in the items to html doms
    */
    renderList=()=>{
        this.list.innerHTML=""
        this.items.forEach((element,index) => {
            this.addlist(element.value,element.finished,index)
        })
    }

    /*
    render a single item
    */
    addlist=(text,state,index)=>{
        const childLi = document.createElement("li")
        childLi.innerText = text
        childLi.addEventListener("click",(e)=>{
            e.target.classList.toggle('finished')
            this.items[index].finished = e.target.classList.contains('finished')
            this.updatelocalStorage()
        })
        // prevent defalut event of right click
        childLi.addEventListener('contextmenu', e => e.preventDefault())

        childLi.addEventListener("mousedown",e=>{
            if(e.button===2){
                this.items.splice(index,1)
                this.renderList()
                this.updatelocalStorage()
            }
        })
        
        if(state){
            childLi.classList.add('finished')
        }
        this.list.appendChild(childLi)
    }

    /*
    sync items to localstorage
    */
    updatelocalStorage= ()=>{
        localStorage.setItem('todos', JSON.stringify(this.items))
    }

}

new todolist()
