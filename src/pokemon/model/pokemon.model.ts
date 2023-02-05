export default class Pokemon {
  id: string
  name: string
  image: string
  color: string
  habitat: string
  generation: string
  evolutionPokemon: string
  weight: number
  height: number
  types: string[]
  eggGroups: string[]
  stats: {
    label: string
    value: number
  }[]

  constructor(pokemon: Pokemon) {
    this.id = pokemon.id
    this.name = pokemon.name
    this.types = pokemon.types
    this.color = pokemon.color
    this.image = pokemon.image
    this.stats = pokemon.stats
    this.height = pokemon.height
    this.weight = pokemon.weight
    this.habitat = pokemon.habitat
    this.eggGroups = pokemon.eggGroups
    this.generation = pokemon.generation
    this.evolutionPokemon = pokemon.evolutionPokemon
  }
}
