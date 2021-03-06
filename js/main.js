window.addEventListener("keyup", (e) => { //click 'enter' on keyboard' to start fetch
    if (e.keyCode === 13) {
       e.preventDefault();
       document.querySelector("button").click();
    }
  }); 
document.querySelector('button').addEventListener('click', getFetch); //start the fetch

let newPokemon; //empty global pokemon element for manipulation

function getFetch() {
  let choice = document.querySelector('input').value.toLowerCase(); //user input

  if(choice === "giratina"){
        choice = "giratina-altered"
  }if(choice === "deoxys"){
      choice = "deoxys-normal"
  }if(choice === "shaymin"){
      choice = "shaymin-land"
  }if(choice === "basculin"){
      choice = "basculin-red-striped"
  }if(choice === "darmanitan"){
      choice = "darmanitan-standard"
  }if(choice === "tornadus"){
      choice = "tornadus-incarnate"
  }if(choice === "thunderus"){
    choice = "thundurus-incarnate"
  }if(choice === "landorus"){
        choice = "lanorus-incarnate"
  }if(choice === "keldeo"){
      choice = "keldeo-ordinary"
  }if(choice === "meloetta"){
      choice = "meloetta-aria"
  }if(choice === "aegislash"){
      choice = "aegislash-shield"
  }if(choice === "pumpkaboo"){
      choice = "pumpkaboo-average"
  }if(choice === "gourgeist"){
      choice = "gourgeist-average"
  }if(choice === "oricorio"){
      choice = "oricorio-baile"
  }if(choice === "lycanroc"){
      choice = "lycanroc-midday"
  }if(choice === "wishiwashi"){
      choice = "wishiwashi-solo"
  }if(choice === "minior"){
      choice = "minior-red-meteor"
  }if(choice ==="mimikyu"){
      choice = "mimikyu-disguised"
  }if(choice === "toxtricity"){
      choice = "toxtricity-amped"
  }if(choice === "eiscue"){
      choice = "eiscue-ice"
  }if(choice === "zacian"){
      choice = "zacian-hero"
  }if(choice === "zamazenta"){
      choice = "zamazenta-hero"
  }if(choice === "urshifu"){
      choice = "urshifu-single-strike"
  }

  const url = 'https://pokeapi.co/api/v2/pokemon/'+ `${choice}/`;  //fetch url
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        let pokemon = { //frankenstein pokemon data
            name: data.name,
            id: data.id,
            type: [],
            abilities: [],
            moves: [],
            height: (data.height * .1).toFixed(1),
            weight: (data.weight * .1).toFixed(1),
            imgDefaultFront: data.sprites.front_default,
            imgDefaultBack: data.sprites.back_default,
            imgShinyFront: data.sprites.front_shiny,
            imgShinyBack: data.sprites.back_shiny,
            strongAgainst: [],
            weakAgainst: [],
            immuneAgainst: [],
            statHp: data.stats[0].base_stat,
            statAttack: data.stats[1].base_stat,
            statDefense: data.stats[2].base_stat,
            statSpecialAttack: data.stats[3].base_stat,
            statSpecialDefense: data.stats[4].base_stat,
            statSpeed: data.stats[5].base_stat,
            evolutionNamesAll: [],
            evolutionImagesAll: []
        }
        data.types.forEach((el) => pokemon.type.push(el.type.name)); //pokemon typings into object;
        data.abilities.forEach((el) => pokemon.abilities.push(el.ability.name)); //pokemon abilities into object
        data.moves.forEach((el) => {
            if(el.move.name === "psychic") //accounts for the move psychic
                pokemon.moves.push(`${el.move.name}*`)
            else
                pokemon.moves.push(el.move.name)
            }); //pokemon moves into object

        console.log(pokemon) //new local pokemon
        newPokemon = pokemon; //create a global pokemon object
        removeCard()
        checkType()
        getEvolution()
        createPokedexCard()
        createSpriteCard()
        createStatCard()
        createTypeCard()
        createMoveCard()
        checkColor()
      })
      .catch(err => {
          console.log(`error ${err}`) //catches any errors
      });
    }
    
    function removeCard(){
        let allCards = document.querySelectorAll('.card')
        if(allCards.length === 0){
            return console.log('all good')
        }else{
            document.querySelectorAll('.card').forEach(e => e.remove());
        }
    }

    document.querySelector('#selection').addEventListener("change", function() {
        let pokedex = document.querySelector('#pokedex')
        let moves = document.querySelector('#moves')
        let type = document.querySelector('#type')
        let sprites = document.querySelector('#sprites')
        let stat = document.querySelector('#stat')
        let evolution = document.querySelector('#evolution')
        if(this.value == "pokedex") {
            pokedex.style.display = "block"
            moves.style.display = "none"
            type.style.display = "none"
            sprites.style.display = "none"
            stat.style.display = "none"
            evolution.style.display = "none"
            return newPokemon
        }if(this.value == "sprites") {
            pokedex.style.display = "none"
            moves.style.display = "none"
            type.style.display = "none"
            sprites.style.display = "block"
            stat.style.display = "none"
            evolution.style.display = "none"
            return newPokemon
        }if(this.value == "typings") {
            pokedex.style.display = "none"
            moves.style.display = "none"
            type.style.display = "block"
            sprites.style.display = "none"
            stat.style.display = "none"
            evolution.style.display = "none"
            return newPokemon
        }if(this.value == "stat") {
            pokedex.style.display = "none"
            moves.style.display = "none"
            type.style.display = "none"
            sprites.style.display = "none"
            stat.style.display = "block"
            evolution.style.display = "none"
            return newPokemon
        }if(this.value == "moves") {
            pokedex.style.display = "none"
            moves.style.display = "block"
            type.style.display = "none"
            sprites.style.display = "none"
            stat.style.display = "none"
            evolution.style.display = "none"
            return newPokemon
        }if(this.value == "evolution") {
            pokedex.style.display = "none"
            moves.style.display = "none"
            type.style.display = "none"
            sprites.style.display = "none"
            stat.style.display = "none"
            evolution.style.display = "block"
            return newPokemon
        }
        else{
            pokedex.style.display = "block"
            moves.style.display = "block"
            type.style.display = "block"
            sprites.style.display = "block" 
            stat.style.display = "block"
            evolution.style.display = "block"
            return newPokemon
        }
      });

      
      async function getEvolution() {
        let evolutionImages = []; //pokemon image urls
        let evolutionNames = []; //pokemon evolution chain names
        //
        const choice = document.querySelector("input").value; //get pokedata
        
        const url = "https://pokeapi.co/api/v2/pokemon/" + choice.toLowerCase();
        
        //
        const originalRes = await fetch(url); //original pokemon
        const pokemonObj = await originalRes.json();
        //
        const speciesRes = await fetch(pokemonObj.species.url); //species data
        const pokedex = await speciesRes.json();
        //
        const evolutionRes = await fetch(pokedex.evolution_chain.url); //evolution chain data
        const evolutionChain = await evolutionRes.json();

        if (evolutionChain.chain.evolves_to.length < 1) {
          evolutionImages.push(pokemonObj.sprites.front_default);
        } 
        else{
          evolutionNames.push(evolutionChain.chain.species.name);
          await multiplePokes(evolutionChain.chain.species.name, evolutionImages)
          //Has evolution
          let pathOne = [];
          for (const index of evolutionChain.chain.evolves_to) {//Multi evolutions
            pathOne.push(index.species.name);
            await multiplePokes(index.species.name, evolutionImages); 
        }
        //Get the images
        evolutionNames.push(pathOne.join(" or "))
        if (evolutionChain.chain.evolves_to[0].evolves_to.length > 0) {//Evolution ception
            let pathTwo = [];
            for (const index of evolutionChain.chain.evolves_to[0].evolves_to) {
              //If more than one, more fetches
              pathTwo.push(index.species.name);
              await multiplePokes(index.species.name, evolutionImages);
            }
            evolutionNames.push(pathTwo.join(" or "));
          }
        }
        // Object.entries(evolutionNames).forEach(([key,value]) => { newPokemon[key] = value })
        // newPokemon.evolutionNames.push(evoltuionsNames)
        evolutionNames.forEach((el) => newPokemon.evolutionNamesAll.push(el));
        evolutionImages.forEach((el) => newPokemon.evolutionImagesAll.push(el));
        console.log(evolutionNames)
        console.log(evolutionImages);
        createEvolutionCard()
        
      }
      
      //Poke Images
      async function multiplePokes(name, array) {
        let one = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let two = await one.json();
        array.push(two.sprites.front_default); //push img urls into images
      }

      
      function checkColor(){
        let elements = document.querySelectorAll('ul > li');
        for (let elem of elements) {
            if(elem.innerHTML === "normal")
                elem.style.background = "#a8a897"
            if(elem.innerHTML === "fire")
                elem.style.background = "#ff4422"
            if(elem.innerHTML === "water")
                elem.style.background = "#3399ff"
            if(elem.innerHTML === "electric")
                elem.style.background = "#ffcc33"
            if(elem.innerHTML === "grass")
                elem.style.background = "#77cc55"
            if(elem.innerHTML === "ice")
                elem.style.background = "#66ccff"
            if(elem.innerHTML === "fighting")
                elem.style.background = "#b05040"
            if(elem.innerHTML === "poison")
                elem.style.background = "#aa5599"
            if(elem.innerHTML === "ground")
                elem.style.background = "#ddbb55"
            if(elem.innerHTML === "flying")
                elem.style.background = "#8899ff"
            if(elem.innerHTML === "psychic")
                elem.style.background = "#ff5599"
            if(elem.innerHTML === "bug")
                elem.style.background = "#aabb22"
            if(elem.innerHTML === "rock")
                elem.style.background = "#bbaa66"
            if(elem.innerHTML === "ghost")
                elem.style.background = "#6666bb"
            if(elem.innerHTML === "dragon")
                elem.style.background = "#6154c2"
            if(elem.innerHTML === "dark")
                elem.style.background = "#775544"
            if(elem.innerHTML === "steel")
                elem.style.background = "#aaaabb"
            if(elem.innerHTML === "fairy")
                elem.style.background = "#ee99ee"
          }
    }