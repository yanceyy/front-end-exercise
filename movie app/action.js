const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const BASE_IMG="https://image.tmdb.org/t/p/w1280"
const query = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="

class renderMovies{
    constructor(){
        this.container = document.querySelector(".container")
        this.input = document.querySelector('input')
        this.input.onkeydown= (e)=>{
            e =e||window.e
            if(e.keyCode===13){
                let value = e.target.value
                if(value.trim().length>0){
                    this.container.innerHTML=""
                    this.render(query+value.trim())
                }
            }
        }
            
    }

    /*
    get suitable color for Score
    */

    getcolor=(score)=>{
        score = Math.floor(score);
        switch(score){
            case 9:
            case 8:
                return 'green'
            case 7:
            case 6:
                return 'orange'
            default:
                return 'red'
        }
    }

    /*
    generate the element for each movie
    */
    generateitem=(title,deatil,score,img_url)=>{
        const singleMovie = document.createElement('div')
        singleMovie.className = "single-movie"
        singleMovie.innerHTML=` <img loading="lazy" alt=${title} src="${BASE_IMG+img_url}" class="poster"></img>
        <div class="description">
            <h3 class="title">${title}</h3>
            <div class="score" style="color:${this.getcolor(score)}">${score}</div>
        </div>
        <div class="detail">
          <h6>Overview</h6>
          <p>${deatil}</p>
        </div>`
        return singleMovie
    }

    /*
    add elemnt to container class
     */
    render=async(apiUrl)=>{
        const movies = await axios.get(apiUrl)
        if(movies.status === 200){
            for(let item of movies.data.results){
                const singleMovie = this.generateitem(item.original_title,
                    item.overview,item.vote_average,item.poster_path)
                this.container.appendChild(singleMovie)
            }
        }else{
            alert("couldn't featch data from API")
        }
    }
}


(new renderMovies).render(API_URL)