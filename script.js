async function remplirCarte(selecteurCarte, nomPokemon) {
  const carte = document.querySelector(selecteurCarte);
  const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomPokemon}`);
  const poke = await reponse.json();

  carte.querySelector(".card-title").textContent = poke.name;
  carte.querySelector("img").src = poke.sprites.front_default;

  const paras = carte.querySelectorAll("p");
  paras[0].textContent = `Type : ${poke.types[0].type.name}`;
  paras[1].textContent = `Poids : ${poke.weight / 10} kg`;
}

remplirCarte("#cosmic", "rayquaza");
remplirCarte("#solar", "solgaleo");
remplirCarte("#lunar", "lunala");
remplirCarte("#stellar", "dialga");