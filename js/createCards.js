function createPokedexCard(){
    let pokedexContainer = document.querySelector('#pokedex')

    let card = document.createElement('div')
    card.classList.add('card')
    pokedexContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = "--- Pokedex ---"
    card.append(title)

    let img = document.createElement('img')
    img.src = newPokemon.imgDefaultFront
    card.append(img)

    let nameContainer = document.createElement('div')
    nameContainer.classList.add('container')
    card.append(nameContainer)
    let nameTitle = document.createElement('h4')
    nameTitle.innerHTML = "Name: "
    nameContainer.append(nameTitle, ` ${newPokemon.name}`)

    let idContainer = document.createElement('div')
    idContainer.classList.add('container')
    card.append(idContainer)
    let id = document.createElement('h4')
    id.innerHTML = `Id: `
    idContainer.append(id, ` #${newPokemon.id}`)

    let heightContainer = document.createElement('div')
    heightContainer.classList.add('container')
    card.append(heightContainer)
    let height = document.createElement('h4')
    height.innerHTML = "Height: "
    heightContainer.append(height,` ${newPokemon.height}m`)

    let weightContainer = document.createElement('div')
    weightContainer.classList.add('container')
    card.append(weightContainer)
    let weight = document.createElement('h4')
    weight.innerHTML = "Weight: "
    weightContainer.append(weight, ` ${newPokemon.weight}kg`)

    let typing = document.createElement('h4')
    typing.innerHTML = "Type: "
    card.append(typing)

    let typeUl = document.createElement('ul')
    card.append(typeUl)
    let type = document.createElement('span')
    newPokemon.type.forEach( obj => {
        const li = document.createElement('li')
        li.textContent = obj
        typeUl.appendChild(li)
    })
    card.append(type)

    let abilityTitle = document.createElement('h4')
    abilityTitle.innerHTML = "Abilities: "
    card.append(abilityTitle)

    let abilitiesUl = document.createElement('ul')
    card.append(abilitiesUl)
    let abilities = document.createElement('span')
    newPokemon.abilities.forEach( obj => {
        const li = document.createElement('li')
        li.textContent = obj
        abilitiesUl.appendChild(li)
    })
    card.append(abilities)

}
function createSpriteCard(){
    let spritesContainer = document.querySelector('#sprites')

    let card = document.createElement('div')
    card.classList.add('card')
    spritesContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = "--- Sprites ---"
    card.append(title)

    let frontDefault = document.createElement('img')
    frontDefault.src = newPokemon.imgDefaultFront
    card.append(frontDefault)

    let backDefault = document.createElement('img')
    backDefault.src = newPokemon.imgDefaultBack
    card.append(backDefault)

    let frontShiny = document.createElement('img')
    frontShiny.src = newPokemon.imgShinyFront
    card.append(frontShiny)

    let backShiny = document.createElement('img')
    backShiny.src = newPokemon.imgShinyBack
    card.append(backShiny)
}
function createStatCard(){
    let pokedexContainer = document.querySelector('#stat')

    let card = document.createElement('div')
    card.classList.add('card')
    pokedexContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = `--- Stats ---`
    card.append(title)

    let img = document.createElement('img')
    img.src = newPokemon.imgDefaultFront
    card.append(img)

    let hpContainer = document.createElement('div')
    hpContainer.classList.add('container')
    card.append(hpContainer)
    let hp = document.createElement('h4')
    hp.innerHTML = `Hp: `
    hpContainer.append(hp, `${newPokemon.statHp}`)

    let attackContainer = document.createElement('div')
    attackContainer.classList.add('container')
    card.append(attackContainer)
    let attack = document.createElement('h4')
    attack.innerHTML = `Atk: `
    attackContainer.append(attack, `${newPokemon.statAttack}`)

    let defenseContainer = document.createElement('div')
    defenseContainer.classList.add('container')
    card.append(defenseContainer)
    let defense = document.createElement('h4')
    defense.innerHTML = `Def: `
    defenseContainer.append(defense, `${newPokemon.statDefense}`)

    let specialAttackContainer = document.createElement('div')
    specialAttackContainer.classList.add('container')
    card.append(specialAttackContainer)
    let specialAttack = document.createElement('h4')
    specialAttack.innerHTML = `Sp Atk: `
    specialAttackContainer.append(specialAttack, `${newPokemon.statSpecialAttack}`)

    let specialDefenseContainer = document.createElement('div')
    specialDefenseContainer.classList.add('container')
    card.append(specialDefenseContainer)
    let specialDefense = document.createElement('h4')
    specialDefense.innerHTML = `Sp Def: `
    specialDefenseContainer.append(specialDefense, `${newPokemon.statSpecialDefense}`)

    let speedContainer = document.createElement('div')
    speedContainer.classList.add('container')
    card.append(speedContainer)
    let speed = document.createElement('h4')
    speed.innerHTML = `Spd: `
    speedContainer.append(speed, `${newPokemon.statSpeed}`)
}

function createTypeCard(){
    let typeContainer = document.querySelector('#type')
    
    let card = document.createElement('div')
    card.classList.add('card')
    typeContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = "--- Typings ---"
    card.append(title)

    let type = document.createElement('h3')
    type.innerHTML = "- Type(s) -"
    card.append(type)

    let typeUl = document.createElement('ul')
    card.append(typeUl)
    newPokemon.type.forEach( obj => {
        const li = document.createElement('li')
        li.textContent = obj
        typeUl.appendChild(li)
    })

    let strong = document.createElement('h3')
    strong.innerHTML = "- Strong Against -"
    card.append(strong)

    let strongUl = document.createElement('ul')
    card.append(strongUl)
    newPokemon.strongAgainst.forEach( obj =>{
        const li = document.createElement('li')
        li.textContent = obj
        strongUl.appendChild(li)
    })

    let weak = document.createElement('h3')
    weak.innerHTML = "- Weak Against -"
    card.append(weak)

    let weakUl = document.createElement('ul')
    card.append(weakUl)
    newPokemon.weakAgainst.forEach( obj =>{
        const li = document.createElement('li')
        li.textContent = obj
        weakUl.appendChild(li)
    })
    
    let immune = document.createElement('h3')
    immune.innerHTML = "- Immune Against -"
    card.append(immune)

    let immuneUl = document.createElement('ul')
    card.append(immuneUl)
    newPokemon.immuneAgainst.forEach( obj =>{
        const li = document.createElement('li')
        li.textContent = obj
        immuneUl.appendChild(li)
    })
}

function createMoveCard(){
    let movesContainer = document.querySelector('#moves')
    
    let card = document.createElement('div')
    card.classList.add('card')
    movesContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = "--- Moves ---"
    card.append(title)

    let ul = document.createElement('ul')
    card.append(ul)
    newPokemon.moves.forEach( obj =>{
        const li = document.createElement('li')
        li.textContent = obj
        ul.appendChild(li)
    })
}

function createEvolutionCard(){
    let evolutionContainer = document.querySelector('#evolution')

    let card = document.createElement('div')
    card.classList.add('card')
    evolutionContainer.append(card)

    let title = document.createElement('h2')
    title.innerHTML = "--- Evolves ---"
    card.append(title)

    let evolutionNameContainer = document.createElement('span')
    evolutionNameContainer.innerHTML = newPokemon.evolutionNamesAll.join(' -> ')
    card.append(evolutionNameContainer)

    let evolutionImagesContainer = document.createElement('div')
    card.append(evolutionImagesContainer)
    newPokemon.evolutionImagesAll.forEach( obj => {
        const img = document.createElement('img')
        img.src = obj
        evolutionImagesContainer.appendChild(img)
    })
}