const pokeNum = document.getElementById("pokemonNum");
const pokemon = document.getElementById("pokemon");
const pokePic = document.getElementById("pokePic");
const newPokeBtn = document.getElementById("newPokeButton");

async function getPokemon() {
  // Random number for finding random pokemon
  let randomPokemon = Math.floor(Math.random() * 100);

  // Poke API
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  if (!response.ok) {
    test.textContent = "Couldn't fetch pokemon data!";
    return;
  }
  // Getting poke data
  const data = await response.json();
  console.log(data);

  // Using random number to get data about random pokemon
  pokemon.textContent = data.results[randomPokemon].name;
  let pokeApi = data.results[randomPokemon].url;

  // Getting random pokemons data
  const pokeResponse = await fetch(pokeApi);
  if (!pokeResponse.ok) {
    console.log("Can't find pokemons API");
    return;
  }

  const pokeData = await pokeResponse.json();
  console.log(pokeData);
  // Adding pokemons index
  pokeNum.textContent = `No. ${pokeData.order}`;

  // Getting url for random pokemons pic
  let pokePicUrl = pokeData.sprites.front_default;

  console.log(pokePicUrl);
  // Adding pic to DOM
  pokePic.style.backgroundImage = `url(${pokePicUrl})`;
  pokePic.style.backgroundSize = "cover";
}

getPokemon();
newPokeBtn.addEventListener("click", getPokemon);
