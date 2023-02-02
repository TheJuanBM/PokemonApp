interface PokemonData {
  id: string
  name: string
  image: string
  types: string[]
  abilities: string[]
}

export default class Pokemon {
  id: string
  name: string
  image: string
  types: string[]
  abilities: string[]

  constructor(pokemon: PokemonData) {
    this.id = pokemon.id
    this.name = pokemon.name
    this.image = pokemon.image
    this.types = pokemon.types
    this.abilities = pokemon.abilities
  }
}
