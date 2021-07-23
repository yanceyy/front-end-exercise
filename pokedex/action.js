const cards = document.querySelector(".cards");
const displayNum = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

function getPokeNameType(i) {
  const urlJson = "https://pokeapi.co/api/v2/pokemon/" + i;
  fetch(urlJson)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      CreatePokeCard(res.name, i, res.types[0].type.name);
    });
}


for (let i = 1; i <= displayNum; i++) {
  getPokeNameType(i);
}

function CreatePokeCard(name, id, type) {
  const card = document.createElement("div");
  const idDisplay = id.toString().padStart(3, '0')
  card.style.backgroundColor = colors[type];
  card.className = "card";
  card.innerHTML = `<image src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"></image>
    <p>#${idDisplay}</p>
    <h3>${name}</h3>
    <h4>Type: ${type}</h4>`;
  cards.appendChild(card);
}

