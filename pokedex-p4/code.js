const divConteiner = document.getElementById('div-Conteiner')
let codes = []
const min = 1
const max = 905
const value = 6

function getRandomCodes(min, max, value){
    let code, i = 1, j = -1
    while (i <= value){
        code = Math.floor(Math.random() * (max - min + 1) + min)
        while(j < codes.length ){
            if(code == codes[j]) break
            else {codes.push(code) ;i++; j++}
        }
    }

}
function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        createPokemon(data)
      })
  }

  function createPokemon(pokemon) {
    const fondCard = document.createElement("div");
    fondCard.classList.add("fond-Card");
  
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-Conteiner");
  
    fondCard.appendChild(cardContainer);
  
    const card = document.createElement("div");
    card.classList.add("pokemon-Card");
  
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-Conteiner");
  
    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
  
    imgContainer.appendChild(image);
  
    const number = document.createElement("p");
    number.classList.add("pokemon-Number");
    number.innerHTML = `#${pokemon.id.toString().padStart(3, 0)}`;
  
    const name = document.createElement("p");
    name.classList.add("pokemon-Name");
    name.innerHTML = pokemon.name;
  
    card.appendChild(imgContainer);
    card.appendChild(number);
    card.appendChild(name);
  
    cardContainer.appendChild(card);
    divConteiner.appendChild(cardContainer)
  }

  function start(){
    getRandomCodes(min, max, value)

    for (i = 0; i < codes.length; i++){
        getPokemon(codes[i])
    }

  }

window.addEventListener('load', start)
console.log(codes)