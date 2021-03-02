function checkType(){
    //NORMAL
    if(newPokemon.type[0] === "normal" && typeof newPokemon.type[1] ===  "undefined"){
        newPokemon.strongAgainst = []
        newPokemon.weakAgainst.push("fighting")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "fire")|| 
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "fire")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "water")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "water")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "steel")
        newPokemon.weakAgainst.push("electric", "grass", "fighting")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "electric")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "electric")){
        newPokemon.strongAgainst.push("electric", "flying", "steel")
        newPokemon.weakAgainst.push("fighting", "ground")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "grass")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "grass")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "bug")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "fighting")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "fighting")){
        newPokemon.strongAgainst.push("bug", "rock", "dark")
        newPokemon.weakAgainst.push("fighting", "flying", "psychic", "steel")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("poison", "rock")
        newPokemon.weakAgainst.push("water", "grass", "ice", "fighting")
        newPokemon.immuneAgainst.push("ghost", "electric")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("grass", "bug")
        newPokemon.weakAgainst.push("electric", "ice", "rock")
        newPokemon.immuneAgainst.push("ghost", "ground")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("psychic")
        newPokemon.weakAgainst.push("bug", "dark")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass")
        newPokemon.weakAgainst.push("ice", "fighting", "dragon", "fairy")
        newPokemon.immuneAgainst.push("ghost")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("dark")
        newPokemon.weakAgainst.push("fighting", "bug", "fairy")
        newPokemon.immuneAgainst.push("ghost", "psychic")
    }
    if((newPokemon.type[0] === "normal" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "normal" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("bug", "dark")
        newPokemon.weakAgainst.push("poison", "steel")
        newPokemon.immuneAgainst.push("ghost", "dark")
    }//FIRE
    if((newPokemon.type[0] === "fire" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "fire" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "water")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "water")){
        newPokemon.strongAgainst.push("fire", "ice", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "electric")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "electric")){
        newPokemon.strongAgainst.push("fire", "electric", "grass", "ice", "flying", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "ice")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "ice")){
        newPokemon.strongAgainst.push("grass", "ice", "bug", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "fighting")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "fighting")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "bug", "dark", "steel")
        newPokemon.weakAgainst.push("water", "ground", "flying", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "poison")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "poison")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "fighting", "poison", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground", "psychic", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("fire", "poison", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("fire", "grass", "fighting", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "electric", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "fighting", "psychic", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "ice", "fighting", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "flying", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("rock", "fire", "ice", "poison", "flying", "bug", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "poison", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "ground", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "electric", "grass", "bug", "steel")
        newPokemon.weakAgainst.push("ground", "rock", "dragon")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("fire", "grass", "ice", "ghost", "dark", "steel")
        newPokemon.weakAgainst.push("water", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fire" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "fire" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "flying", "psychic", "bug", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    //WATER
    if((newPokemon.type[0] === "water" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "water" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "steel")
        newPokemon.weakAgainst.push("grass", "electric")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "electric")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "electric")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "flying", "steel")
        newPokemon.weakAgainst.push("grass", "ground")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "grass")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "grass")){
        newPokemon.strongAgainst.push("water", "ground", "steel")
        newPokemon.weakAgainst.push("poison", "flying", "bug")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "ice")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "ice")){
        newPokemon.strongAgainst.push("water", "ice")
        newPokemon.weakAgainst.push("electric", "grass", "fighting", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "fighting")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "fighting")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "bug", "rock", "dark", "steel")
        newPokemon.weakAgainst.push("electric", "grass", "flying", "psychic", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "poison")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "poison")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "fighting", "poison", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("electric", "ground", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("fire", "poison", "rock", "steel")
        newPokemon.weakAgainst.push("grass")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("fire", "water", "fighting", "bug", "steel")
        newPokemon.weakAgainst.push("electric", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "fighting", "psychic", "steel")
        newPokemon.weakAgainst.push("electric", "grass", "bug", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("water", "ice", "fighting", "ground")
        newPokemon.weakAgainst.push("electric", "flying", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "ice", "poison", "flying")
        newPokemon.weakAgainst.push("electric", "grass", "fighting", "poison")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "poison", "bug", "steel")
        newPokemon.weakAgainst.push("electric", "grass", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "steel")
        newPokemon.weakAgainst.push("dragon", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "ghost", "dark", "steel")
        newPokemon.weakAgainst.push("electric", "grass", "fighting", "bug", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "water", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("electric", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "water" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "water" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("fire", "water", "ice", "fighting", "bug", "dark")
        newPokemon.weakAgainst.push("electric", "grass", "poison")
        newPokemon.immuneAgainst.push("dragon")
    }
    //ELECTRIC
    if((newPokemon.type[0] === "electric" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "electric" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("electric", "flying", "steel")
        newPokemon.weakAgainst.push("ground")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "grass")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "grass")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "steel")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "bug")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "ice")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "ice")){
        newPokemon.strongAgainst.push("electric", "ice", "flying")
        newPokemon.weakAgainst.push("fire", "fighting", "ground", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "poison")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "poison")){
        newPokemon.strongAgainst.push("electric", "grass", "fighting", "poison", "flying", "bug", "steel", "fairy")
        newPokemon.weakAgainst.push("ground", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("poison", "flying", "rock", "steel")
        newPokemon.weakAgainst.push("water", "grass", "ice", "ground")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("grass", "fighting", "flying", "bug", "steel")
        newPokemon.weakAgainst.push("ice", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("electric", "fighting", "flying", "psychic", "steel")
        newPokemon.weakAgainst.push("ground", "bug", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("electric", "grass", "fighting", "steel")
        newPokemon.weakAgainst.push("fire", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "electric", "poison", "flying")
        newPokemon.weakAgainst.push("water", "grass", "fighting", "ground")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("electric", "poison", "flying", "bug", "steel")
        newPokemon.weakAgainst.push("ground", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "flying", "steel")
        newPokemon.weakAgainst.push("ice", "ground", "dragon", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("electric", "flying", "ghost", "dark", "steel")
        newPokemon.weakAgainst.push("fighting", "ground", "bug", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "electric", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "electric" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "electric" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("electric", "fighting", "flying", "bug", "dark")
        newPokemon.weakAgainst.push("poison", "ground")
        newPokemon.immuneAgainst.push("dragon")
    }//GRASS
    if((newPokemon.type[0] === "grass" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "grass" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "bug")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "ice")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "ice")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground")
        newPokemon.weakAgainst.push("fire", "fighting", "poison", "flying", "bug", "rock", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "fighting")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "fighting")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground", "rock", "dark")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "psychic", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "poison")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "poison")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "fighting", "fairy")
        newPokemon.weakAgainst.push("fire", "ice", "flying", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("ground", "rock")
        newPokemon.weakAgainst.push("fire", "ice", "flying", "bug")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("water", "grass", "fighting")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "fighting", "ground", "psychic")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "ground", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "fighting", "ground")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "bug", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "electric")
        newPokemon.weakAgainst.push("ice", "fighting", "bug", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground")
        newPokemon.weakAgainst.push("fire", "ice", "flying", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground")
        newPokemon.weakAgainst.push("ice", "poison", "flying", "bug", "dragon", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "ground", "ghost", "dark")
        newPokemon.weakAgainst.push("fire", "ice", "fighting", "poison", "flying", "bug", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "water", "electric", "grass", "psychic", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "fighting")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "grass" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "grass" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("water", "electric", "grass", "fighting", "ground", "dark")
        newPokemon.weakAgainst.push("fire", "ice", "poison", "flying", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    //ICE
    if((newPokemon.type[0] === "ice" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "ice" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("ice")
        newPokemon.weakAgainst.push("fire", "fighting", "rock", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "fighting")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "fighting")){
        newPokemon.strongAgainst.push("ice", "bug", "dark")
        newPokemon.weakAgainst.push("fire", "fighting", "flying", "psychic", "steel", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("poison")
        newPokemon.weakAgainst.push("fire", "water", "grass", "fighting", "steel")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("grass", "bug")
        newPokemon.weakAgainst.push("fire", "electric", "rock", "steel")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("ice", "psychic")
        newPokemon.weakAgainst.push("fire", "bug", "rock", "ghost", "steel", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "ice", "ground")
        newPokemon.weakAgainst.push("fire", "flying", "rock", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "ice", "posion", "flying")
        newPokemon.weakAgainst.push("water", "grass", "fighting", "ground", "rock", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("ice", "poison", "bug")
        newPokemon.weakAgainst.push("fire", "rock", "ghost", "dark", "steel")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("water", "electric", "grass")
        newPokemon.weakAgainst.push("fighting", "rock", "dragon", "steel", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("ice", "ghost", "dark")
        newPokemon.weakAgainst.push("fire", "fighting", "bug", "rock", "steel", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("grass", "ice", "flying", "psychic", "bug", "dragon", "fairy")
        newPokemon.weakAgainst.push("fire", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "ice" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "ice" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("ice", "bug", "dark")
        newPokemon.weakAgainst.push("fire", "poison", "rock", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }//FIGHTING
    if((newPokemon.type[0] === "fighting" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "fighting" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("bug", "rock", "dark")
        newPokemon.weakAgainst.push("flying", "psychic", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "poison")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "poison")){
        newPokemon.strongAgainst.push("grass", "fighting", "poison", "bug", "rock", "dark")
        newPokemon.weakAgainst.push("ground", "flying", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("grass", "fighting", "bug", "dark")
        newPokemon.weakAgainst.push("electric", "ice", "flying", "psychic", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("fighting", "rock")
        newPokemon.weakAgainst.push("flying", "ghost", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "fighting", "ground", "bug", "dark")
        newPokemon.weakAgainst.push("fire", "flying", "psychic", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "bug", "rock", "dark")
        newPokemon.weakAgainst.push("water", "grass", "fighting", "ground", "psychic", "steel", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("poison", "bug", "rock")
        newPokemon.weakAgainst.push("flying", "psychic", "ghost", "fairy")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "bug", "rock", "dark")
        newPokemon.weakAgainst.push("ice", "flying", "psychic", "dragon")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("rock", "ghost", "dark")
        newPokemon.weakAgainst.push("fighting", "flying", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "fighting" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "fighting" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "bug", "rock", "dragon", "dark", "steel")
        newPokemon.weakAgainst.push("fire", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }//POISON
    if((newPokemon.type[0] === "poison" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "poison" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("grass", "fighting", "poison", "bug", "fairy")
        newPokemon.weakAgainst.push("ground", "psychic")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "ground")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "ground")){
        newPokemon.strongAgainst.push("fighting", "poison", "bug", "rock")
        newPokemon.weakAgainst.push("water", "ice", "ground", "psychic")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("grass", "fighting", "poison", "bug", "fairy")
        newPokemon.weakAgainst.push("electric", "ice", "psychic", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("grass", "fighting", "poison", "fairy")
        newPokemon.weakAgainst.push("ground", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "fighting", "poison", "bug", "fairy")
        newPokemon.weakAgainst.push("fire", "flying", "psychic", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying", "bug")
        newPokemon.weakAgainst.push("water", "ground", "psychic", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("grass", "poison", "bug", "fairy")
        newPokemon.weakAgainst.push("ground", "psychic", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "fighting", "poison", "bug")
        newPokemon.weakAgainst.push("ice", "ground", "psychic", "dragon")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("grass", "poison", "ghost", "dark")
        newPokemon.weakAgainst.push("ground")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "poison" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "poison" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("grass", "fighting", "bug", "dark", "fairy")
        newPokemon.weakAgainst.push("ground", "psychic", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    //GROUND
    if((newPokemon.type[0] === "ground" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "ground" && typeof newPokemon.type[2] === "undefined")){
        newPokemon.strongAgainst.push("poison", "rock")
        newPokemon.weakAgainst.push("water", "grass", "ice")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "flying")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "flying")){
        newPokemon.strongAgainst.push("fighting", "poison", "bug")
        newPokemon.weakAgainst.push("water", "ice")
        newPokemon.immuneAgainst.push("electric", "ground")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("fighting", "poison", "psychic", "rock")
        newPokemon.weakAgainst.push("water", "grass", "ice", "bug", "ghost", "dark")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("fighting", "poison", "ground")
        newPokemon.weakAgainst.push("fire", "water", "ice", "flying")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying", "rock")
        newPokemon.weakAgainst.push("water", "grass", "ice", "fighting", "ground", "steel")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("poison", "bug", "rock")
        newPokemon.weakAgainst.push("water", "grass", "ice", "ghost", "dark")
        newPokemon.immuneAgainst.push("electric", "normal", "fighting")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "poison", "rock")
        newPokemon.weakAgainst.push("ice", "dragon", "fairy")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("poison", "rock", "ghost", "dark")
        newPokemon.weakAgainst.push("water", "grass", "ice", "fighting", "bug", "fairy")
        newPokemon.immuneAgainst.push("electric")
    }
    if((newPokemon.type[0] === "ground" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "ground" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "water", "fighting", "ground")
        newPokemon.immuneAgainst.push("electric")
    }
    //FLYING
    if((newPokemon.type[0] === "flying" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "flying" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("grass", "fighting", "bug")
        newPokemon.weakAgainst.push("electric", "ice", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "psychic")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "psychic")){
        newPokemon.strongAgainst.push("grass", "fighting", "psychic")
        newPokemon.weakAgainst.push("electric", "ice", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "fighting", "bug")
        newPokemon.weakAgainst.push("fire", "electric", "ice", "flying", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying", "bug")
        newPokemon.weakAgainst.push("water", "electric", "ice", "rock")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("grass", "poison", "bug")
        newPokemon.weakAgainst.push("electric", "ice", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("ground", "normal", "ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "grass", "fighting", "bug")
        newPokemon.weakAgainst.push("ice", "rock", "dragon", "fairy")
        newPokemon.immuneAgainst.push("ground")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("grass", "ghost", "dark")
        newPokemon.weakAgainst.push("electric", "ice", "rock", "fairy")
        newPokemon.immuneAgainst.push("ground", "psychic")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass", "flying", "psychic", "bug", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "electric")
        newPokemon.immuneAgainst.push("ground", "poison")
    }
    if((newPokemon.type[0] === "flying" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "flying" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("grass", "fighting", "bug", "dark")
        newPokemon.weakAgainst.push("electric", "ice", "poison", "rock", "steel")
        newPokemon.immuneAgainst.push("ground", "dragon")
    }
    //PSYCHIC
    if((newPokemon.type[0] === "psychic" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "psychic" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("fighting", "psychic")
        newPokemon.weakAgainst.push("bug", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "bug")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "bug")){
        newPokemon.strongAgainst.push("grass", "fighting", "ground", "psychic")
        newPokemon.weakAgainst.push("fire", "flying", "bug", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "rock")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying", "psychic")
        newPokemon.weakAgainst.push("water", "grass", "ground", "bug", "ghost", "dark", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("poison", "psychic")
        newPokemon.weakAgainst.push("ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "fighting", "psychic")
        newPokemon.weakAgainst.push("ice", "bug", "ghost", "dragon", "dark", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("")
        newPokemon.weakAgainst.push("bug", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "flying", "psychic", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "ground", "ghost", "dark")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "psychic" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "psychic" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("fighting", "psychic")
        newPokemon.weakAgainst.push("poison", "ghost", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    //BUG
    if((newPokemon.type[0] === "bug" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "bug" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("grass", "fighting", "ground")
        newPokemon.weakAgainst.push("fire", "flying", "rock")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "bug" && newPokemon.type[1] === "rock")||
    (newPokemon.type[1] === "bug" && newPokemon.type[2] === "rock")){
        newPokemon.strongAgainst.push("normal", "poison")
        newPokemon.weakAgainst.push("water", "rock", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "bug" && newPokemon.type[1] === "ghost")||
    (newPokemon.type[1] === "bug" && newPokemon.type[0] === "ghost")){
        newPokemon.strongAgainst.push("grass", "poison", "ground", "bug")
        newPokemon.weakAgainst.push("fire", "flying", "rock", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "bug" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "bug" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass" ,"ice", "psychic", "bug", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "bug" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "bug" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("grass", "fighting", "ground", "bug", "dark")
        newPokemon.weakAgainst.push("fire", "poison", "flying", "rock", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    //ROCK
    if((newPokemon.type[0] === "rock" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "rock" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying")
        newPokemon.weakAgainst.push("water", "grass", "fighting", "ground", "steel")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "rock" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "rock" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("normal", "fire", "electric", "poison", "flying")
        newPokemon.weakAgainst.push("ice", "fighting", "ground", "dragon", "steel", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "rock" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "rock" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("normal", "fire", "poison", "flying", "ghost", "dark")
        newPokemon.weakAgainst.push("water", "grass", "fighting", "ground", "bug", "steel", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "rock" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "rock" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "ice", "flying", "psychic", "bug", "rock", "dragon", "fairy")
        newPokemon.weakAgainst.push("water", "fighting", "ground")
        newPokemon.immuneAgainst.push("steel")
    }
    if((newPokemon.type[0] === "rock" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "rock" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("normal", "fire", "flying", "bug")
        newPokemon.weakAgainst.push("water", "grass", "ground", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    //GHOST
    if((newPokemon.type[0] === "ghost" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "ghost" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("poison", "bug")
        newPokemon.weakAgainst.push("ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "ghost" && newPokemon.type[1] === "dragon")||
    (newPokemon.type[1] === "ghost" && newPokemon.type[0] === "dragon")){
        newPokemon.strongAgainst.push("water", "fire", "electric", "grass", "poison", "bug")
        newPokemon.weakAgainst.push("ice", "ghost", "dragon", "dark", "fairy")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "ghost" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "ghost" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("poison")
        newPokemon.weakAgainst.push("fairy")
        newPokemon.immuneAgainst.push("normal", "fighting", "psychic")
    }
    if((newPokemon.type[0] === "ghost" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "ghost" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "ground", "ghost", "dark")
        newPokemon.immuneAgainst.push("normal", "fighting")
    }
    if((newPokemon.type[0] === "ghost" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "ghost" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("bug")
        newPokemon.weakAgainst.push("ghost", "steel")
        newPokemon.immuneAgainst.push("normal", "fighting", "dragon")
    }//DRAGON
    if((newPokemon.type[0] === "dragon" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "dragon" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass")
        newPokemon.weakAgainst.push("ice", "dragon", "fairy")
        newPokemon.immuneAgainst.push("")
    }
    if((newPokemon.type[0] === "dragon" && newPokemon.type[1] === "dark")||
    (newPokemon.type[1] === "dragon" && newPokemon.type[0] === "dark")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "poison", "bug")
        newPokemon.weakAgainst.push("ice", "fighting", "bug", "dragon", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "dragon" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "dragon" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "water", "electric", "grass", "flying", "psychic", "bug", "rock", "steel")
        newPokemon.weakAgainst.push("ice", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "dragon" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "dragon" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("fire", "water", "electric", "grass", "fighting", "bug", "dark")
        newPokemon.weakAgainst.push("ice", "poison", "steel", "fairy")
        newPokemon.immuneAgainst.push("dragon")
    }
    //DARK
    if((newPokemon.type[0] === "dark" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "dark" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("ghost", "dark")
        newPokemon.weakAgainst.push("fighting", "bug", "fairy")
        newPokemon.immuneAgainst.push("psychic")
    }
    if((newPokemon.type[0] === "dark" && newPokemon.type[1] === "steel")||
    (newPokemon.type[1] === "dark" && newPokemon.type[0] === "steel")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "flying", "rock", "ghost", "dragon", "dark", "steel")
        newPokemon.weakAgainst.push("fire", "fighting", "ground")
        newPokemon.immuneAgainst.push("psychic", "poison")
    }
    if((newPokemon.type[0] === "dark" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "dark" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("ghost", "dark")
        newPokemon.weakAgainst.push("poison", "steel", "fairy")
        newPokemon.immuneAgainst.push("psychic", "dragon")
    }
    //STEEL
    if((newPokemon.type[0] === "steel" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "steel" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy")
        newPokemon.weakAgainst.push("fire", "fighting", "ground")
        newPokemon.immuneAgainst.push("poison")
    }
    if((newPokemon.type[0] === "steel" && newPokemon.type[1] === "fairy")||
    (newPokemon.type[1] === "steel" && newPokemon.type[0] === "fairy")){
        newPokemon.strongAgainst.push("normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dark", "fairy")
        newPokemon.weakAgainst.push("fire", "ground")
        newPokemon.immuneAgainst.push("poison", "dragon")
    }//FAIRY
    if((newPokemon.type[0] === "fairy" && typeof newPokemon.type[1] === "undefined")||
    (newPokemon.type[1] === "fairy" && typeof newPokemon.type[0] === "undefined")){
        newPokemon.strongAgainst.push("fighting", "bug", "dark")
        newPokemon.weakAgainst.push("poison", "steel")
        newPokemon.immuneAgainst.push("dragon")
    }
    else{
        console.log('hello')
    }
}
